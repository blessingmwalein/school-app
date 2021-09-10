<template>
  <div
    class="navbar navbar-expand pr-0 navbar-light border-bottom-2"
    id="default-navbar"
    data-primary
  >
    <!-- Navbar Toggler -->

    <button
      class="navbar-toggler w-auto mr-16pt d-block d-lg-none rounded-0"
      type="button"
      data-toggle="sidebar"
    >
      <span class="material-icons">short_text</span>
    </button>
    <!-- // END Navbar Toggler -->

    <!-- Navbar Brand -->

    <a href="index.html" class="navbar-brand mr-16pt d-lg-none">
      <span class="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
        <span class="avatar-title rounded bg-primary"
          ><img
            src="https://luma.humatheme.com/public/images/illustration/student/128/white.svg"
            alt="logo"
            class="img-fluid"
        /></span>
      </span>

      <span class="d-none d-lg-block">Luma</span>
    </a>

    <form
      class="search-form navbar-search d-none d-md-flex mr-16pt"
      action="https://luma.humatheme.com/Demos/Compact_App_Layout/index.html"
    >
      <button class="btn" type="submit">
        <i class="material-icons">search</i>
      </button>
      <input type="text" class="form-control" placeholder="Search ..." />
    </form>

    <!-- // END Navbar Search -->

    <div class="flex"></div>

    <!-- Switch Layout -->

    <a
      href="https://luma.humatheme.com/Demos/App_Layout/instructor-dashboard.html"
      class="
        navbar-toggler navbar-toggler-custom
        align-items-center
        justify-content-center
        d-none d-lg-flex
      "
      data-toggle="tooltip"
      data-title="Switch to Vertical App Layout"
      data-placement="bottom"
      data-boundary="window"
    >
      <span class="material-icons">swap_horiz</span>
    </a>

    <!-- // END Switch Layout -->

    <!-- Navbar Menu -->

    <div class="nav navbar-nav flex-nowrap d-flex mr-16pt">
      <!-- Notifications dropdown -->
      <div
        class="nav-item dropdown dropdown-notifications dropdown-xs-down-full"
        data-toggle="tooltip"
        data-title="Messages"
        data-placement="bottom"
        data-boundary="window"
      >
        <button
          class="nav-link btn-flush dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          data-caret="false"
        >
          <i class="material-icons icon-24pt">mail_outline</i>
        </button>
        <div class="dropdown-menu dropdown-menu-left" style="text-align: left">
          <div data-perfect-scrollbar class="position-relative">
            <div class="dropdown-header"><strong>Messages</strong></div>
            <div class="list-group list-group-flush mb-0">
              <a
                href="javascript:void(0);"
                class="list-group-item list-group-item-action unread"
              >
                <span class="d-flex align-items-center mb-1">
                  <small class="text-black-50">5 minutes ago</small>

                  <span class="ml-auto unread-indicator bg-accent"></span>
                </span>
                <span class="d-flex">
                  <span class="avatar avatar-xs mr-2">
                    <img
                      src="/images/people/110/woman-5.jpg"
                      alt="people"
                      class="avatar-img rounded-circle"
                    />
                  </span>
                  <span class="flex d-flex flex-column">
                    <strong class="text-black-100">Michelle</strong>
                    <span class="text-black-70"
                      >Clients loved the new design.</span
                    >
                  </span>
                </span>
              </a>

              <a
                href="javascript:void(0);"
                class="list-group-item list-group-item-action"
              >
                <span class="d-flex align-items-center mb-1">
                  <small class="text-black-50">5 minutes ago</small>
                </span>
                <span class="d-flex">
                  <span class="avatar avatar-xs mr-2">
                    <img
                      src="/images/people/110/woman-5.jpg"
                      alt="people"
                      class="avatar-img rounded-circle"
                    />
                  </span>
                  <span class="flex d-flex flex-column">
                    <strong class="text-black-100">Michelle</strong>
                    <span class="text-black-70">🔥 Superb job..</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- // END Notifications dropdown -->

      <!-- Notifications dropdown -->
      <div
        class="
          nav-item
          ml-16pt
          dropdown dropdown-notifications dropdown-xs-down-full
        "
        data-toggle="tooltip"
        data-title="Notifications"
        data-placement="bottom"
        data-boundary="window"
      >
        <button
          class="nav-link btn-flush dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          data-caret="false"
        >
          <i class="material-icons">notifications_none</i>
          <span class="badge badge-notifications badge-accent">2</span>
        </button>
        <div class="dropdown-menu dropdown-menu-left">
          <div data-perfect-scrollbar class="position-relative">
            <div class="dropdown-header">
              <strong>System notifications</strong>
            </div>
            <div class="list-group list-group-flush mb-0">
              <a
                href="javascript:void(0);"
                class="list-group-item list-group-item-action unread"
              >
                <span class="d-flex align-items-center mb-1">
                  <small class="text-black-50">3 minutes ago</small>

                  <span class="ml-auto unread-indicator bg-accent"></span>
                </span>
                <span class="d-flex">
                  <span class="avatar avatar-xs mr-2">
                    <span class="avatar-title rounded-circle bg-light">
                      <i class="material-icons font-size-16pt text-accent"
                        >account_circle</i
                      >
                    </span>
                  </span>
                  <span class="flex d-flex flex-column">
                    <span class="text-black-70"
                      >Your profile information has not been synced
                      correctly.</span
                    >
                  </span>
                </span>
              </a>

              <a
                href="javascript:void(0);"
                class="list-group-item list-group-item-action"
              >
                <span class="d-flex align-items-center mb-1">
                  <small class="text-black-50">5 hours ago</small>
                </span>
                <span class="d-flex">
                  <span class="avatar avatar-xs mr-2">
                    <span class="avatar-title rounded-circle bg-light">
                      <i class="material-icons font-size-16pt text-primary"
                        >group_add</i
                      >
                    </span>
                  </span>
                  <span class="flex d-flex flex-column">
                    <strong class="text-black-100">Adrian. D</strong>
                    <span class="text-black-70"
                      >Wants to join your private group.</span
                    >
                  </span>
                </span>
              </a>

              <a
                href="javascript:void(0);"
                class="list-group-item list-group-item-action"
              >
                <span class="d-flex align-items-center mb-1">
                  <small class="text-black-50">1 day ago</small>
                </span>
                <span class="d-flex">
                  <span class="avatar avatar-xs mr-2">
                    <span class="avatar-title rounded-circle bg-light">
                      <i class="material-icons font-size-16pt text-warning"
                        >storage</i
                      >
                    </span>
                  </span>
                  <span class="flex d-flex flex-column">
                    <span class="text-black-70"
                      >Your deploy was successful.</span
                    >
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- // END Notifications dropdown -->

      <div class="nav-item dropdown">
        <a
          href="#"
          class="nav-link d-flex align-items-center dropdown-toggle"
          data-toggle="dropdown"
          data-caret="false"
        >
          <span class="avatar avatar-sm mr-8pt2">
            <span class="avatar-title rounded-circle bg-primary"
              ><i class="material-icons">account_box</i></span
            >
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-left">
          <div class="dropdown-header"><strong>Account</strong></div>
          <a class="dropdown-item" href="#"><strong>{{user.email}}</strong></a>
          <a class="dropdown-item" href="#">Edit Account</a>
          <a class="dropdown-item" href="#" @click.prevent="logOutAction">Logout</a>
        </div>
      </div>
    </div>

    <!-- // END Navbar Menu -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      user:'auth/getUser',
      isLoggogedIn:'auth/getUserIsLoggedIn'
    })
  },
  methods:{
    ...mapActions({
      logOut:"auth/logOut"
    }),
    logOutAction(){
      this.logOut()
    }
  }
};
</script>

<style>
.dropdown-menu-left{
  text-align: left;
}
</style>
