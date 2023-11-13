<template>
    <div>
        <HeroSection />
    </div>


    <div class="grid grid-cols-4 gap-5">

        <div v-for="product in products" :key="product">
            <productCard :product="product" class="hover:shadow-md" />
        </div>
    </div>
    <UPagination v-model="page" :page-count="5" :total="products.length" />
    <div class="grid grid-cols-4 gap-5 ">
        <div v-for="category in categories" :key="category">
            <NuxtLink :to="`/categories/${category}`"> <span>{{ category }} </span></NuxtLink>
        </div>
    </div>
</template>

<script setup >
import { ref, watch } from 'vue'

definePageMeta({
    layout: 'default'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')
const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')
const page = ref(1);
// const per_page_items = ref(10)
// let paginatedResults = function paginate(array, pageSize, pageNumber) {
//     return paginatedItems = array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
// }
async function paginateProducts(url, currentPage, itemsPerPage) {
    try {
        const response = await fetch(url);
        const { data: allProducts1 } = await response.json();
        let allProducts = [];
        allProducts = allProducts1
        if (!Array.isArray(allProducts)) {
            console.error('Error: Products data is not an array');
            return [];
        }

        // Calculate the start and end indices for the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Extract the products for the current page
        const paginatedProducts = productsArray.slice(startIndex, endIndex);

        return paginatedProducts;
    } catch (error) {
        console.error('Error fetching or paginating products:', error);
        return [];
    }
}

// Example usage
const currentPage = 2; // Replace with your desired page number
const itemsPerPage = 10; // Replace with your desired items per page

// paginateProducts('https://fakestoreapi.com/products', currentPage, itemsPerPage)
//     .then((paginatedProducts) => {
//         console.log(paginatedProducts);
//     });


watch(page => {
    paginateProducts('https://fakestoreapi.com/products', currentPage, itemsPerPage)
        .then((paginatedProducts) => {
            console.log(paginatedProducts);
        });
});
</script>

<style >
.router-link-active {
    color: blue;
    text-decoration: underline;
}
</style> 