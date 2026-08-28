export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido.'
    })
  }

  res.setHeader(
    'Set-Cookie',
    [
      'training_session=',
      'Path=/',
      'Max-Age=0',
      'HttpOnly',
      'Secure',
      'SameSite=Lax'
    ].join('; ')
  )

  return res.status(200).json({
    success: true
  })
}