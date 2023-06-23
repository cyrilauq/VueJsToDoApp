<template>
    <HeaderVue :title="'To Do List'" />
    <AddToDoItemVue @addToDo="(toDo) => addToDo(toDo)" :errorMessage="toDoAddError" />
    <section id="itemsSection">
        <h2>Your todos</h2>
        <ToDoItemVue v-for="item in toDoList.items" :item="item" />
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    import AddToDoItemVue from '@/components/AddToDoItemVue.vue'
    import ToDoItemVue from '@/components/ToDoItemVue.vue'
    import { ToDoListItem } from '@/modules/ToDoListItem'
    import { ToDoList, defaultToDoList } from '@/modules/ToDoList'
    import { ToDoAlreadyInList } from '@/modules/exceptions/ToDoError'

    const toDoAddError = ref("")

    const toDoList = ref(defaultToDoList())

    function addToDo(toDo: ToDoListItem): void {
        try {
            toDoList.value.addToDo(toDo)
        } catch (error) {
            if(error instanceof ToDoAlreadyInList) {
                toDoAddError.value = error.message
            }
        }
    }
</script>

<style scoped>
    #itemsSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
    }
</style>