<template>
    <BreadCrumbs/>
    <h2>Products from category "{{ category }}"</h2>
    <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        <div v-for="product in productsFromCategory" :key="product.id">
 <ProductCard :product="product"/>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})
const {category} = useRoute().params
const urlProductsCategory = 'https://fakestoreapi.com/products/category/' + category
const {data:productsFromCategory} = await useFetch(urlProductsCategory, {key: category})
</script>

<style scoped>

</style>