import { showConfirm, succesAlert } from '../mixins/alert'

export const state = () => ({
  levels:[],
  loading:true,
  loadingSave:false,
  errors:{},
  message:"",
  level:{}
})

export const getters = {
  getLevels:state=> {
     return state.levels
  },

  getLevel:state=> {
     return state.level;
  },

  getLoading:state=> {
    return state.loading
  },

  getLoadingSave(state){
    return state.loadingSave;
  },

  getErrors(state){
   return state.errors;
  },

  getMessage(state){
    return state.message
  }

}

export const mutations = {
  setLoading(state){
    state.loading =true
  },
  setLevels(state, levels){
    console.log(levels);
    state.levels = levels;
    state.loading = false
  },

  setLevel(state, level){
    state.loading = false;
    state.level = level;
  },

  error(state, error){
    state.loading = false;
    state.loadingSave = false
    console.log(error);

    if(error.response.status==422){
      state.errors = error.response.data.errors
      state.message = error.response.data.message
    }
  },

  success(state, data){
    state.loadingSave = false;
    state.errors={};
    state.message="";
    succesAlert(`${data.data.name}!`, `Record Updated Success`);
    this.$router.push(`/admin/levels/${data.data.id}`)
  },
  saveLoadingState(state){
    state.loadingSave = true
  }
}

export const actions = {

  async levels({ commit }) {
    commit('setLoading')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get('/levels');
      commit('setLevels', data)
    } catch (error) {
      commit('error', error)
    }
  },

  async addNewlevel({commit}, level){
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.post('/levels', {name:level.name});
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async getLevel({commit}, id){
    commit('setLoading')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`/levels/${id}`);
      commit('setLevel', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async updateLevel({commit}, level){
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.put(`/levels/${level.id}`, {name:level.name});
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  }
}

