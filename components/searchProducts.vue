<template>
    <div>
        <input type="search" id="search" placeholder="Search for products" @input="fetchSearchResults"
            class="block w-full px-3 py-1 bg-white bg-clip-padding border border-solid border-gray-300 rounded">
        <div v-if="hits.length" ref="target" class="flex justify-center absolute top-12 z-10">
        <ul v-if="closeSearchResults" class="bg-white border border-gray-200 w-96 text-gray-900">
            <li v-for="hit in hits" :key="hit.objectID" class="px-6 py-2 border-b border-gray-200 w-full" @click="hits = []">
                <NuxtLink :to="`/products/${hit.id}`">
                     {{ hit.title }}
                </NuxtLink>

            </li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
const target = ref(null)
let closeSearchResults = ref(true)
onClickOutside(target, () => {
  closeSearchResults.value = false
})
import algoliasearch from 'algoliasearch'
const client = algoliasearch('ALGOLIA_APPLICATION_ID', 'ALGOLIA_API_KEY')
const index = client.initIndex('test_AlgoliaProducts')
index.setSettings({
    // Select the attributes you want to search in
    searchableAttributes: [
        'title'
    ],
    // Set up some attributes to filter results on
    attributesForFaceting: [
        'category', 'price'
    ]
});

let hits = ref([]);
const fetchSearchResults = async (e) => {
    closeSearchResults.value = true
    const { result, search } = useAlgoliaSearch('test_AlgoliaProducts') 
    await search({ query: e.target.value })
    hits.value = result.value.hits
}

// Adding database to Algolia:

// fetch('https://fakestoreapi.com/products')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(products) {
//     return index.saveObjects(products, {
//       autoGenerateObjectIDIfNotExist: true
//     })
//   })
</script>

<style scoped></style>