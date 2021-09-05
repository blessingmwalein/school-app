<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="'Edit Subject'"
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
                <label class="form-label">Level</label>
                <select id="custom-select" class="form-control custom-select" v-model="subjectData.level_id">
                  <option :value="level.id" v-for="(level ,index) in levels.data" :key="index">{{level.name}}</option>
                </select>
                <div v-if="errors.level_id">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.level_id"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Subject Name</label>
                <textarea
                  class="form-control"
                  v-model="subjectData.name"
                  rows="3"
                  placeholder="Subject Name"
                ></textarea>
                <div v-if="errors.name">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.name"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
               <div class="form-group">
                <label class="form-label">Icon</label><br>
                <img :src="`${imageBaseUrl}${subjectData.icon}`" alt="" height="100px" width="100px">
                <input type="file" class="form-control"  @change="changeImage">
              </div>
              <div>
                <a
                  href="#"
                  v-if="!loadingSave"
                  class="btn btn-outline-secondary"
                  @click.prevent="submitForm"
                  >Update Changes</a
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
                <nuxt-link to="/admin/subjects" class="btn btn-accent"
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
      subjectData: {},
    };
  },
  created() {
    this.getlevelsAction();
    this.getSubjectAction();
  },
  computed: {
    ...mapGetters({
      subject: "subject/getSubject",
      levels: "level/getLevels",
      loading: "subject/getLoading",
      message: "subject/getMessage",
      errors: "subject/getErrors",
      loadingSave: "subject/getLoadingSave",
      imageBaseUrl:"subject/getImageBaseUrl"
    }),
  },

  methods: {
    ...mapActions({
      getlevels: "level/levels",
      getSubject: "subject/getSubject",
      updateSubject: "subject/updateSubject",
    }),

    getlevelsAction() {
      this.getlevels();
    },
    getSubjectAction() {
      this.getSubject(this.$route.params.id);
    },

    submitForm() {
      let fd= new FormData()
      fd.append('icon', this.subjectData.icon);
      fd.append('name', this.subjectData.name);
      fd.append('level_id', this.subjectData.level_id);

      this.updateSubject(this.subjectData);
    },
    changeImage(event){
     this.subjectData.icon = event.target.files[0]
    }
  },

  watch: {
    subject: {
      handler({ name, level_id, id, icon }) {
        this.subjectData.name = name;
        this.subjectData.icon = icon;
        this.subjectData.level_id = level_id;
        this.subjectData.id = id;
      },
      deep: true, // deep is to listen to objects properly
      immediate: true, // immediate so the watcher triggers right away when the component is mounted
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
