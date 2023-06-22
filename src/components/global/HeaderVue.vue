<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
    <section>
        
    </section>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: String
    })
</script>

<style scoped>
    h1 {
        text-decoration: underline overline;
        letter-spacing: 5pt;
    }
</style>