<style lang="scss" scoped>
  .Home {
    .swiper-container {
      width: 100%;
      height: 600px;
      margin: 0 auto;
      .swiper-wrapper {
        width: 100%;
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="Home">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_mobility_ehm@2x.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_quota_system@2x.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_mobility_ehm@2x.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_quota_system@2x.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_mobility_ehm@2x.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
  
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Swiper from 'swiper';
  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    data() {
      return {
  
      }
    },
    methods: {
  
    },
    mounted() {
      new Swiper('.swiper-container', {
        // autoplay: true,//可选选项，自动滑动
        loop: true,

        pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
        navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      })
    }
  }
</script>

