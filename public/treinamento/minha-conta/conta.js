const form =
  document.getElementById('change-password-form')

const currentPassword =
  document.getElementById('current-password')

const newPassword =
  document.getElementById('new-password')

const confirmPassword =
  document.getElementById('confirm-password')

const message =
  document.getElementById('message')

const submitButton =
  document.getElementById('submit-button')

const userName =
  document.getElementById('user-name')

const userEmail =
  document.getElementById('user-email')


function showMessage(text, type = 'error') {
  message.textContent = text

  message.className =
    type === 'success'
      ? 'text-sm rounded-lg px-4 py-3 bg-green-50 text-green-700 border border-green-200'
      : 'text-sm rounded-lg px-4 py-3 bg-red-50 text-red-700 border border-red-200'
}


async function loadUser() {
  try {
    const response = await fetch(
      '/api/treinamento-me',
      {
        method: 'GET',
        credentials: 'same-origin'
      }
    )

    const data = await response.json()

    if (!response.ok || !data.success) {
      window.location.href =
        '/treinamento/login/index.html'

      return
    }

    userName.textContent =
      data.user?.name || ''

    userEmail.textContent =
      data.user?.email || ''

  } catch (error) {
    console.error(
      'Erro ao carregar usuário:',
      error
    )
  }
}


form.addEventListener(
  'submit',
  async function (event) {
    event.preventDefault()

    message.classList.add('hidden')

    const current =
      currentPassword.value

    const newValue =
      newPassword.value

    const confirmation =
      confirmPassword.value

    if (newValue !== confirmation) {
      showMessage(
        'As novas senhas não coincidem.'
      )

      return
    }

    if (newValue.length < 8) {
      showMessage(
        'A nova senha deve ter pelo menos 8 caracteres.'
      )

      return
    }

    submitButton.disabled = true
    submitButton.textContent =
      'Alterando...'

    try {
      const response = await fetch(
        '/api/treinamento-change-password',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          credentials: 'same-origin',

          body: JSON.stringify({
            currentPassword: current,
            newPassword: newValue
          })
        }
      )

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
          'Não foi possível alterar a senha.'
        )
      }

      form.reset()

      showMessage(
        'Senha alterada com sucesso. Você será direcionado para o login.',
        'success'
      )

      setTimeout(() => {
        window.location.href =
          '/treinamento/login/index.html'
      }, 1500)

    } catch (error) {
      showMessage(
        error.message ||
        'Erro ao alterar senha.'
      )

    } finally {
      submitButton.disabled = false
      submitButton.textContent =
        'Alterar senha'
    }
  }
)


loadUser()