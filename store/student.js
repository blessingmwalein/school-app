import { showConfirm, succesAlert } from '../mixins/alert'
export const state = () => ({
  students: {},
  loading: true,
  loadingSave: false,
  errors: {},
  message: "",
  student: {},
  baseImageUrl: 'http://127.0.0.1:8000/storage/student/'
})

export const getters = {
  getStudents: state => {
    return state.students
  },
  getImageBaseUrl: state => {
    return state.baseImageUrl
  },

  getStudent: state => {
    return state.student;
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
  setStudents(state, students) {
    state.students = students;
    state.loading = false
  },

  setStudent(state, student) {
    state.loading = false;
    state.student = student;
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
    state.errors={};
    state.message=""
    succesAlert(``, `Record Updated Success`);
    this.$router.push(`/admin/students`)
  },
  saveLoadingState(state) {
    state.loadingSave = true
  },

}

export const actions = {

  async getStudents({ commit }) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get('/students');
      commit('setStudents', data)
    } catch (error) {
      commit('error', error)
    }
  },

  async addNewStudent({ commit }, student) {
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.post('/students', {first_name:student.first_name,last_name:student.last_name, phone_number:student.phone_number,email:student.email});
      commit('success',  data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async getStudent({ commit }, id) {
    commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`/students/${id}`);
      commit('setStudent', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async updateStudent({ commit }, student) {
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.put(`/students/update/${student.id}`, { name: student.name, year: student.year, level_id: student.level_id });
      commit('success', data.data)
    } catch (error) {
      commit('error', error)
    }
  },

  async fetchstudents({ commit }, link) {
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

