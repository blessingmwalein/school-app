<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="'Add Teacher To Subject'"
      :links="[
        { name: `Subjects`, link: '/admin/subjects' },
        { name: `${subject.name}`, link: '#' },
      ]"
    ></bread-crumb>
    <div class="page-section border-bottom-2" v-if="!loading">
      <div class="container page__container">
        <div class="row align-items-start">
          <div class="col-md-8">
            <div class="page-separator">
              <div class="page-separator__text">Class Details</div>
            </div>
            <div class="card card-body">
              <div class="alert alert-danger" role="alert" v-if="message">
                <div class="d-flex flex-wrap align-items-start">
                  <div class="mr-8pt">
                    <i class="material-icons">access_time</i>
                  </div>
                  <div class="flex" style="min-width: 180px">
                    <small class="text-black-100">
                      <strong>Opps!</strong> {{ message }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="subject.name"
                  disabled
                />
              </div>
              <div class="form-group">
                <label class="form-label">Teacher</label>
                <v-select
                  :options="optionsTeachers"
                  label="item_data"
                  @input="setSelectedTeacher"
                  @search="getTeachersAction"
                  :filterable="false"
                ></v-select>
                <div v-if="errors.teacher_id">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.teacher_id"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Class Name</label>
                <v-select
                  :options="optionsClasses"
                  label="item_data"
                  @input="setSelectedClass"
                  @search="getClassesAction"
                  :filterable="false"
                ></v-select>
                <div v-if="errors.class_id">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.class_id"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  v-if="!loadingSave"
                  class="btn btn-outline-secondary"
                  @click.prevent="submitForm"
                  >Add Teacher To Subject</a
                >
                <a
                  href="#"
                  v-if="loadingSave"
                  class="btn btn-primary is-loading is-loading-sm"
                  >...loading</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header text-right">
                <nuxt-link
                  :to="`/admin/subjects/${subject.id}`"
                  class="btn btn-accent"
                  >Cancel</nuxt-link
                >
              </div>
              <div class="list-group list-group-flush text-right">
                <div class="list-group-item d-flex">
                  <a class="flex" href="#"><strong>Save Draft</strong></a>
                  <i class="material-icons text-muted">check</i>
                </div>
                <div class="list-group-item">
                  <a href="#" class="text-danger"
                    ><strong>Delete Class</strong></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white border-top-2 mt-auto" v-if="!loading">
      <div class="container page__container page-section d-flex flex-column">
        <p class="text-70 brand mb-24pt">
          <img
            class="brand-icon"
            src="/images/logo/black-70%402x.png"
            width="30"
            alt="Luma"
          />
          Luma
        </p>
        <p class="measure-lead-max text-50 small mr-8pt">
          Luma is a beautifully crafted user interface for modern Education
          Platforms, including Courses & Tutorials, Video Lessons, Student and
          Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP,
          HR, CMS, Tasks, Projects, eCommerce and more.
        </p>
        <p class="mb-8pt d-flex">
          <a href="#" class="text-70 text-underline mr-8pt small">Terms</a>
          <a href="#" class="text-70 text-underline small">Privacy policy</a>
        </p>
        <p class="text-50 small mt-n1 mb-0">
          Copyright 2019 &copy; All rights reserved.
        </p>
      </div>
    </div>
    <div class="container p-4">
      <loader v-if="loading"></loader>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loader from "../../../../components/generic/Loader.vue";
import BreadCrumb from "../../../../components/navs/BreadCrumb.vue";
import TopNavBar from "../../../../components/navs/TopNavBar.vue";

export default {
  components: { TopNavBar, Loader, BreadCrumb, Loader },
  data() {
    return {
      teacherSubjectData: {},
      optionsTeachers: [],
      optionsClasses: [],
      labelteacher: {
        type: String,
        default: "teacher_number",
      },
    };
  },
  created() {
    this.getSubjectAction();
  },
  computed: {
    ...mapGetters({
      subject: "subject/getSubject",
      teachers: "subject/getTeachers",
      loading: "subject/getLoading",
      message: "subject/getMessage",
      errors: "subject/getErrors",
      loadingSave: "subject/getLoadingSave",
      classes: "subject/getClasses",
    }),
  },

  methods: {
    ...mapActions({
      getTeachers: "subject/getTeachers",
      getSubject: "subject/getSubject",
      addTeacherSubject: "subject/addTeacherSubject",
      getClasses: "subject/getClasses",
    }),

    getSubjectAction() {
      this.getSubject(this.$route.params.id);
    },
    getTeachersAction(search, loading) {
      // this.search(loading, search, this);
      this.getTeachers(search);
    },

    getClassesAction(search, loading) {
      this.getClasses(search);
    },

    setSelectedTeacher(event) {
      console.log(event);
      this.teacherSubjectData.teacher_id = event.id;
    },
    setSelectedClass(event) {
      console.log(event);
      this.teacherSubjectData.class_id = event.id;
    },

    submitForm() {
      this.teacherSubjectData.subject_id = this.subject.id
      this.addTeacherSubject(this.teacherSubjectData);
    },
  },
  watch: {
    teachers(newState, oldState) {
      this.optionsTeachers = newState.data.map(function (x) {
        return { ...x, item_data:  `${x.teacher_number} (${x.first_name} ${x.last_name})` };
      });
      console.log(newState.data);
    },
    classes(newState, oldState) {
      this.optionsClasses = newState.data.map(function (x) {
        return { ...x, item_data:  `${x.name} (${x.year})` };
      });
      console.log(newState.data);
    },
  },
};
</script>

<style>
.card-body {
  text-align: left;
}
.invalid-feedback {
  display: inline;
  padding: 3px;
  font-weight: bold;
}
</style>
