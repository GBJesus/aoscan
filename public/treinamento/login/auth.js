const form = document.querySelector('form')
const emailInput = document.querySelector('input[type="email"]')
const passwordInput = document.querySelector('input[type="password"]')
const submitButton = form?.querySelector('button[type="submit"]')

function showMessage(message, type = 'error') {
  let box = document.querySelector('#login-message')

  if (!box) {
    box = document.createElement('div')
    box.id = 'login-message'
    box.style.marginTop = '16px'
    box.style.padding = '12px 14px'
    box.style.borderRadius = '10px'
    box.style.fontSize = '14px'
    box.style.textAlign = 'center'

    form?.appendChild(box)
  }

  if (type === 'success') {
    box.style.background = '#ecfdf5'
    box.style.color = '#166534'
    box.style.border = '1px solid #bbf7d0'
  } else {
    box.style.background = '#fef2f2'
    box.style.color = '#991b1b'
    box.style.border = '1px solid #fecaca'
  }

  box.textContent = message
}

function setLoading(loading) {
  if (!submitButton) return

  submitButton.disabled = loading

  submitButton.textContent = loading
    ? 'Entrando...'
    : 'Entrar'
}

async function handleLogin(event) {
  event.preventDefault()

  const email = emailInput?.value?.trim() || ''
  const password = passwordInput?.value || ''

  if (!email || !password) {
    showMessage('Informe seu e-mail e sua senha.')
    return
  }

  setLoading(true)

  try {
    const response = await fetch('/api/treinamento-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json().catch(() => null)

    if (!response.ok || !data?.success) {
      throw new Error(
        data?.message || 'Não foi possível realizar o login.'
      )
    }

    showMessage(
      `Bem-vindo${data.user?.name ? `, ${data.user.name}` : ''}!`,
      'success'
    )

    setTimeout(() => {
      window.location.href = '/treinamento/'
    }, 500)

  } catch (error) {
    console.error(error)

    showMessage(
      error?.message ||
      'Erro ao realizar login. Tente novamente.'
    )

    setLoading(false)
  }
}

if (form) {
  form.addEventListener('submit', handleLogin)
}