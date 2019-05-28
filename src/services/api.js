const BackendUrl = process.env.REACT_APP_URL

const get = (target, token = null) => {
  if (token) token = { headers: { 'Access-Token': localStorage.token } }

  return fetch(BackendUrl + target, token).then(res => res.json())
}

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

export { get, login, postDraft, updateUser, postUsers, postReplays, postMatches }
