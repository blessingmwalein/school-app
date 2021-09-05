<template>
  <div
    class="
      container
      page__container
      d-flex
      flex-column flex-md-row
      align-items-center
      text-center text-sm-left
    "
  >
    <div
      class="flex d-flex flex-column flex-sm-row mb-24pt mb-md-0"
      style="text-align: left;padding:10px"
    >
      <div class="mb-24pt mb-sm-0">
        <h2 class="mb-0">{{name}}</h2>
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item">
            <nuxt-link to="/admin/">Home</nuxt-link>
          </li>
          <li class="breadcrumb-item active" v-for="(link, index) in links" :key="index">
            <nuxt-link :to="`${link.link}`">{{link.name}}</nuxt-link>
          </li>
        </ol>
      </div>
    </div>
    <div class="row" role="tablist" v-if="actions">
      <div class="col-auto" v-for="(action, index) in actions" :key="index">
        <nuxt-link :to="`${action.link}`" class="btn btn-outline-secondary">{{action.name}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['name', 'links', 'actions']
};
</script>

<style>
</style>
