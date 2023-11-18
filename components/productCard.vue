<template>
    <div class="card text-center p-5 rounded-3xl  ">
        <img :src="product.image" alt="product image" class=" thumb ">
        <p class="font-bold text-white truncate">{{ product.title }}</p>
        <NuxtLink :to='`/products/${product.id}`' >
            <p class="btn my-4 text-white">View details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    min-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>