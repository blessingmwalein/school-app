<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="`Students`"
      :links="[{ name: `students`, link: '/admin/students' }]"
      :actions="[
        { name: 'Add Student', link: '/admin/students/add' },
        { name: 'Upload Bulk', link: '#' },
      ]"
    ></bread-crumb>

    <div class="page-section border-bottom-2" v-if="!loading">
      <div class="container page__container">
        <div class="d-flex flex-wrap align-items-start"></div>

        <div class="page-separator">
          <div class="page-separator__text">Students</div>
        </div>

        <student-table :students="students"></student-table>
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
import StudentTable from "../../../components/classes/StudentTable.vue";
import Loader from '../../../components/generic/Loader.vue';
import BreadCrumb from "../../../components/navs/BreadCrumb.vue";
import TopNavBar from "../../../components/navs/TopNavBar.vue";

export default {
  components: { BreadCrumb, StudentTable, TopNavBar,Loader },
  created() {
    this.getStudentsAction();
  },
  computed: {
    ...mapGetters({
      students: "student/getStudents",
      loading: "student/getLoading",
    }),
  },
  methods: {
    ...mapActions({
      getStudents: "student/getStudents",
    }),

    getStudentsAction() {
      this.getStudents();
    },
  },
};
</script>

<style>
</style>
