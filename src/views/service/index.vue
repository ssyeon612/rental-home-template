<template>
  <main class="main" role="main">
    <TopBanner title="서비스" sub-title="Service" />
    <div class="main_con">
      <div class="main_ttl">
        <h2>서비스 안내</h2>
        <div class="line sm"></div>
      </div>
      <div class="con">
        <ul class="service_list">
          <li>
            <img src="@/assets/images/service_1.jpg" />
            <div class="txt">
              <p class="color">01</p>
              <strong>Adore Cafe</strong>
              <div class="line sm"></div>
              <p>
                아도르펜션 1층에는 커피숍이 있습니다. <br />
                많은 이용바랍니다.
              </p>
            </div>
          </li>
          <li>
            <img src="@/assets/images/service_2.jpg" />
            <div class="txt">
              <p class="color">02</p>
              <strong>4계절 서핑지</strong>
              <div class="line sm"></div>
              <p class="sub_txt">아도르앞 남애해수욕장 바다전망</p>
              <p>
                백사장까지 6미터. 환상의 바다전망을 보유한 아도르펜션입니다.
                4계절 서핑(파도타기)이 가능한 남애해수욕장이 바로 앞에 있습니다.
                적당한 파도와 수심으로 즐거운 서핑이 가능합니다.
              </p>
            </div>
          </li>
          <li>
            <img src="@/assets/images/service_3.jpg" />
            <div class="txt">
              <p class="color">03</p>
              <strong>Live Cafe</strong>
              <div class="line sm"></div>
              <p>
                아도르에서는 동해바다를 바라보는 정취에 Live음악을 즐기실 수있는
                공간이 마련되어있습니다. 악기, 음악을 좋아하시는 분들이라면
                언제든 환영입니다.<br /><br /><span class="info_txt"
                  >노래와 연주는 개인악기 지참하실 경우 가능!! 기타는 바로
                  이용가능합니다.</span
                >
              </p>
            </div>
          </li>
          <li>
            <img src="@/assets/images/service_4.jpeg" />
            <div class="txt">
              <p class="color">04</p>
              <strong>바베큐</strong>
              <div class="line sm"></div>
              <p>
                여행의 또하나의 재미 맛있는 바베큐 파티, 아도르펜션에서는
                개별테라스 바베큐및 1층 야외바베큐장을 준비하고 있습니다.
                <br /><br /><span class="warn"
                  >바베큐장 이용은 지역여건상 동계에는 사용이 불가능하며
                  동계시즌이 지난이후에 사용가능하오니 이점 꼭 양해부탁드립니다.
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import TopBanner from "@/components/views/TopBanner.vue";
</script>

<style scoped></style>
