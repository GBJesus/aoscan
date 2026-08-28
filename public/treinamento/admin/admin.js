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

      <td class="py-4 text-gray-500 whitespace-nowrap">
        ${escapeHtml(user.lastAccess || '-')}
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


refreshUsersButton.addEventListener(
  'click',
  loadUsers
)

loadUsers()