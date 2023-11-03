<template>
    <div>
        <input type="search" id="search" placeholder="Search for products" @input="fetchSearchResults" class="block w-full px-3 py-1 bg-white bg-clip-padding border border-solid border-gray-300 rounded">
<div v-if="hits.length" class="flex justify-center absolute top-10 z-10"></div>
<ul class="bg-white border border-gray-200 w-96 text-gray-900">
    <li v-for="hit in hits" :key="hit.objectID" class="px-6 py-2 border-b border-gray-200 w-full" @click="hits=[]">
       <NuxtLink :to="`/products/${hit.id}`" >
        {{ hit.objectID }}  {{ hit.title }} {{ hit.description }}
       </NuxtLink>
       
        </li>
</ul>
    </div>
</template>

<script setup>
import algoliasearch from 'algoliasearch'
const client = algoliasearch('IUVNKR0IHG', 'ac7f57b7024e53f2ccc00d36463382ef')
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
const fetchSearchResults = async(e)=> {
   const {result, search} = useAlgoliaSearch('test_AlgoliaProducts') // hits = []
    await search({ query: e.target.value})
    hits.value = result.value.hits
    console.log('this.hits.value')
}
</script>

<style scoped>

</style>