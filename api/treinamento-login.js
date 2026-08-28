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

function createSessionToken(user, secret, hours) {
  const payload = {
    email: user.email,
    name: user.name || '',
    exp: Date.now() + hours * 60 * 60 * 1000
  }

  const encodedPayload = base64UrlEncode(
    JSON.stringify(payload)
  )

  const signature = sign(
    encodedPayload,
    secret
  )

  return `${encodedPayload}.${signature}`
}

function safeEqual(a, b) {
  const bufferA = Buffer.from(String(a))
  const bufferB = Buffer.from(String(b))

  if (bufferA.length !== bufferB.length) {
    return false
  }

  return crypto.timingSafeEqual(
    bufferA,
    bufferB
  )
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido.'
    })
  }

  try {
    const usersRaw = process.env.TRAINING_USERS
    const secret = process.env.TRAINING_SESSION_SECRET
    const sessionHours = Number(
      process.env.TRAINING_SESSION_HOURS || 12
    )

    if (!usersRaw || !secret) {
      console.error(
        'Variáveis de ambiente da área de treinamento não configuradas.'
      )

      return res.status(500).json({
        success: false,
        message: 'Configuração interna incompleta.'
      })
    }

    let users

    try {
      users = JSON.parse(usersRaw)
    } catch (error) {
      console.error(
        'TRAINING_USERS contém JSON inválido:',
        error
      )

      return res.status(500).json({
        success: false,
        message: 'Configuração de usuários inválida.'
      })
    }

    if (!Array.isArray(users)) {
      return res.status(500).json({
        success: false,
        message: 'Configuração de usuários inválida.'
      })
    }

    const email = String(
      req.body?.email || ''
    )
      .trim()
      .toLowerCase()

    const password = String(
      req.body?.password || ''
    )

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Informe e-mail e senha.'
      })
    }

    const user = users.find(
      (item) =>
        String(item.email || '')
          .trim()
          .toLowerCase() === email
    )

    const validPassword =
      user &&
      safeEqual(
        password,
        String(user.password || '')
      )

    if (!user || !validPassword) {
      return res.status(401).json({
        success: false,
        message: 'E-mail ou senha inválidos.'
      })
    }

    const token = createSessionToken(
      user,
      secret,
      sessionHours
    )

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
        email: user.email,
        name: user.name || ''
      }
    })
  } catch (error) {
    console.error(
      'Erro no login do treinamento:',
      error
    )

    return res.status(500).json({
      success: false,
      message: 'Erro interno ao realizar login.'
    })
  }
}