<template>
  <main class="main" role="main">
    <div class="main_con">
      <section class="sec_bg">
        <ul v-for="item in mainPhotos" :key="item.id">
          <li>
            <img :src="item.src" alt="" />
          </li>
        </ul>
      </section>
      <section class="sec bg">
        <div class="sec_inner">
          <img class="logo" src="@/assets/images/logo.png" alt="" />
          <h1 class="sec_ttl">양양 해변과 어우러지는 편안한 휴식공간</h1>
          <img src="@/assets/images/service_1.jpg" />
        </div>
        <div class="sec_inner">
          <div class="main_room">
            <h1 class="sec_ttl">STAY, ADORE</h1>
            <h3 class="sec_ttl_sub">
              모든곳이 양양해변과 마주하게 되는 감성적이고 모던한 공간, <br />
              창밖으로 펼쳐지는 바다가 여러분의 마음을 적십니다.
            </h3>
            <ul>
              <li v-for="item in roooms" :key="item.id">
                <img :src="item.src" alt="" />
                <a href=""
                  ><h4>{{ item.name }}</h4></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="sec_inner">
          <h1 class="sec_ttl">SPECAL SERVICE</h1>
          <h3 class="sec_ttl_sub">아도르에서 여러분께 전하는 특별한 마음</h3>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const mainPhotos = [{ id: 1, src: require("@/assets/images/main_photo.jpeg") }];
const roooms = [
  {
    id: 1,
    name: "ROOM 101",
    src: require("@/assets/images/rooms/room_1.jpeg"),
  },
  {
    id: 2,
    name: "ROOM 201",
    src: require("@/assets/images/rooms/room_2.jpeg"),
  },
  {
    id: 3,
    name: "ROOM 301",
    src: require("@/assets/images/rooms/room_3.jpeg"),
  },
];
</script>

<style scoped></style>
