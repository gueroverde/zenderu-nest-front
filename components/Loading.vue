<script>
/**
 * Loader component
 */
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<template>
  <!-- Loader -->
  <div v-if="loading" id="preloader">
    <div id="status">
      <div class="spinner">
        <i class="uil-shutter-alt spin-icon"></i>
      </div>
    </div>
  </div>
</template>
