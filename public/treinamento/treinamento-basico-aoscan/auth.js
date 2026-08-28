async function getActiveUser() {
  try {
    const response = await fetch(
      '/api/treinamento-me',
      {
        method: 'GET',
        credentials: 'same-origin'
      }
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    if (
      !data.success ||
      !data.authenticated
    ) {
      return null
    }

    return data.user || null

  } catch (error) {
    console.error(
      'Erro ao obter usuário:',
      error
    )

    return null
  }
}


async function logout() {
  try {
    await fetch(
      '/api/treinamento-logout',
      {
        method: 'POST',
        credentials: 'same-origin'
      }
    )
  } catch (error) {
    console.error(
      'Erro ao encerrar sessão:',
      error
    )
  }

  window.location.href =
    '/treinamento/login/index.html'
}


window.getActiveUser = getActiveUser
window.logout = logout