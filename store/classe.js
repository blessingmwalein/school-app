import { showConfirm, succesAlert } from '../mixins/alert'
export const state = () => ({
  classes: {},
  loading: true,
  loadingSave: false,
  errors: {},
  message: "",
  classe: {},
  baseImageUrl: 'http://127.0.0.1:8000/storage/classe/'
})

export const getters = {
  getClasses: state => {
    return state.classes
  },
  getImageBaseUrl: state => {
    return state.baseImageUrl
  },

  getClasse: state => {
    return state.classe;
  },

  getLoading: state => {
    return state.loading
  },

  getLoadingSave(state) {
    return state.loadingSave;
  },

  getErrors(state) {
    return state.errors;
  },

  getMessage(state) {
    return state.message
  }

}

export const mutations = {
  setLoading(state) {
    state.loading = true;
  },
  setClasses(state, classes) {
    state.classes = classes;
    state.loading = false
  },

  setClasse(state, classe) {
    state.loading = false;
    state.classe = classe;
  },

  error(state, error) {
    state.loading = false;
    state.loadingSave = false
    console.log(error);

    if (error.response.status == 422) {
      state.errors = error.response.data.errors
      state.message = error.response.data.message
    }
  },

  success(state, data) {
    state.loadingSave = false;
    state.errors={};
    state.message=""
    succesAlert(`${data.data.name}!`, `Record Updated Success`);
    this.$router.push(`/admin/classes`)
  },
  saveLoadingState(state) {
    state.loadingSave = true
  },

  confirmDialog(state, message) {

  }
}

export const actions = {

  async getClasses({ commit }) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get('/classes');
      commit('setClasses', data)
    } catch (error) {
      commit('error', error)
    }
  },

  async addNewClasse({ commit }, classe) {
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.post('/classes/store', classe);
      commit('success',  data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async getClasse({ commit }, id) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`/classes/${id}`);
      commit('setClasse', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async updateClasse({ commit }, classe) {
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.put(`/classes/update/${classe.id}`, { name: classe.name, year: classe.year, level_id: classe.level_id });
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async fetchClasses({ commit }, link) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(link.url);
      commit('setClasses', data)
    } catch (error) {
      commit('error', error)
    }
  }
}

