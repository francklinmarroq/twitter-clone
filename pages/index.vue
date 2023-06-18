<template>
    <div>
        <MainSection title="Home" :loading="loading" c>
            This is the home page
        </MainSection>
    </div>
</template>
<script setup>
const loading = ref(false)
</script>