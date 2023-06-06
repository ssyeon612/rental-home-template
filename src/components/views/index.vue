<template>
    <div class="wrap" id="wrap">
        <div class="body">
            <router-view v-slot="{ Component }">
                <TheHeader />
                <transition name="fade">
                    <component :is="Component" />
                </transition>
                <!-- <TheFooter /> -->
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

<style scoped></style>
