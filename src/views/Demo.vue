<style lang="scss" scoped>
.Demo {
  padding-top: 123px;
  .title {
    padding: 25px 0;
    background: #fff;
    width: 100%;
    top: 48px;
    border-bottom: 1px solid #edeef0;
    background: #fff;
    position: fixed;
    z-index: 1;
    i {
      width: 22px;
      height: 22px;
      margin-left: 10px;
      outline: none;
      background: #ffffff;
      border: 1px solid #d3d6db;
      border-radius: 4px;
      position: relative;
      &:after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        top: 0;
        left: 0;
        margin: 9px 0px 0 7px;
        position: absolute;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid #8b95a5;
        transition: 0.2s;
      }
    }
    span,
    i {
      display: inline-block;
      vertical-align: middle;
    }
    span {
      font-size: 18px;
      color: #141c23;
      font-weight: normal;
    }
  }
  .nav {
    width: 150px;
    float: right;
    padding-bottom: 20px;
    margin: 20px 0 0;
    top: 400px;
    position: -webkit-sticky;
    position: sticky;
    a {
      line-height: 1;
      display: block;
      color: #586069;
      font-size: 12px;
      padding: 7px 0 7px 12px;
      border-left: 2px solid #edeef0;
    }
    a.current {
      color: #1981ff;
      border-color: #1981ff;
    }
  }
  .line {
    width: 100%;
    top: 124px;
    position: fixed;
  }
  .body {
    .h3 {
      font: 16px/70px "";
      color: #101f33;
      font-weight: normal;
    }
    .datac {
      width: 320px;
      min-height: 301px;
      transition: 0.2s;
      margin: 0 34px 20px 0;
      display: inline-block;
      vertical-align: middle;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
      }
      .datac-t {
        width: 100%;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .datac-c {
        padding: 15px 0 0 15px;
        box-sizing: border-box;
        line-height: 30px;
        font-size: 16px;
        color: #2f394d;
        font-weight: normal;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .datac-b {
        padding-left: 15px;
        color: #6c7685;
        font-size: 12px;
        margin: 7px 0 0;
      }
    }
  }
}
</style>
<template>
  <div class="Demo">
    <div class="title">
      <div class="margin">
        <span>SDK示例 / 全部示例</span>
        <i></i>
      </div>
    </div>
    <div class="line" :style="{position:oStatic}">
      <div class="margin">
        <div class="nav">
          <a :class="navindex==0?'current':''" href="#f_basic">地图基础功能</a>
          <a :class="navindex==1?'current':''" href="#f_overlay">地图覆盖物</a>
          <a :class="navindex==2?'current':''" href="#f_trace">轨迹处理</a>
          <a :class="navindex==3?'current':''" href="#f_search">搜索</a>
          <a :class="navindex==4?'current':''" href="#f_control">控件交互</a>
          <a :class="navindex==5?'current':''" href="#f_interaction">手势交互</a>
        </div>
      </div>
    </div>
    <div class="body margin">
      <div class="h3">地图基础功能</div>
      <div class="data">
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
      </div>
      <div class="h3">地图覆盖物</div>
      <div class="data">
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
      </div>
      <div class="h3">轨迹处理</div>
      <div class="data">
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
      </div>
      <div class="h3">搜索</div>
      <div class="data">
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
      </div>
      <div class="h3">控件交互</div>
      <div class="data">
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
      </div>
      <div class="h3">手势交互</div>
      <div class="data">
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
        <div class="datac">
          <div class="datac-t">
            <img src="https://a.amap.com/lbs/static/img/shili/place-choose.png" alt />
          </div>
          <div class="datac-c">地图选点</div>
          <div class="datac-b">检索屏幕中心点周边的特征POI，帮助用户快速、准确的确认自己的位置。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Demo",
  components: {
    HelloWorld
  },
  data() {
    return {
			navindex:0,
			oStatic:'static'
		};
  },
  methods: {
		onscroll() {
			let that=this
			let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrolltop>390*5) {
				this.oStatic='static'
			} else {
				this.oStatic='fixed'
			}
			for(let i=0;i<=5;i++) {
				if(scrolltop>390*i&&scrolltop<=390*(i+1)) {
					that.navindex=i;
				}
			}
		}
	},
  mounted() {
		let that=this
		this.$store.dispatch("tofix");
		window.addEventListener("scroll",that.onscroll)
  },
  destroyed() {
		let that=this
		this.$store.dispatch("toposition");
		window.removeEventListener("scroll",that.onscroll)
  }
};
</script>

