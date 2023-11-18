<template>
  <div class="card">
<BreadCrumbs />
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:px-4">
      <div class="p-7">
        <img :src="oneProduct.image" alt="" class="mx-auto my-7 w-full">
      </div>
      <div class="p-7">
        <p> Product details</p>
        <h2 class="text-4xl my-7"> {{ oneProduct.title }} </h2>
        <p class="font-bold text-2xl my-5 ">Product category: <NuxtLink :to="`/categories/${oneProduct.category}`">
            {{ oneProduct.category }}</NuxtLink>
        </p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description: {{ oneProduct.description }}</h3>
        <p class="text-xl my-7">Product price: {{ oneProduct.price }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup >

const { oneProduct } = defineProps(['oneProduct']);


</script>

<style scoped>
img {
  max-width: 400px;
}
</style>