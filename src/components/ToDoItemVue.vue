<template>
    <div class="flex flex-row">
        <input type="checkbox" :id="item?.title" :checked="item?.isCompleted" />
        <label :for="item?.title">
            <h3>{{ item?.title }}</h3>
            <p>{{ item?.description }}</p>
        </label>
        <span @click="$emit('deleteToDo', item?.title)">delete</span>
    </div>
</template>

<script setup lang="ts">
    import { ToDoListItem } from '@/modules/ToDoListItem'

    const props = defineProps({
        item: ToDoListItem

    })

    const emits = defineEmits([
        'deleteToDo'
    ])
</script>

<style scoped>
    div {
        text-align: left;
        width: 70%;
        display: flex;
        flex-direction: row;
        align-items: baseline;
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