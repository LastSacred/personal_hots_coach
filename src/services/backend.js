const URL = 'http://localhost:3000/'

const login = (username, password) => {
  return fetch(URL + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        name: username,
        password: password
      }
    })
  }).then(res => res.json())
}

const getMaps = () => {
  return fetch(URL + 'maps').then(res => res.json())
}

export { login, getMaps }
