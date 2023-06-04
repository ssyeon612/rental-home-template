<template>
    <main class="main" role="main">
        <section class="top_sec">
            <ul v-for="item in mainPhotos" :key="item.id">
                <li><img class="top_img" src="@/assets/images/main_photo.jpeg" alt="" /></li>
            </ul>
        </section>
        <section class="main_sec">test!!</section>
    </main>
</template>

<script setup lang="ts">
const mainPhotos = [{ id: 1, src: "@/assets/images/main_photo.jpeg" }];
</script>

<style scoped></style>
