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

    await loadUsers()

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

const usersLoading =
  document.getElementById('users-loading')

const usersError =
  document.getElementById('users-error')

const usersEmpty =
  document.getElementById('users-empty')

const usersTableWrapper =
  document.getElementById('users-table-wrapper')

const usersTableBody =
  document.getElementById('users-table-body')

const refreshUsersButton =
  document.getElementById('refresh-users')


function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}


function getStatusBadge(status) {
  const normalized =
    String(status || '').toUpperCase()

  if (normalized === 'ATIVO') {
    return `
      <span class="
        inline-flex items-center
        px-2.5 py-1
        rounded-full
        text-xs font-medium
        bg-green-100
        text-green-700
      ">
        Ativo
      </span>
    `
  }

  return `
    <span class="
      inline-flex items-center
      px-2.5 py-1
      rounded-full
      text-xs font-medium
      bg-gray-100
      text-gray-600
    ">
      Inativo
    </span>
  `
}


function getProfileBadge(profile) {
  const normalized =
    String(profile || '').toUpperCase()

  if (normalized === 'ADMIN') {
    return `
      <span class="
        inline-flex items-center
        px-2.5 py-1
        rounded-full
        text-xs font-medium
        bg-blue-100
        text-blue-700
      ">
        Admin
      </span>
    `
  }

  return `
    <span class="
      inline-flex items-center
      px-2.5 py-1
      rounded-full
      text-xs font-medium
      bg-gray-100
      text-gray-700
    ">
      Aluno
    </span>
  `
}


function renderUsers(users) {
  usersTableBody.innerHTML = ''

  if (!users.length) {
    usersEmpty.classList.remove('hidden')
    usersTableWrapper.classList.add('hidden')
    return
  }

  usersEmpty.classList.add('hidden')
  usersTableWrapper.classList.remove('hidden')

  users.forEach(user => {
    const row = document.createElement('tr')

    row.className =
      'border-b border-gray-100 last:border-0'

    row.innerHTML = `
  <td class="py-4 pr-4 font-medium text-gray-900">
    ${escapeHtml(user.name)}
  </td>

  <td class="py-4 pr-4 text-gray-600">
    ${escapeHtml(user.email)}
  </td>

  <td class="py-4 pr-4">
    ${getProfileBadge(user.profile)}
  </td>

  <td class="py-4 pr-4">
    ${getStatusBadge(user.status)}
  </td>

  <td class="py-4 pr-4 text-gray-500 whitespace-nowrap">
    ${escapeHtml(user.createdAt || '-')}
  </td>

  <td class="py-4 pr-4 text-gray-500 whitespace-nowrap">
    ${escapeHtml(user.lastAccess || '-')}
  </td>

  <td class="py-4 whitespace-nowrap">
  <div class="flex items-center gap-3">

    ${String(user.status || '').toUpperCase() === 'ATIVO'
        ? `
          <button
            type="button"
            data-user-id="${escapeHtml(user.id)}"
            data-new-status="INATIVO"
            class="toggle-status text-sm font-medium text-red-600 hover:underline"
          >
            Inativar
          </button>
        `
        : `
          <button
            type="button"
            data-user-id="${escapeHtml(user.id)}"
            data-new-status="ATIVO"
            class="toggle-status text-sm font-medium text-green-600 hover:underline"
          >
            Ativar
          </button>
        `
      }

    <button
      type="button"
      data-user-id="${escapeHtml(user.id)}"
      data-user-name="${escapeHtml(user.name)}"
      class="reset-password-button text-sm font-medium text-blue-600 hover:underline"
    >
      Redefinir senha
    </button>

  </div>
</td>
`

    usersTableBody.appendChild(row)
  })
}


async function loadUsers() {
  usersLoading.classList.remove('hidden')
  usersError.classList.add('hidden')
  usersEmpty.classList.add('hidden')
  usersTableWrapper.classList.add('hidden')

  try {
    const response = await fetch(
      '/api/treinamento-admin-users',
      {
        method: 'GET',
        credentials: 'same-origin'
      }
    )

    const data = await response.json()

    if (!response.ok || !data.success) {
      throw new Error(
        data.message ||
        'Não foi possível carregar os usuários.'
      )
    }

    renderUsers(data.users || [])

  } catch (error) {
    usersError.textContent =
      error.message ||
      'Erro ao carregar usuários.'

    usersError.classList.remove('hidden')

  } finally {
    usersLoading.classList.add('hidden')
  }
}

async function updateUserStatus(userId, status, button) {
  const originalText = button.textContent

  button.disabled = true
  button.textContent = 'Salvando...'

  try {
    const response = await fetch(
      '/api/treinamento-admin-update-status',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          userId,
          status
        })
      }
    )

    const data = await response.json()

    if (!response.ok || !data.success) {
      throw new Error(
        data.message ||
        'Não foi possível alterar o status.'
      )
    }

    await loadUsers()

  } catch (error) {
    alert(
      error.message ||
      'Erro ao alterar status.'
    )

    button.disabled = false
    button.textContent = originalText
  }
}

usersTableBody.addEventListener(
  'click',
  function (event) {
    const button =
      event.target.closest('.toggle-status')

    if (!button) return

    const userId =
      button.dataset.userId

    const newStatus =
      button.dataset.newStatus

    updateUserStatus(
      userId,
      newStatus,
      button
    )
  }
)


refreshUsersButton.addEventListener(
  'click',
  loadUsers
)

loadUsers()

const resetPasswordModal =
  document.getElementById('reset-password-modal')

const resetPasswordForm =
  document.getElementById('reset-password-form')

const resetPasswordUserId =
  document.getElementById('reset-password-user-id')

const resetPasswordUser =
  document.getElementById('reset-password-user')

const newPassword =
  document.getElementById('new-password')

const confirmNewPassword =
  document.getElementById('confirm-new-password')

const resetPasswordMessage =
  document.getElementById('reset-password-message')

const saveResetPassword =
  document.getElementById('save-reset-password')

const closeResetPasswordModalButton =
  document.getElementById('close-reset-password-modal')

const cancelResetPasswordButton =
  document.getElementById('cancel-reset-password')


function openResetPasswordModal(
  userId,
  userName
) {
  resetPasswordForm.reset()

  resetPasswordUserId.value = userId

  resetPasswordUser.textContent =
    `Usuário: ${userName}`

  resetPasswordMessage.classList.add(
    'hidden'
  )

  resetPasswordModal.classList.remove(
    'hidden'
  )

  newPassword.focus()
}


function closeResetPasswordModal() {
  resetPasswordModal.classList.add(
    'hidden'
  )

  resetPasswordForm.reset()

  resetPasswordUserId.value = ''

  resetPasswordMessage.classList.add(
    'hidden'
  )
}


usersTableBody.addEventListener(
  'click',
  function (event) {
    const button =
      event.target.closest(
        '.reset-password-button'
      )

    if (!button) return

    openResetPasswordModal(
      button.dataset.userId,
      button.dataset.userName
    )
  }
)


resetPasswordForm.addEventListener(
  'submit',
  async function (event) {
    event.preventDefault()

    const userId =
      resetPasswordUserId.value

    const password =
      newPassword.value

    const confirmation =
      confirmNewPassword.value

    resetPasswordMessage.classList.add(
      'hidden'
    )

    if (password !== confirmation) {
      resetPasswordMessage.textContent =
        'As senhas não coincidem.'

      resetPasswordMessage.className =
        'text-sm rounded-lg px-4 py-3 bg-red-50 text-red-700 border border-red-200'

      return
    }

    if (password.length < 8) {
      resetPasswordMessage.textContent =
        'A senha deve ter pelo menos 8 caracteres.'

      resetPasswordMessage.className =
        'text-sm rounded-lg px-4 py-3 bg-red-50 text-red-700 border border-red-200'

      return
    }

    saveResetPassword.disabled = true
    saveResetPassword.textContent =
      'Salvando...'

    try {
      const response = await fetch(
        '/api/treinamento-admin-reset-password',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          credentials: 'same-origin',

          body: JSON.stringify({
            userId,
            password
          })
        }
      )

      const data =
        await response.json()

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
          'Não foi possível redefinir a senha.'
        )
      }

      resetPasswordMessage.textContent =
        'Senha redefinida com sucesso.'

      resetPasswordMessage.className =
        'text-sm rounded-lg px-4 py-3 bg-green-50 text-green-700 border border-green-200'

      newPassword.value = ''
      confirmNewPassword.value = ''

      setTimeout(() => {
        closeResetPasswordModal()
      }, 1200)

    } catch (error) {
      resetPasswordMessage.textContent =
        error.message ||
        'Erro ao redefinir senha.'

      resetPasswordMessage.className =
        'text-sm rounded-lg px-4 py-3 bg-red-50 text-red-700 border border-red-200'

    } finally {
      saveResetPassword.disabled = false
      saveResetPassword.textContent =
        'Salvar nova senha'
    }
  }
)


closeResetPasswordModalButton.addEventListener(
  'click',
  closeResetPasswordModal
)

cancelResetPasswordButton.addEventListener(
  'click',
  closeResetPasswordModal
)