import { showConfirm, succesAlert } from '../mixins/alert'

export const state = () => ({
  subjects:{},
  loading:true,
  loadingSave:false,
  errors:{},
  message:"",
  subject:{},
  teachers:{},
  students:{},
  classes:{},
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
  },

  getTeachers(state){
    return state.teachers
  },
  getStudents(state){
    return state.students
  },
  getClasses(state){
    return state.classes
  },
}



export const mutations = {
  getStudents: state => {
    return state.students
  },
  setLoading(state){
    state.loading = true;
  },
  setSubjects(state, subjects){
    state.subjects = subjects;
    state.loading = false
  },

  setTeachers(state, teachers){
    state.teachers = teachers
  },
  setClasses(state, classes){
    state.classes = classes
  },



  setSubject(state, subject){
    state.loading = false;
    state.subject = subject;
  },

  error(state, error){
    state.loading = false;
    state.loadingSave = false
    console.log(error);


    if(error.response.status===422){
      state.message =error.response.data.message
      error.response.data.errors ? state.errors = error.response.data.errors:""
    }
    // if(error.response.status==422){
    //   state.errors = error.response.data.errors
    //   state.message = error.response.data.message
    // }
  },

  success(state, data){
    state.loadingSave = false
    state.errors={};
    state.message=""
    succesAlert(`${data.data.name}!`, `Record Updated Success`);
    this.$router.push(`/admin/subjects`)
  },
  successAddTeacher(state, data){
    state.loadingSave = false
    state.errors={};
    state.message=""
    succesAlert(``, `Teacher Added To Subject`);
    this.$router.push(`/admin/subjects/${data}`)
  },
  successAddStudent(state, data){
    state.loadingSave = false
    state.errors={};
    state.message=""
    succesAlert(``, `Student Added To Subject`);
    this.$router.push(`/admin/subjects/${data}`)
  },
  saveLoadingState(state){
    state.loadingSave = true
  },

  setStudents(state, students) {
    state.students = students;
    state.loading = false
  },
}

export const actions = {

  async getStudents({ commit }, query) {
    // commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`search/students?query=${query}`);
      commit('setStudents', data)
    } catch (error) {
      commit('error', error)
    }
  },

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

  async addTeacherSubject({commit}, teacherSubjectData){
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.post('teacher-subject-classes', {subject_id:teacherSubjectData.subject_id,teacher_id:teacherSubjectData.teacher_id,class_id:teacherSubjectData.class_id});
      commit('successAddTeacher', teacherSubjectData.subject_id)
    } catch (error) {
      commit('error', error)
    }
  },
  async addStudentSubject({commit}, studentSubjectData){
    commit('saveLoadingState')
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.post('student-subjects', {subject_id:studentSubjectData.subject_id,student_id:studentSubjectData.student_id});
      commit('successAddStudent', studentSubjectData.subject_id)
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
  },

  async getTeachers({ commit }, query) {
    // commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`search/teachers?query=${query}`);
      commit('setTeachers', data)
    } catch (error) {
      commit('error', error)
    }
  },

  async getClasses({ commit }, query) {
    // commit('setLoading');
    try {
      this.$axios.setToken(this.$cookies.get('token'), 'Bearer');
      const data = await this.$axios.$get(`search/classes?query=${query}`);
      commit('setClasses', data)
    } catch (error) {
      commit('error', error)
    }
  },
}

