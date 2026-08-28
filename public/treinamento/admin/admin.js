const form = document.getElementById('create-user-form')
const submitButton = document.getElementById('submit-button')
const message = document.getElementById('message')
const adminName = document.getElementById('admin-name')

function showMessage(text, type = 'success') {
  message.textContent = text

  message.className =
    type === 'success'
      ? 'text-sm rounded-lg px-4 py-3 bg-green-50 text-green-700 border border-green-200'
      : 'text-sm rounded-lg px-4 py-3 bg-red-50 text-red-700 border border-red-200'
}

async function loadAdmin() {
  try {
    const response = await fetch('/api/treinamento-me', {
      credentials: 'same-origin'
    })

    if (!response.ok) {
      return
    }

    const data = await response.json()

    if (data.user?.name) {
      adminName.textContent = data.user.name
    }

  } catch (error) {
    console.error('Erro ao carregar usuário:', error)
  }
}

async function createUser(event) {
  event.preventDefault()

  const name = document
    .getElementById('name')
    .value
    .trim()

  const email = document
    .getElementById('email')
    .value
    .trim()
    .toLowerCase()

  const password = document
    .getElementById('password')
    .value

  submitButton.disabled = true
  submitButton.textContent = 'Cadastrando...'

  message.classList.add('hidden')

  try {
    const response = await fetch(
      '/api/treinamento-admin-create-user',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        credentials: 'same-origin',

        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    )

    const data = await response.json()

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || 'Não foi possível cadastrar o aluno.'
      )
    }

    form.reset()

    showMessage(
      'Aluno cadastrado com sucesso.',
      'success'
    )

  } catch (error) {
    showMessage(
      error.message || 'Erro ao cadastrar aluno.',
      'error'
    )

  } finally {
    submitButton.disabled = false
    submitButton.textContent = 'Cadastrar aluno'
  }
}

form.addEventListener('submit', createUser)

loadAdmin()