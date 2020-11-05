<script>
/**
 * Footer component
 */
export default {}
</script>

<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">{{ new Date().getFullYear() }} © Zenderu.</div>
        <div class="col-sm-6">
          <div class="text-sm-right d-none d-sm-block">
            Crafted with
            <i class="mdi mdi-heart text-danger"></i> by
            <a href="https://zenderu.com/" target="_blank" class="text-reset"
              >Zenderu</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
