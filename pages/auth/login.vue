<template>
  <div
    class="mdk-drawer-layout js-mdk-drawer-layout"
    data-push
    data-responsive-width="992px"
  >
    <div class="mdk-drawer-layout__content page-content">
      <!-- Header -->

      <div class="pt-32pt pt-sm-64pt pb-32pt">
          <h1 class="text-center" >Login</h1>

        <div class="container page__container">
          <form class="col-md-12 p-0 mx-auto">
            <div class="alert alert-danger" role="alert" v-if="message">
              <div class="d-flex flex-wrap align-items-start">
                <div class="mr-8pt">
                  <i class="material-icons">access_time</i>
                </div>
                <div class="flex" style="min-width: 180px">
                  <small class="text-black-100">
                    <strong>Opps!</strong> {{message}}
                  </small>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email:</label>
              <input
                id="email"
                type="text"
                class="form-control"
                v-model="credentials.email"
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
              <label class="form-label" for="password">Password:</label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="********"
                v-model="credentials.password"
              />
              <div v-if="errors.password">
                <div
                  class="invalid-feedback"
                  v-for="(error, index) in errors.password"
                  :key="index"
                >
                  {{ error }}
                </div>
              </div>
              <p class="text-right mt-2 p-1">
                <a href="#" class="small">Forgot your password?</a>
              </p>
            </div>
            <div class="text-center">
              <button
                v-if="!loading"
                class="btn btn-primary"
                @click.prevent="submitForm"
              >
                Login
              </button>
              <a
                href="#"
                v-if="loading"
                class="btn btn-primary is-loading is-loading-sm"
                >...loading</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  layout: "auth",
  data() {
    return {
      credentials: {},
    };
  },
  computed: {
    ...mapGetters({
      errors: "auth/getErrors",
      loading: "auth/getLoading",
      message: "auth/getMessage",
    }),
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    submitForm() {
      this.login(this.credentials);
    },
  },
};
</script>

<style>
.page__container {
  /* border: 1px solid#DEC6C6; */
  width: 50rem;
  text-align: left;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 30px;
}
.btn {
  width: 100%;
}
.invalid-feedback {
  display: inline;
  padding: 3px;
  font-weight: bold;
}
</style>
