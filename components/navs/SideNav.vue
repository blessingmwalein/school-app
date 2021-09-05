<template>
  <div
    class="mdk-drawer js-mdk-drawer layout-compact__drawer"
    id="default-drawer"
  >
    <div
      class="mdk-drawer__content js-sidebar-mini"
      data-responsive-width="992px"
      data-layout="compact"
    >
      <div
        class="
          sidebar sidebar-mini sidebar-dark-pickled-bluewood sidebar-left
          d-flex
          flex-column
        "
      >
        <!-- Brand -->
        <nuxt-link
          to="/"
          class="sidebar-brand p-0 navbar-height d-flex justify-content-center"
        >
          <span class="avatar avatar-sm">
            <span class="avatar-title rounded bg-primary"
              ><img
                src="https://luma.humatheme.com/public/images/illustration/student/128/white.svg"
                class="img-fluid"
                alt="logo"
            /></span>
          </span>
        </nuxt-link>

        <div
          class="flex d-flex flex-column justify-content-start"
          data-perfect-scrollbar
        >
          <ul
            class="
              nav
              flex-shrink-0 flex-nowrap flex-column
              sidebar-menu
              mb-0
              sm-item-bordered
              js-sidebar-mini-tabs
            "
            role="tablist"
          >
            <li
              class="sidebar-menu-item active"
              data-title="Student"
              data-placement="right"
              data-boundary="window"
              v-if="user.role.name=='student'"
            >
              <a
                class="sidebar-menu-button"
                href="#sm_student"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_student"
                aria-selected="true"
              >
                <i
                  class="
                    sidebar-menu-icon sidebar-menu-icon--left
                    material-icons
                  "
                  >school</i
                >
                <span class="sidebar-menu-text">Student</span>
              </a>
            </li>
            <li
              class="sidebar-menu-item"
              data-title="Instructor"
              data-placement="right"
              data-container="body"
              data-boundary="window"
              v-if="user.role.name == 'teacher'"
            >
              <a
                class="sidebar-menu-button"
                href="#sm_instructor"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_instructor"
                aria-selected="false"
              >
                <i
                  class="
                    sidebar-menu-icon sidebar-menu-icon--left
                    material-icons
                  "
                  >format_shapes</i
                >
                <span class="sidebar-menu-text">Teacher</span>
              </a>
            </li>

            <li
              class="sidebar-menu-item"
              data-title="Apps"
              data-placement="right"
              data-container="body"
              data-boundary="window"
              v-if="user.role.name =='admin'"
            >
              <a
                class="sidebar-menu-button"
                href="#sm_apps"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_apps"
              >
                <i
                  class="
                    sidebar-menu-icon sidebar-menu-icon--left
                    material-icons
                  "
                  >grid_view</i
                >
                <span class="sidebar-menu-text">Admin</span>
              </a>
            </li>
            <li
              class="sidebar-menu-item"
              data-title="Account"
              data-placement="right"
              data-container="body"
              data-boundary="window"
            >
              <a
                class="sidebar-menu-button"
                href="#sm_account"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_account"
              >
                <i
                  class="
                    sidebar-menu-icon sidebar-menu-icon--left
                    material-icons
                  "
                  >account_box</i
                >
                <span class="sidebar-menu-text">Account</span>
              </a>
            </li>
            <li
              class="sidebar-menu-item"
              data-title="Messaging"
              data-placement="right"
              data-container="body"
              data-boundary="window"
            >
              <a
                class="sidebar-menu-button"
                href="#sm_messaging"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_messaging"
              >
                <i
                  class="
                    sidebar-menu-icon sidebar-menu-icon--left
                    material-icons
                  "
                  >message</i
                >
                <span class="sidebar-menu-text">Messaging</span>
              </a>
            </li>
            <li
              class="sidebar-menu-item"
              data-title="Components"
              data-placement="right"
              data-container="body"
              data-boundary="window"
            >
              <a
                class="sidebar-menu-button"
                href="#sm_components"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_components"
              >
                <i
                  class="
                    sidebar-menu-icon sidebar-menu-icon--left
                    material-icons
                  "
                  >notifications_none</i
                >
                <span class="sidebar-menu-text">Notifications</span>
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div
        class="
          sidebar sidebar-light sidebar-left
          flex
          sidebar-secondary
          pt-16pt
        "
        data-perfect-scrollbar
      >
        <div class="tab-content">
          <div class="tab-pane" id="sm_account_1">
            <div class="sidebar-heading">Account</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="edit-account.html">
                  <span class="sidebar-menu-text">Edit Account</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="billing.html">Billing</a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="billing-history.html"
                  >Payments</a
                >
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="login.html">Logout</a>
              </li>
            </ul>
          </div>
          <div class="tab-pane" id="sm_apps">
            <div class="sidebar-heading">Admin</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item">
                <nuxt-link
                  class="sidebar-menu-button js-sidebar-collapse"
                  data-toggle="collapse"
                  to="/admin/classes"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >school</span
                  >
                  Classes
                </nuxt-link>
              </li>
              <li class="sidebar-menu-item">
                <nuxt-link
                  class="sidebar-menu-button"
                  data-toggle="collapse"
                  to="/admin/levels"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >segment</span
                  >
                  Levels
                </nuxt-link>

              </li>
              <li class="sidebar-menu-item">
                <nuxt-link
                  class="sidebar-menu-button"
                  data-toggle="collapse"
                  to="/admin/subjects"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >library_books</span
                  >
                  Subjects
                </nuxt-link>
              </li>
              <li class="sidebar-menu-item">
                <nuxt-link
                  class="sidebar-menu-button"
                  data-toggle="collapse"
                  to="/admin/students"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >people_outline</span
                  >
                  Students
                </nuxt-link>
              </li>
              <li class="sidebar-menu-item">
                <nuxt-link
                  class="sidebar-menu-button"
                  data-toggle="collapse"
                  to="/admin/teachers"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >people_outline</span
                  >
                  Teachers
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="tab-pane fade active show" id="sm_student" v-if="user.role.name=='student'">
            <div class="sidebar-heading">Student</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item active">
                <nuxt-link class="sidebar-menu-button" to="/students">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >home</span
                  >
                  <span class="sidebar-menu-text">Dashboard</span>
                </nuxt-link>
              </li>
              <li class="sidebar-menu-item">
                <nuxt-link class="sidebar-menu-button" to="/students/subjects">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >library_books</span
                  >
                  <span class="sidebar-menu-text">Subjects</span>
                </nuxt-link>
              </li>
              <li class="sidebar-menu-item">
                <nuxt-link
                  class="sidebar-menu-button"
                  to="/students/assignments"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >assignment</span
                  >
                  <span class="sidebar-menu-text">Assignments</span>
                </nuxt-link>
              </li>
              <li class="sidebar-menu-item">
                <nuxt-link class="sidebar-menu-button" to="/students/tests">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >account_box</span
                  >
                  <span class="sidebar-menu-text">Tests</span>
                </nuxt-link>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="student-my-courses.html">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >search</span
                  >
                  <span class="sidebar-menu-text">My Teachers</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-pane" id="sm_instructor" v-if="user.role.name=='teacher'">
            <div class="sidebar-heading">Instructor</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-dashboard.html">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >school</span
                  >
                  <span class="sidebar-menu-text">Instructor Dashboard</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-courses.html">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >import_contacts</span
                  >
                  <span class="sidebar-menu-text">Manage Courses</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-quizzes.html">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >help</span
                  >
                  <span class="sidebar-menu-text">Manage Quizzes</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-earnings.html">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >trending_up</span
                  >
                  <span class="sidebar-menu-text">Earnings</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-statement.html">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >receipt</span
                  >
                  <span class="sidebar-menu-text">Statement</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="instructor-edit-course.html"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >post_add</span
                  >
                  <span class="sidebar-menu-text">Edit Course</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-edit-quiz.html">
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >format_shapes</span
                  >
                  <span class="sidebar-menu-text">Edit Quiz</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-pane" id="sm_account">
            <div class="sidebar-heading">Account</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="pricing.html">
                  <span class="sidebar-menu-text">Pricing</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="login.html">
                  <span class="sidebar-menu-text">Login</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="signup.html">
                  <span class="sidebar-menu-text">Signup</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="signup-payment.html">
                  <span class="sidebar-menu-text">Payment</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="reset-password.html">
                  <span class="sidebar-menu-text">Reset Password</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="change-password.html">
                  <span class="sidebar-menu-text">Change Password</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="edit-account.html">
                  <span class="sidebar-menu-text">Edit Account</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="edit-account-profile.html">
                  <span class="sidebar-menu-text">Profile &amp; Privacy</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="edit-account-notifications.html"
                >
                  <span class="sidebar-menu-text">Email Notifications</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="edit-account-password.html"
                >
                  <span class="sidebar-menu-text">Account Password</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="billing.html">
                  <span class="sidebar-menu-text">Subscription</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="billing-upgrade.html">
                  <span class="sidebar-menu-text">Upgrade Account</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="billing-payment.html">
                  <span class="sidebar-menu-text">Payment Information</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="billing-history.html">
                  <span class="sidebar-menu-text">Payment History</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="billing-invoice.html">
                  <span class="sidebar-menu-text">Invoice</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-pane" id="sm_messaging">
            <div class="sidebar-heading">Messaging</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="messages.html">
                  <span class="sidebar-menu-text">Messages</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="email.html">
                  <span class="sidebar-menu-text">Email</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-pane" id="sm_components">
            <div class="sidebar-heading">UI Components</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#components_menu"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >tune</span
                  >
                  Components
                  <span class="ml-auto sidebar-menu-toggle-icon"></span>
                </a>
                <ul
                  class="sidebar-submenu collapse sm-indent"
                  id="components_menu"
                >
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-buttons.html">
                      <span class="sidebar-menu-text">Buttons</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-avatars.html">
                      <span class="sidebar-menu-text">Avatars</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-forms.html">
                      <span class="sidebar-menu-text">Forms</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-loaders.html">
                      <span class="sidebar-menu-text">Loaders</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-tables.html">
                      <span class="sidebar-menu-text">Tables</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-cards.html">
                      <span class="sidebar-menu-text">Cards</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-icons.html">
                      <span class="sidebar-menu-text">Icons</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-tabs.html">
                      <span class="sidebar-menu-text">Tabs</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-alerts.html">
                      <span class="sidebar-menu-text">Alerts</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-badges.html">
                      <span class="sidebar-menu-text">Badges</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-progress.html">
                      <span class="sidebar-menu-text">Progress</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-pagination.html">
                      <span class="sidebar-menu-text">Pagination</span>
                    </a>
                  </li>
                  <!-- <li class="sidebar-menu-item">
<a class="sidebar-menu-button disabled" href="ui-typography.html">
<span class="sidebar-menu-text">Typography</span>
</a>
</li>
<li class="sidebar-menu-item">
<a class="sidebar-menu-button disabled" href="ui-colors.html">
<span class="sidebar-menu-text">Colors</span>
</a>
</li>
<li class="sidebar-menu-item">
<a class="sidebar-menu-button disabled" href="ui-breadcrumb.html">
<span class="sidebar-menu-text">Breadcrumb</span>
</a>
</li>
<li class="sidebar-menu-item">
<a class="sidebar-menu-button disabled" href="ui-accordions.html">
<span class="sidebar-menu-text">Accordions</span>
</a>
</li>
<li class="sidebar-menu-item">
<a class="sidebar-menu-button disabled" href="ui-modals.html">
<span class="sidebar-menu-text">Modals</span>
</a>
</li>
<li class="sidebar-menu-item">
<a class="sidebar-menu-button disabled" href="ui-chips.html">
<span class="sidebar-menu-text">Chips</span>
</a>
</li> -->
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button disabled" href="#">
                      <span class="sidebar-menu-text">Disabled</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#plugins_menu"
                >
                  <span
                    class="
                      material-icons
                      sidebar-menu-icon sidebar-menu-icon--left
                    "
                    >folder</span
                  >
                  Plugins
                  <span class="ml-auto sidebar-menu-toggle-icon"></span>
                </a>
                <ul
                  class="sidebar-submenu collapse sm-indent"
                  id="plugins_menu"
                >
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-plugin-charts.html">
                      <span class="sidebar-menu-text">Charts</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-flatpickr.html"
                    >
                      <span class="sidebar-menu-text">Flatpickr</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-daterangepicker.html"
                    >
                      <span class="sidebar-menu-text">Date Range Picker</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-dragula.html"
                    >
                      <span class="sidebar-menu-text">Dragula</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-dropzone.html"
                    >
                      <span class="sidebar-menu-text">Dropzone</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-range-sliders.html"
                    >
                      <span class="sidebar-menu-text">Range Sliders</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-plugin-quill.html">
                      <span class="sidebar-menu-text">Quill</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-select2.html"
                    >
                      <span class="sidebar-menu-text">Select2</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-nestable.html"
                    >
                      <span class="sidebar-menu-text">Nestable</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-fancytree.html"
                    >
                      <span class="sidebar-menu-text">Fancy Tree</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-maps-vector.html"
                    >
                      <span class="sidebar-menu-text">Vector Maps</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a
                      class="sidebar-menu-button"
                      href="ui-plugin-sweet-alert.html"
                    >
                      <span class="sidebar-menu-text">Sweet Alert</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button" href="ui-plugin-toastr.html">
                      <span class="sidebar-menu-text">Toastr</span>
                    </a>
                  </li>
                  <li class="sidebar-menu-item">
                    <a class="sidebar-menu-button disabled" href="#">
                      <span class="sidebar-menu-text">Disabled</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="tab-pane" id="sm_layouts">
            <div class="sidebar-heading">Layouts</div>
            <ul class="sidebar-menu">
              <li class="sidebar-menu-item active">
                <a class="sidebar-menu-button" href="index.html">
                  <span class="sidebar-menu-text">Compact</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="https://luma.humatheme.com/Demos/Mini_App_Layout/index.html"
                >
                  <span class="sidebar-menu-text">Mini</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="https://luma.humatheme.com/Demos/Mini_Secondary_Layout/index.html"
                >
                  <span class="sidebar-menu-text">Mini + Secondary</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="https://luma.humatheme.com/Demos/App_Layout/index.html"
                >
                  <span class="sidebar-menu-text">App</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="https://luma.humatheme.com/Demos/Boxed_App_Layout/index.html"
                >
                  <span class="sidebar-menu-text">Boxed</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="https://luma.humatheme.com/Demos/Sticky_App_Layout/index.html"
                >
                  <span class="sidebar-menu-text">Sticky</span>
                </a>
              </li>
              <li class="sidebar-menu-item">
                <a
                  class="sidebar-menu-button"
                  href="https://luma.humatheme.com/Demos/Fixed_Layout/index.html"
                >
                  <span class="sidebar-menu-text">Fixed</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SideNav",

  computed: {
    ...mapGetters({
      user: "auth/getUser",
      isLoggedIn: "auth/getUserIsLoggedIn",
    }),
  },
};
</script>

<style scoped>
</style>
