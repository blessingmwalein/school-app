<template>
  <div class="col-sm-4 card-group-row__col" style="text-align: left">
    <div
      class="
        card
        js-overlay
        card-sm
        overlay--primary-dodger-blue
        stack stack--1
        card-group-row__card
      "
      data-toggle="popover"
      data-trigger="click"
    >
      <div class="card-body d-flex flex-column">
        <div class="d-flex align-items-center">
          <div class="flex">
            <div class="d-flex align-items-center">
              <div class="rounded mr-12pt z-0 o-hidden">
                <div class="overlay">
                  <img
                    src="/images/paths/angular_40x40%402x.png"
                    width="40"
                    height="40"
                    alt="Angular"
                    class="rounded"
                  />
                  <span class="overlay__content overlay__content-transparent">
                    <span
                      class="
                        overlay__action
                        d-flex
                        flex-column
                        text-center
                        lh-1
                      "
                    >
                      <small
                        class="h6 small text-white mb-0"
                        style="font-weight: 500"
                        >80%</small
                      >
                    </span>
                  </span>
                </div>
              </div>
              <div class="flex">
                <div class="card-title">{{ classD.name }}</div>
                <p class="flex text-50 lh-1 mb-0">
                  <!-- <small>{{classD.students.length}} students</small> -->
                </p>
              </div>
            </div>
          </div>
          <nuxt-link
            :to="`/admin/classes/${classD.id}`"
            class="
              ml-4pt
              btn btn-sm btn-link
              text-secondary
              border-1 border-secondary
            "
            >View</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["classD"],
};
</script>

<style>
</style>
