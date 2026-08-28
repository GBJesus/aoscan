import crypto from 'crypto'

function parseCookies(cookieHeader = '') {
  return cookieHeader
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((acc, item) => {
      const index = item.indexOf('=')

      if (index === -1) return acc

      const key = item.slice(0, index)
      const value = item.slice(index + 1)

      acc[key] = decodeURIComponent(value)

      return acc
    }, {})
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

function decodePayload(encodedPayload) {
  const normalized = encodedPayload
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const padding =
    normalized.length % 4 === 0
      ? ''
      : '='.repeat(4 - (normalized.length % 4))

  return JSON.parse(
    Buffer.from(
      normalized + padding,
      'base64'
    ).toString('utf8')
  )
}

function getSessionPayload(token, secret) {
  try {
    if (!token || !secret) {
      return null
    }

    const parts = token.split('.')

    if (parts.length !== 2) {
      return null
    }

    const [
      encodedPayload,
      receivedSignature
    ] = parts

    const expectedSignature = sign(
      encodedPayload,
      secret
    )

    if (
      !safeEqual(
        receivedSignature,
        expectedSignature
      )
    ) {
      return null
    }

    const payload = decodePayload(
      encodedPayload
    )

    if (!payload.exp) {
      return null
    }

    if (Date.now() > payload.exp) {
      return null
    }

    return payload

  } catch (error) {
    console.error(
      'Erro ao validar sessão:',
      error
    )

    return null
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido.'
    })
  }

  try {
    const secret =
      process.env.TRAINING_SESSION_SECRET

    const appsScriptUrl =
      process.env.TRAINING_APPS_SCRIPT_URL

    if (!secret || !appsScriptUrl) {
      return res.status(500).json({
        success: false,
        message: 'Erro de configuração.'
      })
    }

    const cookies = parseCookies(
      req.headers.cookie || ''
    )

    const token =
      cookies.training_session

    const session =
      getSessionPayload(
        token,
        secret
      )

    if (!session) {
      return res.status(401).json({
        success: false,
        message: 'Sessão inválida.'
      })
    }

    const profile = String(
      session.profile || ''
    )
      .trim()
      .toUpperCase()

    if (profile !== 'ADMIN') {
      return res.status(403).json({
        success: false,
        message: 'Acesso não autorizado.'
      })
    }

    const name = String(
      req.body?.name || ''
    ).trim()

    const email = String(
      req.body?.email || ''
    )
      .trim()
      .toLowerCase()

    const password = String(
      req.body?.password || ''
    )

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message:
          'Nome, e-mail e senha são obrigatórios.'
      })
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          'A senha deve ter pelo menos 8 caracteres.'
      })
    }

    const response =
      await fetch(appsScriptUrl, {
        method: 'POST',

        headers: {
          'Content-Type':
            'text/plain;charset=utf-8'
        },

        body: JSON.stringify({
          action: 'create_user',
          name,
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
        message:
          'Erro ao cadastrar usuário.'
      })
    }

    if (!data.success) {
      return res.status(400).json({
        success: false,
        message:
          data.message ||
          'Não foi possível cadastrar.'
      })
    }

    return res.status(201).json({
      success: true,
      user: data.user
    })

  } catch (error) {
    console.error(
      'Erro no cadastro administrativo:',
      error
    )

    return res.status(500).json({
      success: false,
      message: 'Erro interno.'
    })
  }
}