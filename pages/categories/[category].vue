<template>
    <p>Products from category "{{ category }}"</p>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in productsFromCategory" :key="product.id">
 <ProductCard :product="product"/>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
const {category} = useRoute().params
const urlProductsCategory = 'https://fakestoreapi.com/products/category/' + category
const {data:productsFromCategory} = await useFetch(urlProductsCategory, {key: category})
</script>

<style scoped>

</style>