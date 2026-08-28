import crypto from 'crypto'

function parseCookies(cookieHeader = '') {
  return cookieHeader
    .split(';')
    .map(item => item.trim())
    .filter(Boolean)
    .reduce((acc, item) => {
      const index = item.indexOf('=')
      if (index === -1) return acc

      acc[item.slice(0, index)] =
        decodeURIComponent(item.slice(index + 1))

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
  const aBuffer = Buffer.from(String(a))
  const bBuffer = Buffer.from(String(b))

  if (aBuffer.length !== bBuffer.length) {
    return false
  }

  return crypto.timingSafeEqual(aBuffer, bBuffer)
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
    if (!token || !secret) return null

    const parts = token.split('.')
    if (parts.length !== 2) return null

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

    const payload = decodePayload(encodedPayload)

    if (!payload.exp) return null
    if (Date.now() > payload.exp) return null

    return payload
  } catch {
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

    const cookies = parseCookies(
      req.headers.cookie || ''
    )

    const session = getSessionPayload(
      cookies.training_session,
      secret
    )

    if (!session) {
      return res.status(401).json({
        success: false,
        message: 'Sessão inválida.'
      })
    }

    if (
      String(session.profile || '')
        .toUpperCase() !== 'ADMIN'
    ) {
      return res.status(403).json({
        success: false,
        message: 'Acesso não autorizado.'
      })
    }

    const userId = String(
      req.body?.userId || ''
    ).trim()

    const status = String(
      req.body?.status || ''
    )
      .trim()
      .toUpperCase()

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'Usuário não informado.'
      })
    }

    if (!['ATIVO', 'INATIVO'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Status inválido.'
      })
    }

    const response = await fetch(appsScriptUrl, {
      method: 'POST',

      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },

      body: JSON.stringify({
        action: 'update_user_status',
        userId,
        status
      })
    })

    const text = await response.text()

    let data

    try {
      data = JSON.parse(text)
    } catch {
      return res.status(502).json({
        success: false,
        message: 'Resposta inválida do Apps Script.'
      })
    }

    if (!data.success) {
      return res.status(400).json({
        success: false,
        message:
          data.message ||
          'Não foi possível alterar o status.'
      })
    }

    return res.status(200).json({
      success: true,
      user: data.user
    })

  } catch (error) {
    console.error(
      'Erro ao alterar status:',
      error
    )

    return res.status(500).json({
      success: false,
      message: 'Erro interno.'
    })
  }
}