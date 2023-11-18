<template>
    <div>
        <ProductDetails :oneProduct='oneProduct' />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const urlOneProduct = 'https://fakestoreapi.com/products/' + id;
const { data: oneProduct } = await useFetch(urlOneProduct);
if (!oneProduct.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}
definePageMeta({
    layout: 'default'
})
</script>