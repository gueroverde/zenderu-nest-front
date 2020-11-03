<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
        };
    },
    data() {
        return {
            title: "Starter Page",
            items: [{
                    text: "Minible",
                },
                {
                    text: "Starter Page",
                    active: true,
                },
            ],
        };
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
</div>
</template>

<style></style>
