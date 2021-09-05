<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb :name="'Add Level'" :links="[{name:'Add New level', link:'#'}]"></bread-crumb>
    <div class="page-section border-bottom-2">
      <div class="container page__container">
        <div class="row align-items-start">
          <div class="col-md-8">
            <div class="page-separator">
              <div class="page-separator__text">Class Level Details</div>
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
                <label class="form-label">Level Name</label>
                <textarea
                  class="form-control"
                  v-model="level.name"
                  rows="3"
                  placeholder="Name"
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
              <div>
                <a
                  href="#"
                  v-if="!loadingSave"
                  class="btn btn-outline-secondary"
                  @click.prevent="submitForm"
                  >Add Level</a
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
                <nuxt-link to="/admin/levels" class="btn btn-accent"
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
                    ><strong>Delete Quiz</strong></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- // END Page Content -->

    <!-- Footer -->

    <div class="bg-white border-top-2 mt-auto">
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

  </div>
</template>

<script>
import TopNavBar from "../../../components/navs/TopNavBar.vue";
import { mapActions, mapGetters } from "vuex";
import BreadCrumb from '../../../components/navs/BreadCrumb.vue';
export default {
  components: { TopNavBar, BreadCrumb },
  data() {
    return {
      level: {},
    };
  },
  computed: {
    ...mapGetters({
      loadingSave: "level/getLoadingSave",
      message: "level/getMessage",
      errors: "level/getErrors",
    }),
  },
  methods: {
    ...mapActions({
      saveNewlevel: "level/addNewlevel",
    }),
    submitForm() {
      this.saveNewlevel(this.level);
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
