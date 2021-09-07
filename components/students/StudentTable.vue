<template>
  <div class="card mb-lg-32pt">
    <div class="table-responsive">
      <table class="table mb-0 thead-border-top-0 table-nowrap">
        <thead>
          <tr>
            <th >
              <a
                href="javascript:void(0)"
                class="sort"
                data-sort="js-lists-values-project"
                >Name</a
              >
            </th>
            <th>
              <a
                href="javascript:void(0)"
                class="sort"
                data-sort="js-lists-values-lead"
                >Enrollment</a
              >
            </th>

            <th style="">
              <a
                href="javascript:void(0)"
                class="sort"
                data-sort="js-lists-values-budget"
                >Phone Number</a
              >
            </th>

            <th >
              <a
                href="javascript:void(0)"
                class="sort desc"
                data-sort="js-lists-values-date"
                >Created At</a
              >
            </th>
            <th style="width: 24px"></th>
          </tr>
        </thead>
        <tbody class="list" id="projects">
          <tr v-for="(student, index) in students.data" :key="index">
            <td>
              <div
                class="media flex-nowrap align-items-center"
                style="white-space: nowrap"
              >
                <nuxt-link :to="`/admin/students/${student.id}`" class="avatar avatar-sm mr-8pt">
                  <span class="avatar-title rounded-circle"
                    >{{ student.first_name.charAt(0)
                    }}{{ student.last_name.charAt(0) }}</span
                  >
                </nuxt-link>
                <div class="media-body">
                  <nuxt-link :to="`/admin/students/${student.id}`" class="d-flex flex-column">
                    <small class="js-lists-values-project"
                      ><strong
                        >{{ student.first_name }}
                        {{ student.last_name }}</strong
                      ></small
                    >
                    <small class="js-lists-values-location text-50">{{
                      student.user.email
                    }}</small>
                  </nuxt-link>
                </div>
              </div>
            </td>

            <td>
              <div
                class="media flex-nowrap align-items-center"
                style="white-space: nowrap"
              >
                <div class="media-body">
                  <div class="d-flex align-items-center">
                    <div class="flex d-flex flex-column">
                      <p class="mb-0">
                        <strong class="js-lists-values-lead">{{
                          student.enrollment_number
                        }}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <small class="js-lists-values-budget"
                  ><strong>{{ student.phone_number }}</strong></small
                >
              </div>
            </td>

            <td>
              <div class="d-flex flex-column">
                <small class="js-lists-values-date"
                  ><strong>{{ timeSince(new Date(student.created_at)) }} ago</strong></small
                >
              </div>
            </td>
            <td class="text-right">
              <div class="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-caret="false"
                  class="text-muted"
                  aria-expanded="false"
                  ><i class="material-icons">more_horiz</i></a
                >
                <!-- <div class="dropdown-menu dropdown-menu-right" style="">
                  <a href="javascript:void(0)" class="dropdown-item"
                    >Review Quiz</a
                  >
                  <a href="instructor-edit-quiz.html" class="dropdown-item"
                    >Edit Quiz</a
                  >
                  <div class="dropdown-divider"></div>
                  <a href="javascript:void(0)" class="dropdown-item text-danger"
                    >Delete Quiz</a
                  >
                </div> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer p-8pt" v-if="students.meta">
      <pagination :meta="students.meta" :links="students.links"></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "../generic/Pagination.vue";
export default {
  props: ["students"],
  components: {
    Pagination,
  },
  methods:{
    timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    },
  }
};
</script>

<style>
.table-responsive {
  text-align: left !important;
  padding-left: 10px;
}
</style>
