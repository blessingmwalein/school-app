<template>
  <div class="col-sm-6 col-md-4 col-xl-3">
    <div
      class="
        card card-sm card--elevated
        p-relative
        o-hidden
        overlay overlay--primary
        js-overlay
        mdk-reveal
        js-mdk-reveal
      "
    >
      <nuxt-link :to="`/admin/subjects/${subject.id}`" class="js-image" data-position="">
        <img :src="`${imageBaseUrl}${subject.icon}`" alt="course" height="150px" width="150px" />
        <span class="overlay__content align-items-start justify-content-start">
          <span class="overlay__action card-body d-flex align-items-center">
            <i class="material-icons mr-4pt">edit</i>
            <span class="card-title text-white">Edit</span>
          </span>
        </span>
      </nuxt-link>
      <div class="mdk-reveal__content" style="text-align:left">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex">
              <nuxt-link :to="`/admin/subjects/${subject.id}`" class="card-title mb-4pt"
                >{{subject.name}}</nuxt-link
              >
              <!-- <nuxt-link  :to="`/admin/subjects/${subject.id}`" class="card-sub-title">{{subject.level.name}}</nuxt-link> -->
            </div>
            <a
              href="#"
              class="ml-4pt material-icons text-20 card-course__icon-favorite"
              >edit</a
            >
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:['subject', 'imageBaseUrl']
};
</script>

<style>
</style>
