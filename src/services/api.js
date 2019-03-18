const BackendUrl = 'http://localhost:3000/'

const login = (params) => {
  return fetch(BackendUrl + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: params
    })
  }).then(res => res.json())
}

const getMaps = () => {
  return fetch(BackendUrl + 'maps').then(res => res.json())
}

const getHeroes = () => {
  return fetch(BackendUrl + 'heroes').then(res => res.json())
}

const postDraft = (draft) => {
  return fetch(BackendUrl + 'drafts', {
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

const postUser = (params) => {
  return fetch(BackendUrl + 'users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: params
    })
  }).then(res => res.json())
}

const getReplays = () => {
  return fetch(BackendUrl + 'replay_files',{
    headers: {
      'Access-Token': localStorage.token
    }
  }).then(res => res.json())
}

const postReplays = (files) => {
  return fetch(BackendUrl + 'replay_files', {
    method: 'POST',
    headers: {
      'Access-Token': localStorage.token
    },
    body: files
  }).then(res => res.json())
}

export { login, getMaps, getHeroes, postDraft, postUser, postReplays, getReplays }
