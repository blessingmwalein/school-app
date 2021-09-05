<template>
  <div class="mdk-drawer-layout js-mdk-drawer-layout" data-push data-responsive-width="992px">
     <Nuxt />
     <side-nav></side-nav>
  </div>
</template>
<script>
import SideNav from "../components/navs/SideNav";
export default {
  components: {SideNav},
  head: {
    bodyAttrs: {
      class: 'layout-compact'
    }
  },
  middleware : ['auth']


}
</script>


<style>

</style>
