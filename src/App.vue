<template>
  <div id="app">
    <Maptop :backmsg="backmsg" :ishome="ishome" />
    <router-view />
    <Mapbottom />
  </div>
</template>
<script>
// @ is an alias to /src
import Maptop from "@/components/Maptop.vue";
import Mapbottom from "@/components/Mapbottom.vue";
export default {
  name: "App",
  components: {
    Maptop,
    Mapbottom
  },
  data() {
    return {
      backmsg: "",
      ishome: false
    };
  },
  methods: {},
  updated() {
    if (this.$router.history.current.path != "/") {
      console.log(99);
      this.backmsg = "#1D2128";
    } else {
      this.backmsg = "transparent";
		}
  },
  mounted() {
	
	}
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
ul li {
  list-style: none;
}

.swiper-pagination {
  margin-bottom: 130px;
  .swiper-pagination-bullet {
    width: 50px !important;
    height: 2px !important;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0;
  }
}
.margin {
  width: 1280px;
  margin: 0 auto;
}
.btn { 
	text-align: center;
}
a {
  color: rgba(255,255,255,.38);
    text-decoration: none;

}
</style>
