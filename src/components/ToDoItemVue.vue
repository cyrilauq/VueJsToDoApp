<template>
    <div class="flex flex-row">
        <input type="checkbox" :id="title" :checked="isCompleted" />
        <label :for="title">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </label>
        <span>delete</span>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        isCompleted: Boolean,
        title: String,
        description: String
    })
</script>

<style scoped>
    div {
        width: min-content;
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }
    label {
        width: 200px;
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
        position: absolute;
        margin-left: 190px;
    }
</style>