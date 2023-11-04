<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">TEST STORE</NuxtLink>
               <SearchProducts/>
               </nav>
         
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <nav class="container mx-auto p-4">
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Main page</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contacts">Contacts</NuxtLink>
                    </li>

                </ul>
            </nav>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>