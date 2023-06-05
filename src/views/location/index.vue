<template>
  <main class="main" role="main">
    <TopBanner title="오시는 길" sub-title="Location" />
    <div class="main_con">
      <div class="main_ttl">
        <h2>찾아 오시는길 안내</h2>
        <div class="line sm"></div>
      </div>
      <div class="con">
        <div class="map"></div>
        <div>
          <ul>
            <li>
              <h3>주소</h3>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import TopBanner from "@/components/views/TopBanner.vue";
</script>

<style scoped></style>
