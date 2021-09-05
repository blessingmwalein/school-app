
export const state = () => ({
  token:"",
  user:{},
  userIsLoggedIn: false,
  status: "",
  loading:false,
  errors:{},
  message:""

})


export const getters = {
  getToken:state=> {
    return state.token
  },
  getUser:state=>{
    return state.user
  },
  getUserIsLoggedIn : state =>{
    return state.userIsLoggedIn
  },

  getErrors:state=>{
    return state.errors
  },

  getLoading:state=> {
    return state.loading
  },

  getMessage:state=> {
    return state.message
  }
}

export const mutations = {
  auth_request(state) {
    state.status = 'loading'
    state.loading= true
  },

  auth_success(state,userData) {
    state.status = 'success'
    state.loading = false;
    state.errors = {}
    state.message = ""
    state.token = userData.token
    state.user = userData.user
    console.log(userData);
    if(userData.user.role.name == 'admin'){
      this.$router.push('/admin')
    }
  },
  auth_error(state, error) {
    state.status = 'error'
    state.loading = false
    console.log(error);
    if(error.response.status == 422){
      state.errors = error.response.data.errors
      state.message = error.response.data.message
     }
  },
  logout(state) {
    state.status = ''
    state.token = {}
  },
  setUser(state, user){
    state.user = user
  }
}
export const actions = {
  async login({ commit }, user) {
    commit('auth_request')
    try {
      const userData = await this.$axios.$post('/user/login', user);

      this.$axios.setToken(userData.token, 'Bearer');

      this.$cookies.set('token', userData.token);
      this.$cookies.set('user', userData.user)
      commit('auth_success', userData)
    } catch (error) {
      commit('auth_error', error)
    }
  }
}


