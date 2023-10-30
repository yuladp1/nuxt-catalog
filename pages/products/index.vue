<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
           <productCard  :product="product"  />
        </div>
          </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
 const {data:products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style> 