import crypto from 'crypto'

function base64UrlEncode(value) {
  return Buffer
    .from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

function sign(value, secret) {
  return crypto
    .createHmac('sha256', secret)
    .update(value)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

function safeEqual(a, b) {
  const bufferA = Buffer.from(String(a))
  const bufferB = Buffer.from(String(b))

  if (bufferA.length !== bufferB.length) {
    return false
  }

  return crypto.timingSafeEqual(bufferA, bufferB)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido.'
    })
  }

  try {
    const email = String(req.body?.email || '')
      .trim()
      .toLowerCase()

    const password = String(
      req.body?.password || ''
    )

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'E-mail e senha são obrigatórios.'
      })
    }

    const appsScriptUrl =
      process.env.TRAINING_APPS_SCRIPT_URL

    const secret =
      process.env.TRAINING_SESSION_SECRET

    const sessionHours = Number(
      process.env.TRAINING_SESSION_HOURS || 12
    )

    if (!appsScriptUrl || !secret) {
      console.error(
        'Variáveis de ambiente ausentes.'
      )

      return res.status(500).json({
        success: false,
        message: 'Erro de configuração.'
      })
    }

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        action: 'login',
        email,
        password
      })
    })

    const text = await response.text()

    let data

    try {
      data = JSON.parse(text)
    } catch {
      console.error(
        'Resposta inválida do Apps Script:',
        text
      )

      return res.status(502).json({
        success: false,
        message: 'Erro ao validar acesso.'
      })
    }

    if (
      !data.success ||
      !data.authenticated ||
      !data.user
    ) {
      return res.status(401).json({
        success: false,
        message:
          data.message ||
          'E-mail ou senha inválidos.'
      })
    }

    const expiresAt =
      Date.now() +
      sessionHours *
        60 *
        60 *
        1000

    const payload = {
      email: data.user.email,
      name: data.user.name,
      exp: expiresAt
    }

    const encodedPayload =
      base64UrlEncode(
        JSON.stringify(payload)
      )

    const signature =
      sign(encodedPayload, secret)

    const token =
      `${encodedPayload}.${signature}`

    const maxAge =
      sessionHours * 60 * 60

    res.setHeader(
      'Set-Cookie',
      [
        `training_session=${encodeURIComponent(token)}`,
        'Path=/',
        `Max-Age=${maxAge}`,
        'HttpOnly',
        'Secure',
        'SameSite=Lax'
      ].join('; ')
    )

    return res.status(200).json({
      success: true,
      user: {
        name: data.user.name,
        email: data.user.email
      }
    })

  } catch (error) {
    console.error(
      'Erro no login:',
      error
    )

    return res.status(500).json({
      success: false,
      message: 'Erro interno.'
    })
  }
}