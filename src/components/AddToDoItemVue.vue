<template>
    <section>
        <label for="toDoTitle">Title of the todo</label>
        <input id="toDoTitle" placeholder="Todo title" />
        <label for="toDoDescription">Short description about the todo</label>
        <textarea id="toDoDescription" rows="5" cols="50"></textarea>
        <button>
            Add todo
        </button>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
    section {
        width: min-content;
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