<template>
  <div class="mdk-drawer-layout__content page-content">
    <top-nav-bar></top-nav-bar>

    <bread-crumb
      :name="'Add Class'"
      :links="[{ name: 'Add New Classe', link: '#' }]"
    ></bread-crumb>
    <div class="page-section border-bottom-2">
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
                <select id="custom-select" class="form-control custom-select" v-model="classe.level_id">
                  <option :value="level.id" v-for="(level ,index) in levels.data" :key="index">{{level.name}}</option>
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
                  v-model="classe.year"
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
                  v-model="classe.name"
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
                  >Add classe</a
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

    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNavBar from "../../../components/navs/TopNavBar.vue";
import { mapActions, mapGetters } from "vuex";
import BreadCrumb from "../../../components/navs/BreadCrumb.vue";
import FooterNav from '../../../components/navs/Footer.vue';
export default {
  components: { TopNavBar, BreadCrumb, FooterNav },
  data() {
    return {
      classe: {},
    };
  },
  created(){
    this.levelsAction()
  },
  computed: {
    ...mapGetters({
      loadingSave: "classe/getLoadingSave",
      message: "classe/getMessage",
      errors: "classe/getErrors",
      levels: "level/getLevels"
    }),
  },
  methods: {
    ...mapActions({
      saveNewClasse: "classe/addNewClasse",
      getlevels: "level/levels",
     }),
    levelsAction() {
      this.getlevels();
    },
    submitForm() {
      this.saveNewClasse(this.classe);
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
