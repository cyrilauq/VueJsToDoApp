<template>
    <section>
        <span class="errorMessage" v-if="errorMessage?.length !== undefined && errorMessage?.length > 0">{{ errorMessage }}</span>
        <label for="toDoTitle">Title of the todo</label>
        <input id="toDoTitle" placeholder="Todo title" v-model="newToDo.title" @keyup="setTitleError" />
        <span class="errorMessage" id="titleError" v-if="newToDoTitleError.length > 0">{{ newToDoTitleError }}</span>
        <label for="toDoDescription">Short description about the todo</label>
        <textarea id="toDoDescription" rows="5" cols="50" v-model="newToDo.description" @keyup="setDescriptionError"></textarea>
        <span class="errorMessage" id="descriptionError" v-if="newToDoDescriptionError.length > 0">{{ newToDoDescriptionError }}</span>
        <button @click="validForm()">
            Add todo
        </button>
    </section>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { ToDoListItem } from '@/modules/ToDoListItem'

    const emits = defineEmits(['addToDo'])
    const props = defineProps({
        errorMessage: String
    })

    const newToDo = ref(new ToDoListItem({ title: "", description: "", isCompleted: false }))
    const newToDoTitleError = ref("")
    const newToDoDescriptionError = ref("")

    function setTitleError() {
        newToDoTitleError.value = newToDo.value.getTitleProblem()
    }

    function setDescriptionError() {
        newToDoDescriptionError.value = newToDo.value.getDescriptionProblem()
    }

    function validForm() {
        if(newToDo.value.isValid()) {
            emits('addToDo', newToDo.value)
            newToDo.value = new ToDoListItem({ title: "", description: "", isCompleted: false })
        } else {
            setDescriptionError()
            setTitleError()
        }
    }
</script>

<style scoped>
    section {
        text-align: left;
        display: flex;
        flex-direction: column;
    }
    label {
        margin-top: 15px;
        margin-bottom: 5px;
    }
    button {
        margin-top: 20px;
        width: fit-content;
        align-self: center;
    }
</style>