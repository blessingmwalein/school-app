import { showConfirm, succesAlert } from '../mixins/alert'

export const state = () => ({
  subjects:{},
  loading:true,
  loadingSave:false,
  errors:{},
  message:"",
  subject:{},
  baseImageUrl:'http://127.0.0.1:8000/storage/subject/'
})

export const getters = {
  getSubjects:state=> {
     return state.subjects
  },
  getImageBaseUrl:state=>{
    return state.baseImageUrl
  },

  getSubject:state=> {
     return state.subject;
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
    state.loading = true;
  },
  setSubjects(state, subjects){
    state.subjects = subjects;
    state.loading = false
  },

  setSubject(state, subject){
    state.loading = false;
    state.subject = subject;
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
    state.loadingSave = false
    state.errors={};
    state.message=""
    succesAlert(`${data.data.name}!`, `Record Updated Success`);
    this.$router.push(`/admin/subjects`)
  },
  saveLoadingState(state){
    state.loadingSave = true
  }
}

export const actions = {

  async getSubjects({ commit }) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get('/subjects');
      commit('setSubjects', data)
    } catch (error) {
      commit('error', error)
    }
  },

  async addNewSubject({commit}, subject){
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.post('/subjects/store', subject);
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async getSubject({commit}, id){
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`/subjects/${id}`);
      commit('setSubject', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async updateSubject({commit}, subject){
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.put(`/subjects/update/${subject.id}`, subject);
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async fetchSubjects({commit}, link){
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(link.url);
      commit('setSubjects', data)
    } catch (error) {
      commit('error', error)
    }
  }
}

