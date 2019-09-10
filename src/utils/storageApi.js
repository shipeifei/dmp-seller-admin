const localStorage = window.localStorage
const sessionStorage = window.sessionStorage

let serialize = val => {
  return JSON.stringify(val)
}

let deserialize = val => {
  return JSON.parse(val)
}

export const localStorageApi = {
  'set': (key, val) => {
    if (!val) {
      localStorageApi.remove()
    }
    localStorage.setItem(key, serialize(val))
  },
  'remove': key => {
    localStorage.removeItem(key)
  },
  'get': key => {
    let val = deserialize(localStorage.getItem(key))

    return val
  },
  'clear': () => {
    localStorage.clear()
  }
}

export const sessionStorageApi = {
  'set': (key, val) => {
    if (!val) {
      sessionStorageApi.remove()
    }
    sessionStorage.setItem(key, serialize(val))
  },
  'remove': key => {
    sessionStorage.removeItem(key)
  },
  'get': key => {
    let val = deserialize(sessionStorage.getItem(key))

    return val
  },
  'clear': () => {
    sessionStorage.clear()
  }
}
