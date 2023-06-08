<template>
  <header class="header">
    <div class="header_wrap" :class="{ active: !state.isScrollTop }">
      <div class="header_phone">+KR 010-0000-0000</div>
      <a class="logo" href="/"><img src="@/assets/images/logo.png" alt="" /></a>
      <ul class="header_gnb">
        <li>
          <router-link to="/about">ABOUT</router-link>
          <ul class="header_lnb">
            <li><router-link to="/">소개</router-link></li>
            <li><router-link to="/">주변여행지</router-link></li>
          </ul>
        </li>
        <li><router-link to="/rooms">ROOM</router-link></li>
        <li><router-link to="/service">SPECIAL</router-link></li>
        <li><router-link to="/reservation">RESERVATION</router-link></li>
        <li><router-link to="/location">LOCATION</router-link></li>
      </ul>
    </div>
    <div class="header_lnb_bg"></div>
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
