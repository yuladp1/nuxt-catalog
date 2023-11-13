<template>
    <div>
        <CookiesTab />
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">TEST CATALOG</NuxtLink>
                <SearchProducts></SearchProducts>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/" class="btn">Main page</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>

    </div>
</template>

<style scoped></style>