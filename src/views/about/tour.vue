<template>
  <main class="main" role="main">
    <div class="main_con">
      <section class="sec_bg">
        <ul>
          <li>
            <img src="@/assets/images/sample_01.jpg" alt="" />
          </li>
        </ul>
      </section>
      <section class="sec">
        <div class="sec_inner">
          <ul class="item_list">
            <li class="item" v-for="item in list" :key="item.id">
              <img :src="item.imageSrc" />
              <div class="txt_box">
                <h1 class="ttl">{{ item.name }}</h1>
                <p class="ttl_sub">{{ item.distance }}</p>
                <p class="ttl_sub">설명</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const list = [
  {
    id: 1,
    name: "남애해수욕장",
    distance: "펜션바로 앞",
    desc: "희고 깨끗한 백사장과 마을내 민박이 많아 가족단위 피서객이 애용하는 곳으로 남애항과 접하고 있어 싱싱한 활어회와 배낚시등을 동시에 즐길 수 있으며, 최근 신축한 민박촌이 형성되어 있어 이용에 편리하다. 펜션바로 앞이 바로 남애해수욕장이며, 남애3리, 갯마을 해수욕장이 바로 인근에 있다.",
    imageSrc: require("@/assets/images/tour/tour_01.jpg"),
  },
  {
    id: 2,
    name: "낙산해수욕장",
    distance: "약 25km",
    desc: "매년 여름 전국 각지에서 100만 이상의 인파가 다녀가는 강원도의 대표적인 해변중에 하나로 백사장 길이가 1,810m에 달하며 깨끗한 모래와 수질로 수많은 관광객들로부터 사랑받고 있다. 주변에는 빽빽이 들어선 송림이 많고 편의시설들이 많아 젊은이들이 특히 선호하는 곳으로 바나나보트, 수상오토바이등을 즐길 수 있다, 또한 천년고찰 낙산사가 인근에 있어 문화여행을 함께 즐길 수 있으며, 낙산사 의상대에서 맞이하는 일출도 잊을 수 없는 추억이 될 것이다.",
    imageSrc: require("@/assets/images/tour/tour_02.jpg"),
  },
  {
    id: 3,
    name: "설악산",
    distance: "약 40km 이내",
    desc: "설악산",
    imageSrc: require("@/assets/images/tour/tour_03.jpg"),
  },
  {
    id: 4,
    name: "오색약수",
    distance: "약 40km",
    desc: "오색약수",
    imageSrc: require("@/assets/images/tour/tour_04.jpg"),
  },
  {
    id: 5,
    name: "낙산사",
    distance: "약 25km",
    desc: "낙산사",
    imageSrc: require("@/assets/images/tour/tour_04.jpg"),
  },
  {
    id: 6,
    name: "남애항",
    distance: "차량 1분거리",
    desc: "남애항",
    imageSrc: require("@/assets/images/tour/tour_06.jpg"),
  },
];
</script>

<style scoped></style>
