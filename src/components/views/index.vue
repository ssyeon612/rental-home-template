<template>
    <div class="wrap" id="wrap">
        <div class="body" @scroll="handelScroll">
            <router-view v-slot="{ Component }">
                <TheHeader />
                <transition name="fade">
                    <component :is="Component" />
                </transition>
                <TheFooter />
            </router-view>
        </div>
    </div>
</template>

<script lang="ts">
import TheHeader from "@/components/common/layouts/TheHeader.vue";
import TheFooter from "@/components/common/layouts/TheFooter.vue";
export default {
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>

<script setup lang="ts">
const handelScroll = (event: Event) => {
    console.log("event :: {}", event);
};
</script>

<style scoped></style>
