<template>
  <div>
    <PageHeader :title="title" :items="items" />
  </div>
</template>
<script>
/**
 * Starter page
 */
export default {
  layout: 'app',
  data() {
    return {
      title: 'Starter Page',
      items: [
        {
          text: 'Utility',
          href: '/',
        },
        {
          text: 'Starter Page',
          active: true,
        },
      ],
    }
  },
  head() {
    return {
      title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
    }
  },
}
</script>
