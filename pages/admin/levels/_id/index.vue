<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="`${level.name}`"
      :links="[
        { name: `Levels`, link: '/admin/levels' },
        { name: `${level.name}`, link: '#' },
      ]"
      :actions="[
        { name: 'Add Class', link: '/admin/classes/add' },
        { name: 'Add Subject', link: '#' },
        { name: 'Delete', link: '#' },
      ]"
    ></bread-crumb>

    <div class="page-section border-bottom-2" v-if="!loading">
      <div class="container page__container">
        <div class="card">
          <img
            src="/images/paths/typescript_892x286.png"
            alt="TypeScript"
            class="card-img"
            style="max-height: 100%; width: initial"
          />
          <div class="fullbleed bg-primary" style="opacity: 0.5"></div>
          <img
            src="https://luma.humatheme.com/public/images/paths/typescript_64x64.svg"
            width="64"
            alt="Instruduction to TypeScript"
            class="rounded position-absolute"
            style="right: 1rem; top: 1rem"
          />
          <div
            class="
              card-body
              d-flex
              align-items-center
              justify-content-center
              fullbleed
            "
          >
            <div>
              <!-- <h2 class="text-white mb-16pt" text-align:left>{{level.name}}</h2> -->
              <div
                class="d-flex align-items-center mb-16pt justify-content-center"
              >
                <div class="d-flex mr-16pt" style="text-align: left">
                  <span class="material-icons icon-16pt text-white-50 mr-4pt"
                    >subject</span
                  >
                  <h4
                    class="flex text-white lh-1 mb-0"
                    style="text-align: left"
                  >
                    {{ level.subjects.length }} subjects
                  </h4>
                </div>
                <div class="d-flex align-items-center">
                  <span class="material-icons icon-16pt text-white-50 mr-4pt"
                    >play_circle_outline</span
                  >
                  <h4 class="flex text-white lh-1 mb-0">
                    {{ level.classes.length }} classes
                  </h4>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <nuxt-link
                  :to="`/admin/levels/${level.id}/edit`"
                  class="btn btn-outline-white ml-0"
                  style="wigth: 300px"
                  >Edit</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-wrap align-items-start">
          <div class="d-flex align-items-center mr-24pt">
            <a href="student-take-course.html" class="mr-12pt">
              <img
                src="https://luma.humatheme.com/public/images/paths/angular_64x64.svg"
                width="40"
                alt="Angular"
                class="rounded"
              />
            </a>
            <div class="flex">
              <a class="card-title" href="student-take-course.html">{{
                level.name
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container page__container" v-if="!loading">
      <div class="page-section">
        <div class="page-separator">
          <div class="page-separator__text">Classes</div>
        </div>

        <!-- <div class="page-heading">
      <h4>Learning Paths</h4>
      <a
        href=""
        class="text-underline ml-sm-auto">All my learning paths</a>
    </div> -->

        <div
          class="row card-group-row mb-lg-8pt"
          v-if="level.classes.length > 0"
        >
          <class-card
            v-for="(classD, index) in level.classes"
            :key="index"
            :classD="classD"
          ></class-card>
        </div>
        <div class="" style="width 100px" v-else>
          <div class="alert alert-warning mb-3" role="alert">
            <div class="d-flex flex-wrap align-items-start">
              <div class="mr-8pt">
                <i class="material-icons">access_time</i>
              </div>
              <div class="flex" style="min-width: 180px; text-align: left">
                <small class="text-black-100">
                  <strong>Opps!</strong> No Classes Found
                </small>
              </div>
            </div>
          </div>
        </div>

        <div class="page-separator">
          <div class="page-separator__text">Subjects</div>
        </div>

        <div class="row" v-if="level.subjects.length > 0">
          <subject-card
            v-for="(subject, index) in level.subjects"
            :key="index"
            :subject="subject"
            :imageBaseUrl="imageBaseUrl"
          ></subject-card>
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
import TopNavBar from "../../../../components/navs/TopNavBar.vue";
import { mapActions, mapGetters } from "vuex";
import Loader from "../../../../components/generic/Loader.vue";
import ClassCard from "../../../../components/classes/ClassCard.vue";
import BreadCrumb from "../../../../components/navs/BreadCrumb.vue";
import SubjectCard from '../../../../components/subjects/SubjectCard.vue';

export default {
  components: { TopNavBar, Loader, ClassCard, BreadCrumb, SubjectCard },
  created() {
    this.getlevelAction();
  },
  computed: {
    ...mapGetters({
      level: "level/getLevel",
      loading: "level/getLoading",
      imageBaseUrl:"subject/getImageBaseUrl"
    }),
  },
  methods: {
    ...mapActions({
      getlevel: "level/getLevel",
    }),

    getlevelAction() {
      this.getlevel(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>
