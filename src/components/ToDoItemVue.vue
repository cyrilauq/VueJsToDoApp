<template>
    <input type="checkbox" :id="title" :checked="isCompleted" /><label>{{ title }}</label>
</template>

<script setup lang="ts">
    const props = defineProps({
        isCompleted: Boolean,
        title: String,
        description: String
    })
</script>

<style scoped>

</style>