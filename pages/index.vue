<template>
    <div>
        <HeroSection />
    </div>
    <div class="columns-5 ">
        <div v-for="product in products" :key="product.id">
            <img :src="product.image" alt="" class="w-full">
        </div>

    </div>
    <div class="grid grid-cols-4 gap-5 ">
        <div v-for="category in categories" :key="category">
            <NuxtLink :to="`/categories/${category}`"> <span>{{ category }} </span></NuxtLink>
        </div>
    </div>
</template>

<script setup >
definePageMeta({
    layout: 'default'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>
