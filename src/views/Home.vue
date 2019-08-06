<style lang="scss" scoped>
.Home {
  .banner {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .swiper-container {
    width: 100%;
    height: 500px;
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
    .swiper-button-prev {
      width: 28px;
      height: 28px;
      opacity: 0.5;
      left: 20px;
    }
    .swiper-button-next {
      width: 28px;
      height: 28px;
      opacity: 0.5;
      right: 20px;
    }
		.swiper-pagination {
			.swiper-pagination-bullet {
				width: 50px!important;
				height: 10px!important;
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
            <img src="https://a.amap.com/lbs/static/img/banner/banner_mobility_ehm@2x.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_quota_system@2x.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_mobility_ehm@2x.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_quota_system@2x.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://a.amap.com/lbs/static/img/banner/banner_mobility_ehm@2x.jpg" alt />
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
import HelloWorld from "@/components/HelloWorld.vue";
import Swiper from "swiper";
import 'swiper/dist/css/swiper.css';
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    new Swiper(".swiper-container", {
      // autoplay: true,//可选选项，自动滑动
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

