<template>
    <HeaderVue :title="'To Do List'" />
    <AddToDoItemVue />
    <section>
        <h2>Your todos</h2>
        <ToDoItemVue v-for="item in items" :title="'Coucou'" :description="'C\'est un todo de fou'" />
    </section>
</template>

<script setup lang="ts">
    import AddToDoItemVue from '@/components/AddToDoItemVue.vue'
    import ToDoItemVue from '@/components/ToDoItemVue.vue'

    const items = [ '' ]
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
    }
</style>