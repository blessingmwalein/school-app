<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      v-if="!loading"
      :name="`${student.first_name} ${student.last_name}`"
      :links="[
        { name: `Students`, link: '/admin/students' },
        { name: `${student.first_name}`, link: '#' },
      ]"
      :actions="[]"
    ></bread-crumb>

    <div class="page-section border-bottom-2" v-if="!loading">
      <div class="container page__container">
        <div class="page-section bg-primary mb-3" v-if="!loading">
          <div
            class="
              container
              page__container
              d-flex
              flex-column flex-md-row
              align-items-center
              text-center text-md-left
            "
          >
            <img
              src="https://luma.humatheme.com/public/images/illustration/student/128/white.svg"
              width="104"
              class="mr-md-32pt mb-32pt mb-md-0"
              alt="instructor"
            />
            <div class="flex mb-32pt mb-md-0">
              <h2 class="text-white mb-0" style="text-align: left">
                {{ student.first_name }} {{ student.last_name }}
              </h2>
              <p class="lead text-white d-flex align-items-center">
                {{ student.enrollment_number }}
                <span class="ml-16pt d-flex align-items-center"
                  ><i class="material-icons icon-16pt mr-4pt">email</i
                  >{{ student.user.email }}</span
                >
                <span class="ml-16pt d-flex align-items-center"
                  ><i class="material-icons icon-16pt mr-4pt">phone</i
                  >{{ student.phone_number }}</span
                >
              </p>
            </div>
            <nuxt-link :to="`/admin/students/${student.id}/edit`" class="btn btn-outline-white">Edit</nuxt-link>
          </div>
        </div>
        <div class="page-section">
          <div class="page-separator mt-2">
            <div class="page-separator__text">Subjects</div>
          </div>

          <div class="row" v-if="!loading">
            <subject-card
              v-for="(subject, index) in student.subjects"
              :key="index"
              :subject="subject.subject"
              :imageBaseUrl="imageBaseUrl"
            ></subject-card>
          </div>
        </div>

        <div class="page-section">
          <div class="page-separator">
            <div class="page-separator__text">Class</div>
          </div>

          <div class="row card-group-row mb-lg-8pt" v-if="!loading">
            <class-card
              v-for="(classD, index) in student.classe"
              :key="index"
              :classD="classD.classe"
            ></class-card>
          </div>
          <loader v-else></loader>
        </div>
      </div>
    </div>
    <div class="container p-4" v-if="loading">
      <loader></loader>
    </div>
  </div>
</template>

<script>
import TopNavBar from "../../../../components/navs/TopNavBar.vue";
import { mapActions, mapGetters } from "vuex";
import Loader from "../../../../components/generic/Loader.vue";
import BreadCrumb from "../../../../components/navs/BreadCrumb.vue";
import ClassCard from '../../../../components/teachers/ClassCard.vue';
import SubjectCard from '../../../../components/teachers/SubjectCard.vue';


export default {
  components: { TopNavBar, Loader, BreadCrumb, SubjectCard, ClassCard },

  created() {
    this.getStudentAction();
  },
  computed: {
    ...mapGetters({
      student: "student/getStudent",
      loading: "student/getLoading",
      imageBaseUrl: "subject/getImageBaseUrl",
    }),
  },

  methods: {
    ...mapActions({
      getStudent: "student/getStudent",
    }),

    getStudentAction() {
      this.getStudent(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>
