<template>
    <div class="mx-auto max-w-2xl py-16 sm:py-2 lg:max-w-none lg:py-6">
        <h2>Products</h2>
        <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">

            <div v-for="product in products" :key="product">
                <productCard :product="product" class="hover:shadow-md" />
            </div>

        </div>
        <UPagination v-model="page" :page-count="5" :total="products.length" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')
const page = ref(1);
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

// watch(page => {
//     paginateProducts('https://fakestoreapi.com/products', currentPage, itemsPerPage)
//         .then((paginatedProducts) => {
//             console.log(paginatedProducts);
//         });
// });
</script>

<style lang="scss" scoped></style>