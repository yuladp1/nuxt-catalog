<template>
  <div class="main-section h-screen">
    <div class=" isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl pt-8 ">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">This is the <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Nuxt3</span> test</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">This is test <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Nuxt</span>, Tailwind,
            Heroicon, REST API, NuxtUI, VueUse (clickOutside), Nuxt modules (cookie-control), Algolia. Also I used web3forms.com for contact
            form. </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/contacts"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Contact form</NuxtLink>
            <NuxtLink to="/products" class="text-sm font-semibold leading-6 text-gray-900">Products<span
                aria-hidden="true">→</span></NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
</template>
  
<script setup>

import { Bars3Icon, XMarkIcon, CubeTransparentIcon } from '@heroicons/vue/24/solid'
const navigation = ref([
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'Contacts', href: '/contacts' },
])

const mobileMenuOpen = ref(false)
</script>

<style scoped></style>