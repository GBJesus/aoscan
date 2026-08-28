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

function validateSession(token, secret) {
  try {
    if (!token || !secret) {
      return null
    }

    const parts = token.split('.')

    if (parts.length !== 2) {
      return null
    }

    const [encodedPayload, receivedSignature] = parts

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

    if (
      !payload.exp ||
      Date.now() > payload.exp
    ) {
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

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido.'
    })
  }

  const cookies = parseCookies(
    req.headers.cookie || ''
  )

  const token = cookies.training_session

  const secret =
    process.env.TRAINING_SESSION_SECRET

  const user = validateSession(
    token,
    secret
  )

  if (!user) {
    return res.status(401).json({
      success: false,
      authenticated: false
    })
  }

  return res.status(200).json({
    success: true,
    authenticated: true,

    user: {
      name: user.name || '',
      email: user.email || '',
      profile: user.profile || 'ALUNO'
    }
  })
}