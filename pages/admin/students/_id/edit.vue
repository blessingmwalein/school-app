<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="'Edit Student'"
      :links="[
        { name: 'Students', link: 'admin/students' },
        { name: `${student.name}`, link: '#' },
      ]"
    ></bread-crumb>
    <div class="page-section border-bottom-2" v-if="!loading">
      <div class="container page__container">
        <div class="row align-items-start">
          <div class="col-md-8">
            <div class="page-separator">
              <div class="page-separator__text">Student Details</div>
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
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  v-model="studentData.first_name"
                  placeholder="First Name"
                  class="form-control"
                />
                <div v-if="errors.first_name">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.first_name"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  v-model="studentData.last_name"
                  placeholder="Last Name"
                  class="form-control"
                />
                <div v-if="errors.last_name">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.last_name"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  type="text"
                  v-model="studentData.user.email"
                  placeholder="Email"
                  class="form-control"
                />
                <div v-if="errors.email">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.email"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number</label>

                <vue-tel-input
                  v-model="studentData.phone_number"
                  @input="changeTel"
                ></vue-tel-input>

                <div v-if="!phoneNumberValid">
                  <div class="invalid-feedback">
                    Please Enter Valid Phone Number
                  </div>
                </div>
                <div v-if="errors.phone_number">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.phone_number"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>

              <div>
                <button
                  v-if="!loadingSave && phoneNumberValid"
                  class="btn btn-secondary"
                  @click.prevent="submitForm"
                >
                  Update Changes
                </button>

                <button
                  v-if="!loadingSave && !phoneNumberValid"
                  class="btn btn-secondary"
                  disabled
                >
                  Add student
                </button>
                <a
                  href="#"
                  v-if="loadingSave"
                  class="btn btn-primary is-loading is-loading-sm"
                  >...loading</a
                >
              </div>
            </div>
            <div class="page-separator">
              <div class="page-separator__text">Student Home Details</div>
            </div>
            <div class="card card-body">
              <div class="form-group">
                <label class="form-label">Guiden Name</label>
                <input
                  type="text"
                  v-model="studentHomeDetails.guiden_name"
                  placeholder="First Name"
                  class="form-control"
                />
                <div v-if="errors.guiden_name">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.guiden_name"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Address</label>
                <textarea
                  name=""
                  id=""
                  v-model="studentHomeDetails.address"
                  rows="4"
                  class="form-control"
                ></textarea>
                <div v-if="errors.address">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.address"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Home Contact</label>
                <vue-tel-input
                  v-model="studentHomeDetails.home_contact"
                  @input="changeHomePhone"
                ></vue-tel-input>

                <div v-if="!homePhoneNumberValid">
                  <div class="invalid-feedback">
                    Please Enter Valid Phone Number
                  </div>
                </div>
                <div v-if="errors.home_contact">
                  <div
                    class="invalid-feedback"
                    v-for="(error, index) in errors.home_contact"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>

              <div>
                <button
                  v-if="!loadingSave && homePhoneNumberValid"
                  class="btn btn-secondary"
                  @click.prevent="submitForm"
                >
                  Update Changes
                </button>

                <button
                  v-if="!loadingSave && !homePhoneNumberValid"
                  class="btn btn-secondary"
                  disabled
                >
                  Update Changes
                </button>
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
                <button
                  v-if="student.home.length <= 0"
                  class="btn btn-secondary"
                >
                  Add Home Details
                </button>
                <nuxt-link v-else to="/admin/students" class="btn btn-accent"
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

    <loader v-if="loading"></loader>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loader from "../../../../components/generic/Loader.vue";
import BreadCrumb from "../../../../components/navs/BreadCrumb.vue";
import TopNavBar from "../../../../components/navs/TopNavBar.vue";
export default {
  components: { TopNavBar, BreadCrumb, Loader },
  data() {
    return {
      studentData: {},
      phoneNumberValid: false,
      homePhoneNumberValid: false,
      studentHomeDetails: {},
    };
  },
  created() {
    this.phoneNumberValid = false;
    this.getStudentAction();
  },
  computed: {
    ...mapGetters({
      loadingSave: "student/getLoadingSave",
      message: "student/getMessage",
      errors: "student/getErrors",
      student: "student/getStudent",
      loading: "student/getLoading",
    }),
  },
  methods: {
    ...mapActions({
      saveNewStudent: "student/addNewStudent",
      getStudent: "student/getStudent",
    }),

    getStudentAction() {
      this.getStudent(this.$route.params.id);
    },

    submitForm() {
      this.saveNewStudent(this.student);
    },

    changeTel(number, phone) {
      console.log(phone);
      this.studentData.phone_number = phone.number;
      this.phoneNumberValid = phone.valid == undefined ? false : phone.valid;
      console.log(this.phoneNumberValid);
    },

    changeHomePhone(number, phone) {
      this.studentHomeDetails.phone_number = phone.number;
      this.homePhoneNumberValid =
        phone.valid == undefined ? false : phone.valid;
    },
  },
  watch: {
    student(value) {
      this.studentData = { ...value };
      // if (value.home.length <= 0) {
      //   (this.studentHomeDetails.guiden_name = ""),
      //     (this.studentHomeDetails.address = ""),
      //     (this.studentHomeDetails.home_contact = "");
      // } else {
      //   this.studentHomeDetails = { ...value.home[0] };
      // }
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
