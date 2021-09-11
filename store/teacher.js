import { showConfirm, succesAlert } from '../mixins/alert'
export const state = () => ({
  teachers: {},
  loading: true,
  loadingSave: false,
  errors: {},
  message: "",
  teacher: {},
  baseImageUrl: 'https://learn.kamifatech.co.zw/storage/teacher/'
})

export const getters = {
  getTeachers: state => {
    return state.teachers
  },
  getImageBaseUrl: state => {
    return state.baseImageUrl
  },

  getTeacher: state => {
    return state.teacher;
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
  setTeachers(state, teachers) {
    state.teachers = teachers;
    state.loading = false
  },

  setTeacher(state, teacher) {
    state.loading = false;
    state.teacher = teacher;
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
    state.loadingSave = false
    state.errors = {};
    state.message = ""
    succesAlert(``, `Record Updated Success`);
    this.$router.push(`/admin/teachers/${data.data.id}`)
  },
  saveLoadingState(state) {
    state.loadingSave = true
  },

}

export const actions = {

  async getTeachers({ commit }) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get('/teachers');
      commit('setTeachers', data)
    } catch (error) {
      commit('error', error)
    }
  },

  async addNewTeacher({ commit }, teacher) {
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.post('/teachers', { first_name: teacher.first_name, last_name: teacher.last_name, phone_number: teacher.phone_number, email: teacher.email });
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async getTeacher({ commit }, id) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`/teachers/${id}`);
      commit('setTeacher', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async updateTeacher({ commit }, teacher) {
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.put(`/teachers/${teacher.id}`, { first_name: teacher.first_name, last_name: teacher.last_name, phone_number: teacher.phone_number });
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async fetchteachers({ commit }, link) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(link.url);
      commit('S', data)
    } catch (error) {
      commit('error', error)
    }
  }
}

