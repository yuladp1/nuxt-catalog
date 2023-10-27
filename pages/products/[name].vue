<template>
    <div>
        <p>Product details</p>
        <p>Product name: {{ name }}</p>
    </div>
</template>

<script setup>
const {name }  = useRoute().params
definePageMeta({
    layout: 'products'
})
</script>

<style lang="scss" scoped>

</style>