<template>
    <HeaderVue :title="'ToDoList'" />
    <AddToDoItemVue />
    <section>
        <ToDoItemVue v-for="item in items" :title="'Coucou'" />
    </section>
</template>

<script setup lang="ts">
    import AddToDoItemVue from '@/components/AddToDoItemVue.vue'
    import ToDoItemVue from '@/components/ToDoItemVue.vue'

    const items = [ '' ]
</script>

<style scoped>

</style>