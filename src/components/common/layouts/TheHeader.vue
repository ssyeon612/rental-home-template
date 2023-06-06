<template>
    <header class="header">
        <div class="header_wrap" :class="{ active: !state.isScrollTop }">
            <button class="header_menu">
                <img src="@/assets/images/i_menu.png" alt="" />
            </button>
            <a class="logo" href="/"><img src="@/assets/images/logo.png" alt="" /></a>
            <ul class="header_nav">
                <li><router-link to="/">ADORE</router-link></li>
                <li><router-link to="/rooms">ROOMS</router-link></li>
                <li><router-link to="/service">SERVICE</router-link></li>
                <li><router-link to="/reservation">RESERVATION</router-link></li>
                <li><router-link to="/location">LOCATION</router-link></li>
                <li><router-link to="/customer">CUSTOMER</router-link></li>
            </ul>
        </div>
        <div :class="{ header_bg: !state.isScrollTop }"></div>
    </header>
</template>

<script lang="ts">
export default {
    name: "the-header",
};
</script>
<script setup lang="ts">
import { onMounted, reactive } from "vue";

const state = reactive({
    isScrollTop: true,
});

onMounted(() => {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 10) {
            state.isScrollTop = false;
        } else {
            state.isScrollTop = true;
        }
    });
});
</script>

<style scoped></style>
