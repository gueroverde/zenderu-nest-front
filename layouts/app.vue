<template>
  <!-- Begin page -->
  <div id="layout-wrapper">
    <HorizontalTopbar :type="topbar" :width="layoutWidth" />
    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <Nuxt />
        </div>
      </div>
      <Footer />
    </div>
    <RightSidebar />
  </div>
</template>
<script>
export default {
  data() {
    return {
      layoutType: 'horizontal',
      layoutWidth: 'fluid',
      leftSidebarType: 'light',
      topbar: 'colored',
      loader: false,
    }
  },
  mounted() {
    document.body.setAttribute('data-layout', 'horizontal')
    document.body.setAttribute('data-topbar', 'colored')
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle('right-bar-enabled')
    },
    hideRightSidebar() {
      document.body.classList.remove('right-bar-enabled')
    },
  },
}
</script>
