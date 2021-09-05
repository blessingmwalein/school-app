<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="`${subject.name}`"
      :links="[
        { name: `Subjects`, link: '/admin/subjects' },
        { name: `${subject.name}`, link: '#' },
      ]"
      :actions="[
        { name: 'Add Teacher', link: '#' },
        { name: 'Delete', link: '#' },
      ]"
    ></bread-crumb>

    <div class="page-section border-bottom-2" v-if="!loading">
      <div class="container page__container">

        <div class="page-section bg-primary border-bottom-2 mb-3" style="border-radius:5px;">
          <div class="container page__container" style="text-align:left">
            <div class="row">
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-md-6 mb-24pt mb-lg-0">
                    <p class="text-white-70 mb-0">
                      <strong>{{subject.level.name}}</strong>
                    </p>
                    <h2 class="text-white">{{subject.name}}</h2>
                    <p class="text-white">
                     {{subject.teachers.length}} teachers
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p class="text-white-70 mb-0">
                      <!-- <strong>Class of</strong> -->
                    </p>
                    <!-- <h2 class="text-white">{{subject.year}}</h2> -->
                    <p class="text-white-50">
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-lg-3
                  text-lg-right
                  d-flex
                  flex-lg-column
                  mb-24pt mb-lg-0
                  border-bottom border-lg-0
                  pb-16pt pb-lg-0
                "
              >
                <div class="flex">
                  <p class="text-white-70 mb-8pt"><strong>Created On</strong></p>
                  <p class="text-white">
                    {{subject.created_at}}<br />
                  </p>
                </div>
                <div>
                  <button class="btn btn-outline-white">
                    Download
                    <i class="material-icons icon--right">file_download</i>
                  </button>
                  <nuxt-link class="btn btn-outline-white mt-2" :to="`/admin/subjects/${subject.id}/edit`">
                    Edit
                    <i class="material-icons icon--right">edit</i>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-wrap align-items-start"></div>

        <div class="page-separator">
          <div class="page-separator__text">Teachers</div>
        </div>
        <teacher-table :teachers="subject.teachers"></teacher-table>
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
import TopNavBar from "../../../../components/navs/TopNavBar.vue";
import { mapActions, mapGetters } from "vuex";
import Loader from "../../../../components/generic/Loader.vue";
import BreadCrumb from "../../../../components/navs/BreadCrumb.vue";
import TeacherTable from '../../../../components/subjects/TeacherTable.vue';

export default {
  components: { TopNavBar, Loader, BreadCrumb, TeacherTable },
  created() {
    this.getSubjectAction();
  },
  computed: {
    ...mapGetters({
      subject: "subject/getSubject",
      loading: "subject/getLoading",
    }),
  },
  methods: {
    ...mapActions({
      getSubject: "subject/getSubject",
    }),

    getSubjectAction() {
      this.getSubject(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>
