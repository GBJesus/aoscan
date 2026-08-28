import { next } from '@vercel/functions'
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

function isValidSession(token, secret) {
  try {
    if (!token || !secret) {
      return false
    }

    const parts = token.split('.')

    if (parts.length !== 2) {
      return false
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
      return false
    }

    const payload = decodePayload(
      encodedPayload
    )

    if (!payload.exp) {
      return false
    }

    if (Date.now() > payload.exp) {
      return false
    }

    return true
  } catch (error) {
    console.error(
      'Erro ao validar sessão:',
      error
    )

    return false
  }
}

export default function middleware(request) {
  const url = new URL(request.url)
  const pathname = url.pathname

  /*
   * Rotas públicas dentro de /treinamento
   */
  const publicRoutes = [
    '/treinamento/login',
    '/treinamento/login/',
    '/treinamento/login/index.html'
  ]

  if (publicRoutes.includes(pathname)) {
    return next()
  }

  /*
   * Só protege /treinamento e tudo abaixo dele.
   */
  if (
    !pathname.startsWith('/treinamento')
  ) {
    return next()
  }

  const cookies = parseCookies(
    request.headers.get('cookie') || ''
  )

  const token =
    cookies.training_session

  const secret =
    process.env.TRAINING_SESSION_SECRET

  const valid = isValidSession(
    token,
    secret
  )

  if (!valid) {
    const loginUrl = new URL(
      '/treinamento/login/index.html',
      request.url
    )

    return Response.redirect(
      loginUrl,
      302
    )
  }

  return next()
}

export const config = {
  matcher: [
    '/treinamento/:path*'
  ],
  runtime: 'nodejs'
}