<template>
    <div class="flex flex-row">
        <input type="checkbox" :id="title" :checked="isCompleted" />
        <label :for="title">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </label>
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
</style>