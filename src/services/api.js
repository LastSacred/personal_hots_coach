const BackendUrl = 'https://personal-hots-coach-backend.herokuapp.com/'

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

const getUser = () => {
  return fetch(BackendUrl + 'users', {
    headers: {
      'Access-Token': localStorage.token
    }
  }).then(res => res.json())
}

const postUsers = (params) => {
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

const updateUser = (params) => {
  return fetch(BackendUrl + 'users', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': localStorage.token
    },
    body: JSON.stringify({
      user: params
    })
  }).then(res => res.json())
}

const getReplays = () => {
  return fetch(BackendUrl + 'replay_files', {
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

const postMatches = () => {
  return fetch (BackendUrl + 'matches', {
    method: 'POST',
    headers: {
      'Access-Token': localStorage.token
    }
  })
}

export { login, getMaps, getHeroes, postDraft, getUser, updateUser, postUsers, postReplays, getReplays, postMatches }
