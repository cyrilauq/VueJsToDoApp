<template>
    <div class="flex flex-row">
        <input type="checkbox" :id="item?.title" :checked="item?.isCompleted" @change="() => $emit('completeToDo', item?.title)" />
        <label :for="item?.title">
            <h3>{{ item?.title }}</h3>
            <p>{{ item?.description }}</p>
        </label>
        <span @click="$emit('deleteToDo', item?.title)">delete</span>
    </div>
</template>

<script setup lang="ts">
    import { ToDoListItem } from '@/modules/ToDoListItem'
import { watch } from 'vue';

    const props = defineProps({
        item: ToDoListItem

    })

    const emits = defineEmits([
        'deleteToDo', 'completeToDo'
    ])
</script>

<style scoped>
    div {
        text-align: left;
        width: var(--list-todo-item-width);
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }
    input:checked + label h3 {
        text-decoration: line-through;
    }
    label {
        width: 95%;
        margin-left: 10px;
    }
    label > h3 {
        margin: 0;
        border-bottom: 1.5pt var(--color-button) solid;
    }
    label > p {
        margin-top: 10px;
    }
    span {
        position: relative;
        margin-right: 0;
    }
</style>