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

const getHeroes = () => {
  return fetch(URL + 'heroes').then(res => res.json())
}

const postDraft = (draft) => {
  return fetch(URL + 'drafts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': localStorage.token
    },
    body: JSON.stringify({
      draft: {
        map: draft.map,
        bans: draft.bans.map(hero => hero.name),
        with_heroes: draft.with_heroes.map(hero => hero.name),
        against_heroes: draft.against_heroes.map(hero => hero.name)
      }
    })
  }).then(res => res.json())
}

export { login, getMaps, getHeroes, postDraft }
