<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="'Edit Class'"
      :links="[
        { name: `Classes`, link: '/admin/clsses' },
        { name: `${classe.name}`, link: '#' },
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
                <select
                  id="custom-select"
                  class="form-control custom-select"
                  v-model="classeData.level_id"
                >
                  <option
                    :value="level.id"
                    v-for="(level, index) in levels.data"
                    :key="index"
                  >
                    {{ level.name }}
                  </option>
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
                <label class="form-label">Class year</label>
                <input
                  type="text"
                  v-model="classeData.year"
                  placeholder="Class Year"
                  class="form-control"
                />
                <div v-if="errors.year">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.year"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Class Name</label>
                <textarea
                  class="form-control"
                  v-model="classeData.name"
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
                <nuxt-link to="/admin/classes" class="btn btn-accent"
                  >Cancel</nuxt-link
                >
                <button class="btn btn-warning" @click="showSwal">
                  Delete
                </button>
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

    <footer-nav></footer-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loader from "../../../../components/generic/Loader.vue";
import BreadCrumb from "../../../../components/navs/BreadCrumb.vue";
import TopNavBar from "../../../../components/navs/TopNavBar.vue";

// js import
import swal from "sweetalert2";

// style import
import "sweetalert2/dist/sweetalert2.css";
import FooterNav from '../../../../components/navs/Footer.vue';

export default {
  components: { TopNavBar, Loader, BreadCrumb, FooterNav, Loader },
  data() {
    return {
      classeData: {},
    };
  },
  created() {
    this.getlevelsAction();
    this.getClassAction();
  },
  computed: {
    ...mapGetters({
      classe: "classe/getClasse",
      levels: "level/getLevels",
      loading: "classe/getLoading",
      message: "classe/getMessage",
      errors: "classe/getErrors",
      loadingSave: "classe/getLoadingSave",
    }),
  },

  methods: {
    ...mapActions({
      getlevels: "level/levels",
      getClasse: "classe/getClasse",
      updateClasse: "classe/updateClasse",
    }),

    getlevelsAction() {
      this.getlevels();
    },
    getClassAction() {
      this.getClasse(this.$route.params.id);
    },

    submitForm() {
      this.updateClasse(this.classeData);
    },

    showSwal() {
      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },

  watch: {
    classe: {
      handler({ name, year, level_id, id }) {
        this.classeData.name = name;
        this.classeData.year = year;
        (this.classeData.level_id = level_id), (this.classeData.id = id);
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
