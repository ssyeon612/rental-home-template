<template>
    <header class="header" :class="{ header_bar: !state.isScrollTop }" ref="headerRef" @click="handelScroll">
        <a href="/"><img src="@/assets/images/logo.png" alt="" /></a>
        <ul>
            <li>ADORE</li>
            <li>ROOMS</li>
            <li>SERVICE</li>
            <li>RESERVATION</li>
            <li>LOCATION</li>
            <li>CUSTOMER</li>
        </ul>
    </header>
</template>

<script lang="ts">
export default {
    name: "the-header",
    methods: {
        handelScroll(event: Event) {
            console.log("evnet :: {}", event);
        },
    },
};
</script>
<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";

const headerRef = ref(null);

const state = reactive({
    isScrollTop: true,
});

onMounted(() => {
    // let prev = window.pageYOffset;
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 10) {
            state.isScrollTop = false;
        } else {
            state.isScrollTop = true;
        }
        // const curr = window.pageYOffset;
        // if (prev > curr) {
        //     console.log("up");
        // } else {
        //     console.log("down");
        // }
        // prev = curr;
    });
});
</script>

<style scoped></style>
