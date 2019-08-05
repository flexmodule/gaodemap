<template>
  <div id="app">
   	<Maptop :backmsg="backmsg" :ishome='ishome'/>
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
			backmsg:"",
			ishome:false
    }
  },
  methods:{

	},
	updated() {
		if(this.$router.history.current.path!='/') {
			console.log(99)
			this.backmsg="#1D2128"	
		} else {
			this.backmsg="transparent"	
		}
	},
  mounted(){

  }
}
</script>
<style lang="scss">
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
