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
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNavBar from "../../../components/navs/TopNavBar.vue";
import { mapActions, mapGetters } from "vuex";
import Loader from '../../../components/generic/Loader.vue';
import LevelCard from '../../../components/levels/LevelCard.vue';
import ClassCard from '../../../components/classes/ClassCard.vue';
import BreadCrumb from '../../../components/navs/BreadCrumb.vue';
import FooterNav from '../../../components/navs/Footer.vue';

export default {
  components: {
    TopNavBar,
    Loader,
    LevelCard,
    ClassCard,
    BreadCrumb,
    FooterNav
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

