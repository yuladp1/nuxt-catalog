<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><NuxtLink to="/">Main page</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li> 
                    <li><NuxtLink to="/products">Products</NuxtLink></li> 
                </ul>
            </nav>
        </header>
<slot/>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>