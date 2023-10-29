<template>
    <div>
        <p> Product details</p>
        <p> {{ oneProduct.title }} </p>
        <p>Product category: {{ oneProduct.category }}</p>
        <p>Product description: {{ oneProduct.description }}</p>
        <p>Product price: {{ oneProduct.price }}</p>
    </div>
</template>

<script setup>
const {id }  = useRoute().params
const urlOneProduct = 'https://fakestoreapi.com/products/' + id;
const {data: oneProduct} = await useFetch(urlOneProduct, {key:id});
definePageMeta({
    layout: 'products'
})
</script>

<style lang="scss" scoped>

</style>