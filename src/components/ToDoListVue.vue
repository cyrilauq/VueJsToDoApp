<template>
    <HeaderVue :title="'To Do List'" />
    <AddToDoItemVue @addToDo="(toDo) => addToDo(toDo)" :errorMessage="toDoAddError" />
    <section id="itemsSection">
        <h2>Your todos</h2>
        <p>{{ toDoCompleted + " out " + toDoCount + " items completed" }}</p>
        <ToDoItemVue v-for="item in toDosToRender" :item="item" @deleteToDo="(toDoTitle: string) => deleteToDo(toDoTitle)" @completeToDo="(toDoTitle: string) => toDoComplete(toDoTitle)" />
    </section>
    <section>
        <button @click="showToDos(true)">
            Show completed to dos
        </button>
        <button @click="showToDos(false)">
            Show uncompleted to dos
        </button>
        <button @click="showToDos()">
            Reset
        </button>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    import AddToDoItemVue from '@/components/AddToDoItemVue.vue'
    import ToDoItemVue from '@/components/ToDoItemVue.vue'
    import { ToDoListItem } from '@/modules/ToDoListItem'
    import { ToDoList, defaultToDoList } from '@/modules/ToDoList'
    import { ToDoAlreadyInList, ToDoNotInList } from '@/modules/exceptions/ToDoError'

    const toDoAddError = ref("")
    const toDoCompleted = ref(0)
    const toDoCount = ref(0)

    const toDoList = ref(defaultToDoList())
    const toDosToRender = ref(getToDoList().items)
    const showCompleteToDos = ref({} as boolean | undefined);
    showCompleteToDos.value = undefined
    refreshView()

    function addToDo(toDo: ToDoListItem): void {
        try {
            getToDoList().addToDo(toDo)
            toDoAddError.value = ""
            refreshView()
        } catch (error) {
            if(error instanceof ToDoAlreadyInList) {
                toDoAddError.value = error.message
            }
        }
    }

    function deleteToDo(toDoTitle: string) {
        try {
            getToDoList().removeToDo(toDoTitle)
            toDoAddError.value = ""
            refreshView()
        } catch(error) {
            if(error instanceof ToDoNotInList) {
                toDoAddError.value = error.message
            }
        }
    }
    
    function showToDos(showComplete?: boolean): void {
        showCompleteToDos.value = showComplete
        toDosToRender.value = showComplete === undefined ? getToDoList().items : !showComplete? getToDoList().getUncompletedToDos() : getToDoList().getCompletedToDos()
    }

    function getToDoList() {
        return toDoList.value
    }

    function refreshView(): void {
        toDoCompleted.value = getToDoList().completeToDosCount()
        toDoCount.value = getToDoList().toDosCount()
        showToDos(showCompleteToDos.value)
    }

    function toDoComplete(toDoTitle: string): void {
        console.log("Coucou");
        getToDoList().completeToDo(toDoTitle)
        refreshView()
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