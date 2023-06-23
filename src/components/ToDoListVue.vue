<template>
    <HeaderVue :title="'To Do List'" />
    <AddToDoItemVue />
    <section id="itemsSection">
        <h2>Your todos</h2>
        <ToDoItemVue v-for="item in items" :item="item" />
    </section>
</template>

<script setup lang="ts">
    import AddToDoItemVue from '@/components/AddToDoItemVue.vue'
    import ToDoItemVue from '@/components/ToDoItemVue.vue'
    import { ToDoListItem } from '@/modules/ToDoListItem'

    const items: ToDoListItem[] = [
        new ToDoListItem({ title: "Learning VueJS", description: "You may learn about VueJS framework", isCompleted: false }),
        new ToDoListItem({ title: "Exercising with Asp.Net", description: "I may reexercise with Asp.Net framework", isCompleted: true })
    ]
</script>

<style scoped>
    #itemsSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
    }
</style>