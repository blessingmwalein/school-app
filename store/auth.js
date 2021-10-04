
export const state = () => ({
  token: "",
  user: {},
  userIsLoggedIn: false,
  status: "",
  loading: false,
  errors: {
    email: [],
    password: []
  },
  message: ""

})


export const getters = {
  getToken: state => {
    return state.token
  },
  getUser: state => {
    return state.user
  },
  getUserIsLoggedIn: state => {
    return state.userIsLoggedIn
  },

  getErrors: state => {
    return state.errors
  },

  getLoading: state => {
    return state.loading
  },

  getMessage: state => {
    return state.message
  }
}

export const mutations = {
  authRequest(state) {
    state.status = 'loading'
    state.loading = true
  },

  authSuccess(state, userData) {
    state.status = 'success'
    state.loading = false;
    state.errors = {}
    state.message = ""
    state.token = userData.token
    state.user = userData.user
    console.log(userData);
    if (userData.user.role.name == 'admin') {
      // this.$router.push('/admin')
      location.href = '/admin'
    }
  },
  setPasswordSuccess(state,userData){

  },
  authError(state, error) {
    state.status = 'error'
    state.loading = false
    console.log(error.response);
    if (error.response.status === 422) {
      state.message = error.response.data.message
      error.response.data.errors ? state.errors = error.response.data.errors : state.errors = { email: [], password: [] }
    }
  },
  logOut(state) {
    state.status = ''
    state.token = ''
    state.user ={}
    location.reload();
  },
  setUser(state, user) {
    state.user = user;
    state.userIsLoggedIn = true
  }
}
export const actions = {
  async login({ commit }, user) {
    commit('authRequest')
    try {
      const userData = await this.$axios.$post('/user/login', user);

      this.$axios.setToken(userData.token, 'Bearer');

      this.$cookies.set('token', userData.token);
      this.$cookies.set('user', userData.user)
      commit('authSuccess', userData)
    } catch (error) {
      commit('authError', error)
    }
  },

  async resetPassword({ commit }, user) {
    commit('authRequest')
    try {
      const userData = await this.$axios.$post('/user/reset-password', user);
      commit('authSuccess', userData)
    } catch (error) {
      commit('authError', error)
    }
  },

  logOut({ commit }) {
    this.$cookies.remove('user')
    this.$cookies.remove('token')
    commit('logOut')
  },
}


