<template>
  <header
    class="header"
    :class="{ active: !state.isScrollTop }"
    ref="headerRef"
  >
    <button class="menu">
      <img src="@/assets/images/i_menu.png" alt="" />
    </button>
    <a class="logo" href="/"><img src="@/assets/images/logo.png" alt="" /></a>
    <ul>
      <li><router-link tag="li" to="/">ADORE</router-link></li>
      <li><router-link tag="li" to="/rooms">ROOMS</router-link></li>
      <li><router-link tag="li" to="/service">SERVICE</router-link></li>
      <li><router-link tag="li" to="/reservation">RESERVATION</router-link></li>
      <li><router-link tag="li" to="/location">LOCATION</router-link></li>
      <li><router-link tag="li" to="/customer">CUSTOMER</router-link></li>
    </ul>
  </header>
</template>

<script lang="ts">
export default {
  name: "the-header",
};
</script>
<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const headerRef = ref(null);
const route = useRoute();

const state = reactive({
  isScrollTop: true,
});

onMounted(() => {
  // if (route.path === "/") {
  //   headerRef.value.style.position = "absolute";
  // }
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
