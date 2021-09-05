<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      :name="`Classes`"
      :links="[{ name: 'Classes', link: '#' }]"
      :actions="[{ name: 'Add New Class', link: '/admin/classes/add' }]"
    ></bread-crumb>
    <div class="page-separator">
      <div class="page-separator__text"></div>
    </div>

    <div class="container page__container">
      <div class="page-section">
        <div class="page-separator">
          <div class="page-separator__text">Classes</div>
        </div>

        <div class="row card-group-row mb-lg-8pt" v-if="!loading">
          <class-card
            v-for="(classD, index) in classes.data"
            :key="index"
            :classD="classD"
          ></class-card>


        </div>
        <loader v-else></loader>
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

    <!-- // END Footer -->
  </div>
</template>

<script>
import TopNavBar from "../../../components/navs/TopNavBar.vue";
import { mapActions, mapGetters } from "vuex";
import Loader from '../../../components/generic/Loader.vue';
import LevelCard from '../../../components/levels/LevelCard.vue';
import ClassCard from '../../../components/classes/ClassCard.vue';
import BreadCrumb from '../../../components/navs/BreadCrumb.vue';

export default {
  components: {
    TopNavBar,
    Loader,
    LevelCard,
    ClassCard,
    BreadCrumb
  },
  created() {
    this.classesAction();
  },
  computed: {
    ...mapGetters({
      classes: "classe/getClasses",
      loading: "classe/getLoading",
    }),
  },
  methods: {
    ...mapActions({
      getClasses: "classe/getClasses",
    }),
    classesAction() {
      this.getClasses();
    },
  },
};
</script>

<style>
.card-group-row__col {
  text-align: left !important;
}
</style>

