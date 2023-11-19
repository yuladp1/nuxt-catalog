<template>
    <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 ">
            <div class="mx-auto max-w-2xl py-16 sm:py-2 lg:max-w-none lg:py-6">
                <h2>Categories</h2>
                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    <div class="group relative" v-for="res in result" :key="res.category">
                        <NuxtLink :to="`/categories/${category}`">
                            <div
                                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img :src="res.product.image" alt="" class="h-full w-full object-contain object-center">
                            </div>
                            <h3 class="mt-6 text-sm text-gray-500">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    {{ res.category }}
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900">{{ res.category }} - describe </p>
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories');
const { data: products } = await useFetch('https://fakestoreapi.com/products');
const result = ref([]);

categories.value.forEach(category => {
    const productsInCategory = products.value.find(product => product.category === category);
    result.value.push({ category, product: productsInCategory });
});

console.log(result.value); 
</script>

<style lang="scss" scoped></style>