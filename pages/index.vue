<template>
    <div>
    <div class="flex ">
    <div class=" ">
        <div v-for="category in categories" :key="category">
            <NuxtLink :to="`/categories/${category}`"> <span>{{ category }} </span></NuxtLink>
        </div>
    </div>

    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
            <productCard :product="product" />
        </div>
    </div>
    </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')
const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')


</script>

<style >
.router-link-active {
    color: blue;
    text-decoration: underline;
}
</style> 