<template>
    <div>
        <ul class="flex gap-5 items-center ">
  <li v-for="crumb in crumbs" :key="crumb" class="flex content-center items-center">
    <NuxtLink :to="crumb.path" class="p-3"> 
    {{ crumb.name }}
   
     </NuxtLink>
      <ChevronRightIcon class="h-6 w-5" />
    </li>
 </ul>
    </div>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid';
const route = useRoute()
const fullPath = route.fullPath;
const params = fullPath.substring(1).split('/');
const crumbs = reactive([]);
let path = '';
params.forEach((param, index) => {
  path = `${path}/${param}`;
crumbs.push({'path':path, 'name':param})
 });
</script>

<style lang="scss" scoped>

</style>