<template>
  <div class="mb-32pt">
    <ul class="pagination justify-content-start pagination-xsm m-0">

      <li class="page-item" v-for="(link, index) in meta.links" :key="index">
        <a
          :class="{'page-link active':link.active, 'page-link':!link.active }"
          href="#"
          aria-label="Page 1"
          v-if="prev(link.label)"
          @click="fetchData(link)"
        >
          <span aria-hidden="true" class="material-icons">chevron_left</span>
          <span>Prev</span>
        </a>
        <a
         :class="{'page-link active':link.active, 'page-link':!link.active }"
          href="#"
          aria-label="Page 1"
          @click="fetchData(link)"
        >
          <span>{{ link.label.length > 5 ? "" : link.label }}</span>
        </a>
        <a
         :class="{'page-link active':link.active, 'page-link':!link.active }"
          href="#"
          aria-label="Page 1"
          v-if="next(link.label)"
          @click="fetchData(link)"
        >
          <span>Next</span>
          <span aria-hidden="true" class="material-icons">chevron_right</span>
        </a>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  props: ["meta", "links"],

  data() {
    return {
      metaLinks: [],
    };
  },

  methods: {
    fetchData(link) {
      this.$emit("fetchData", link);
    },
    next(label) {
      console.log(label);
       if (label.includes("Next")) {
        return true;
      } else {
        return false;
      }
    },
    prev(label) {
      if (label.includes("Previous")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.active{
  font-weight: bold;
}

.active span{
  font-size: 20px;

}
</style>
