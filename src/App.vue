<template>
  <div id="app">
    <div class="navtop"><Maptop/></div>
    
    <router-view/>
    <Mapbottom/>
  </div>
</template>
<script>
// @ is an alias to /src
import Maptop from '@/components/Maptop.vue'
import Mapbottom from '@/components/Mapbottom.vue'
export default {
  name: 'App',
  components: {
    Maptop,
    Mapbottom
  },
  data () {
    return {
    	
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>
<style lang="scss">
.navtop {
  background: #1D2128;
}
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
.margin {
  padding: 0 30px;
}
</style>
