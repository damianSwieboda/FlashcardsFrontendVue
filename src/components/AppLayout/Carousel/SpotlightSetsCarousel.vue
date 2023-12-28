<template>
    <div class="w-full">

        <swiper class="default-slider w-full"
          :slides-per-view="2.5"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="n in 7" :key="n"> {{ n }} </swiper-slide>
        </swiper>
    </div>
  </template>
  
  <style scoped>
    .default-slider .swiper-slide {
        display: flex;
        height: 300px !important;
        justify-content: center;
        align-items: center;
        color: #000;
        font-size: 24px;
        font-weight: 700;
    }
    .swiper-slide:nth-child(1n) {
        background-color: palevioletred;
    }
    .swiper-slide:nth-child(2n) {
        background-color: skyblue;
    }
    .swiper-slide:nth-child(3n) {
        background-color: peru;
    }
    .swiper-slide:nth-child(4n) {
        background-color: cadetblue;
    }
    .swiper-slide:nth-child(5n) {
        background-color: plum;
    }
    .swiper-slide:nth-child(6n) {
        background-color: goldenrod;
    }
    .swiper-slide:nth-child(7n) {
        background-color: palegreen;
    }
  </style>
  
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  // Import Swiper styles
  import "swiper/css";
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper: function () {
        console.log("onSwiper called");
      },
      onSlideChange: function () {
        console.log("Slide change");
      },
    },
  };
  </script>