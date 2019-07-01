const state = {
  'serverLoading': false,
  'clientLoading': false,
  'loading': false,
  'requestErrors': [],
  'weather': {},
  'secondMenus': [],
  'showDataMsg': ''
}

// getters
const getters = {
  'serverLoading': state => state.serverLoading,
  'clientLoading': state => state.clientLoading,
  'loading': state => state.serverLoading || state.clientLoading,
  'requestErrors': state => state.requestErrors,
  'weather': state => state.weather,
  'secondMenus': state => state.secondMenus
}

let serverLoadingTimeoutId = null
const IGNORE_LOADING_URLS = []

// actions
const actions = {
  setSecondMenu ({
    commit
  }, subMenu) {
    commit('setSecondMenu', subMenu)
  },
  beforeRequest ({
    dispatch,
    commit
  }, request) {
    commit('requestError', [])
    // 部分请求不需要显示loading状态
    let ignoreLoading = false
    for (let url of IGNORE_LOADING_URLS) {
      if (request.url.startsWith(url)) {
        ignoreLoading = true
        break
      }
    }

    if (!ignoreLoading) {
      dispatch('setServerLoading', true)
    }
  },
  afterRequestSuccess ({
    dispatch
  }) {
    dispatch('setServerLoading', false)
  },
  afterRequestFailed ({
    dispatch,
    commit
  }, requestErrors) {
    commit('requestError', requestErrors)
    dispatch('setServerLoading', false)
  },
  setServerLoading ({
    commit
  }, loading) {
    if (!loading) {
      if (serverLoadingTimeoutId) {
        clearTimeout(serverLoadingTimeoutId)
        serverLoadingTimeoutId = null
      }
      commit('setServerLoading', loading)
    } else if (!serverLoadingTimeoutId) {
      // 延迟1500毫秒再显示加载状态，这样可以在页面加载很快时不显示加载状态，视觉上效果要稍微好些
      serverLoadingTimeoutId = setTimeout(() => {
        commit('setServerLoading', loading)
      }, 1500)
    }
  },
  setClientLoading ({
    commit
  }, loading) {
    commit('setClientLoading', loading)
  }
}

const mutations = {
  setSecondMenu (state, subMenu) {
    state.secondMenus = subMenu
  },
  setServerLoading (state, loading) {
    state.serverLoading = loading
  },
  setClientLoading (state, loading) {
    state.clientLoading = loading
  },
  requestError (state, requestErrors) {
    state.requestErrors = requestErrors
  },
  setWeather (state, weather) {
    state.weather = weather
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
