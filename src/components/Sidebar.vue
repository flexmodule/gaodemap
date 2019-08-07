<template>
  <div class="Sidebar">
    <ul class="ul">
      <li class="li">概述</li>
      <li class="li" @click="tostarted" :class="isstarted?'active':''">入门指南</li>
      <li class="li te">
        <div class="title" @click="todevelop" :class="isgetkey?'active':''">
          开发指南
          <span :class="isactive?'active':''">
            <img src="@/img/arrow.png" alt />
          </span>
        </div>
        <div class="body" v-if="isbody">
          <div class="data">
            <div class="h3">创建工程</div>
            <ul>
              <li>
                <a href="/getkey" :class="isgetkey?'active':''">获取key</a>
              </li>
            </ul>
          </div>
          <div class="data">
            <div class="h3">api文档</div>
            <ul>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/georegeo"
                >地理/逆地理编码</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/direction"
                >路径规划</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/district"
                >行政区域查询</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/search"
                >搜索POI</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/ipconfig"
                >IP定位</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/batchrequest"
                >批量请求接口</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/staticmaps"
                >静态地图</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/convert"
                >坐标转换</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/weatherinfo"
                >天气查询</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/inputtips"
                >输入提示</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/trafficstatus"
                >交通态势</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/geofence_service"
                >地理围栏</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/api/grasproad"
                >轨迹纠偏</a>
              </li>
            </ul>
          </div>
          <div class="data">
            <div class="h3">实用工具</div>
            <ul>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/tools/weather-code"
                >天气对照表</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/tools/flowlevel"
                >流量限制说明</a>
              </li>
              <li>
                <a
                  href="https://lbs.amap.com/api/webservice/guide/api/webservice/guide/tools/info"
                >错误码说明</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="li">常见问题</li>
      <li class="li">更新日志</li>
      <li class="li">相关下载</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isstarted: Boolean,
    isgetkey: Boolean
  },
  data() {
    return {
      isbody: true,
      isactive: false
    };
  },
  methods: {
    todevelop() {
      this.isbody = !this.isbody;
      this.isactive = !this.isactive;
    },
    tostarted() {
      this.$router.push("/started");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Sidebar {
  width: 230px;
  padding: 0 0 16px 30px;
  font-size: 14px;
  a {
    color: #656363;
    &:hover {
      color: #42a5f5;
		}
		&.active {
      color: #42a5f5;
    }
  }
  .ul {
    .li {
      display: block;
      line-height: 38px;
      padding: 0 23px;
      color: #2d3132;
      text-decoration: none;
      margin: 0 0 2px;
      background: #eef3f6;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: #42a5f5;
      }
      &.active {
        color: #fff;
        background: #42a5f5;
      }
      .h3 {
        color: #bcbec1;
        font-size: 13px;
        padding: 0 23px;
      }
      .body {
        background: #f7fafc;
      }
      ul {
        padding: 0 23px 5px;
        border-bottom: 1px solid #e3eaef;
        li {
          font-size: 13px;
          color: #656363;
        }
      }
    }
    .te {
      padding: 0;
      .title {
        padding: 0 23px;
        position: relative;
        &.active {
          color: #fff;
          background: #42a5f5;
        }
        span {
          position: absolute;
          right: 15px;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 10px;
          height: 10px;
          font-size: 0;
          line-height: 0;
          transform: rotate(180deg);
          img {
            width: 100%;
            height: 100%;
          }
          &.active {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
}
</style>
