<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      :name="`Subjects`"
      :links="[{ name: 'Subjects', link: '#' }]"
      :actions="[{ name: 'Add New Subject', link: '/admin/subjects/add' }]"
    ></bread-crumb>

    <div class="container page__container page-section">
      <div class="page-separator">
        <div class="page-separator__text">Subjects</div>
      </div>

      <div class="row" v-if="!loading">
        <subject-card v-for="(subject, index) in subjects.data" :key="index" :subject="subject" :imageBaseUrl="imageBaseUrl"></subject-card>
      </div>

        <loader v-else></loader>

      <pagination v-if="!loading" :meta="subjects.meta" :links="subjects.links" v-on:fetchData="fetchSubjectsAction"></pagination>
    </div>

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
import BreadCrumb from "../../../components/navs/BreadCrumb.vue";
import TopNavBar from "../../../components/navs/TopNavBar.vue";
import SubjectCard from "../../../components/subjects/SubjectCard.vue";
import { mapActions, mapGetters } from "vuex";
import Loader from '../../../components/generic/Loader.vue';
import Pagination from '../../../components/generic/Pagination.vue';

export default {
  components: { SubjectCard, TopNavBar, BreadCrumb, Loader, Pagination },
  created(){
    this.getSubjectsAction()
  },
  computed: {
     ...mapGetters({
       subjects:'subject/getSubjects',
       loading:'subject/getLoading',
       imageBaseUrl:'subject/getImageBaseUrl'
     })
  },

  methods:{
    ...mapActions({
      getSubjects:'subject/getSubjects',
      fetchSubjects:'subject/fetchSubjects'
    }),

    getSubjectsAction(){
      this.getSubjects();
    },

    fetchSubjectsAction(link){
      this.fetchSubjects(link)
    }
  }
};
</script>

<style>
</style>
TopNavBar
