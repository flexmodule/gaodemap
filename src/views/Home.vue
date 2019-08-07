<style lang="scss" scoped>
.Home {
  // padding-top: 688px;
  .banner {
    width: 100%;
    height: 688px;
    margin-top: -48px;
    position: relative;
  }
  .swiper-container {
    width: 100%;
    height: 688px;
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
  }
  .news {
    background: rgba(255, 255, 255, 0.1);
    position: absolute;
    bottom: 0;
    height: 110px;
    left: 0;
    width: 100%;
    z-index: 99;
  }
  .newsbox {
    padding: 0 30px;
    display: flex;
    .data {
      flex: 1;
      height: 110px;
      box-sizing: border-box;
      padding: 20px 0 0 20px;
      color: #fff;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      .data-t {
        font: 16px/22px "";
        color: rgba(255, 255, 255, 0.85);
      }
      .data-b {
        font: 14px/20px "";
        margin-top: 8px;
        color: rgba(255, 255, 255, 0.6);
      }
      &:nth-last-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.1);
      }
      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }
  .richpro {
    .title {
      padding: 60px 0 40px;
      text-align: center;
      font: 28px/28px "";
    }
    .nav {
      display: flex;
      justify-content: space-between;
      position: relative;
      .data {
        text-align: center;
        height: 100px;
        width: 100px;
        position: relative;

        .data-t {
          background: url(//lbs.amap.com/web/public/dist/images/homepage/our_pro_2x.048a42.png)
            no-repeat;
          width: 56px;
          height: 52px;
          margin: 0 auto;
          overflow: hidden;
          background-size: 200% 800%;
        }
        &:nth-child(1) {
          .data-t {
            background-position: 0 0;
          }
        }
        &:nth-child(2) {
          .data-t {
            background-position: 0 -52px;
          }
        }
        &:nth-child(3) {
          .data-t {
            background-position: 0 -104px;
          }
        }
        &:nth-child(4) {
          .data-t {
            background-position: 0 -156px;
          }
        }
        &:nth-child(5) {
          .data-t {
            background-position: 0 -208px;
          }
        }
        &:nth-child(6) {
          .data-t {
            background-position: 0 -260px;
          }
        }
        &:nth-child(7) {
          .data-t {
            background-position: 0 -312px;
          }
        }
        &:nth-child(8) {
          .data-t {
            background-position: 0 -364px;
          }
        }
        &:hover {
          .data-b {
            color: #3d6eff;
          }
          .data-t {
            background-position-x: -52px;
          }
        }
      }
      .swiperblock {
        position: absolute;
        width: 0;
        height: 0;
        bottom: 0;
        left: 42px;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #28314a;
        transition: all 0.2s;
      }
    }
  }
  .navbody {
    background: linear-gradient(to left bottom, #28314a, #191e2e);
    height: 560px;
    overflow: hidden;
    .margin {
      padding: 60px 0;
      .data {
        display: flex;
        justify-content: space-between;
        color: #fff;
        transition: all 0.5s;
        .data-l {
          padding: 80px 0 0 50px;
          .title {
            font: 28px/40px "";
            margin-bottom: 40px;
          }
          .txtbody {
            padding: 0 30px;
            border-left: 2px solid #000;
            .txt {
              font: 16px/16px "";
              margin-bottom: 24px;
              position: relative;
              &:before {
                content: "";
                position: absolute;
                background: #3d6eff;
                width: 7px;
                height: 7px;
                border-radius: 50%;
                left: -33.5px;
                top: 0;
                bottom: 0;
                margin: auto;
              }
            }
          }
          .btn {
            width: 100px;
            height: 32px;
            border: 1px solid #fff;
            border-radius: 20px;
            margin-top: 40px;
            text-align: center;
            font: 12px/32px "";
          }
        }
        .data-r {
          width: 860px;
          height: 400px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .fade-enter-active {
    transform: translateY(40px);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .solveWays {
    padding: 80px 0;
    box-sizing: border-box;
    overflow: hidden;
    background: url("https://lbs.amap.com/web/public/dist/images/homepage/industry/industry_travel_img_01_2x.jpg")
      center bottom / cover no-repeat;
    .margin {
      display: flex;
      padding: 0 30px;
      height: 520px;
      box-sizing: border-box;
    }
    .solveWays-l {
      border-right: 1px solid #999;
      height: 505px;
      .data {
        width: 143px;
        padding-left: 36px;
        box-sizing: border-box;
        font: 16px/30px "";
        margin-bottom: 26px;
      }
      .active {
        color: #3d6eff;
        background: linear-gradient(to right, rgba(238, 238, 238, 0), #c5d1ed);
        border-right: 2px solid #3d6eff;
      }
    }
    .solveWays-r {
      padding-left: 100px;
      display: flex;
      .title {
        font: 32px/95px "";
      }
      .block {
        width: 40px;
        height: 3px;
        background: #2c2f43;
      }
      .advans {
        .h3 {
          font: 22px/28px "";
          color: #3d6eff;
          margin-top: 52px;
        }
        ul {
          margin: 16px 0 44px;
          width: 354px;
          height: 82px;
          li {
            padding: 0 0 0 16px;
            box-sizing: border-box;
            position: relative;
            width: 177px;
            height: 41px;
            color: rgba(0, 0, 0, 0.85);
            font: 18px/41px "";
            display: inline-block;
            &:before {
              content: "";
              position: absolute;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #68696c;
              left: 0;
              top: 50%;
            }
          }
        }
      }
      .btn {
        width: 100px;
        height: 32px;
        border-radius: 20px;
        border: 1px solid #3d6eff;
        color: #3d6eff;
        text-align: center;
        font: 14px/32px "";
        &:hover {
          color: #fff;
          background: #3d6eff;
        }
      }
      .travel_plan_dash {
        margin: 46px 0 30px;
        height: 1px;
        width: 612px;
        background: url(//lbs.amap.com/web/public/dist/images/homepage/dash.c16891.png)
          no-repeat;
        background-size: 100%;
      }
      .solveWays-rb {
        width: 700px;
        height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .solve-enter-active {
      transition: all 1s;
    }
    .solve-enter, .solve-leave-to
	/* .solve-leave-active for below version 2.1.8 */ {
      opacity: 0;
    }
  }
  .greatdata {
    background: url(//lbs.amap.com/web/public/dist/images/homepage/industry_advantage_back_2x.d00e76.jpg)
      center bottom no-repeat;
    background-size: cover;
    padding: 80px;
    .title {
      text-align: center;
      font: 28px/28px "";
      color: #fff;
    }
    ul {
      display: flex;
      justify-content: space-around;
      li {
        width: 160px;
        height: 217px;
        line-height: 28px;
        color: #7c7e7d;
        font-size: 16px;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 77px 50px 32px 0;
        vertical-align: top;
        font-weight: 200;
        text-align: center;
      }
      .li-t {
        width: 100px;
        height: 80px;
        display: block;
        margin: 0 auto;
        text-indent: -99999px;
        background: url(//lbs.amap.com/web/public/dist/images/homepage/industry_advantage_icon_2x.2d29b3.png)
          center 0 no-repeat;
        background-size: 50% 500%;
      }
      .li-c {
        font: 42px/42px "";
        color: #fff;
        margin: 20px 0;
      }
      .li-b {
        font: 14px/24px "";
        color: #a1a3aa;
      }
    }
  }
  .ensure {
    background: linear-gradient(to right, #dee6f2, #f1f5ff);
    padding: 80px 0 60px;
    .title {
      font: 28px/28px "";
      color: #1e2437;
      text-align: center;
    }
    ul {
      display: flex;
      margin-top: 80px;
      justify-content: space-around;
      li {
        width: 227px;
        text-align: center;
        height: 276px;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        vertical-align: top;
      }
      .li-t {
        width: 136px;
        height: 130px;
        display: block;
        margin: 0 auto -6px;
        text-indent: -99999px;
        background: url(//lbs.amap.com/web/public/dist/images/homepage/business_development_icon_2x.218d08.png)
          center 0 no-repeat;
        background-size: 100% 300%;
      }
      .li-c {
        font: 22px/58px "";
        color: #222324;
      }
      .li-b {
        font: 14px/24px "";
        color: #222324;
      }
    }
  }
  .shadow {
    width: 100%;
    height: 23px;
    background-image: linear-gradient(to top, rgba(239, 242, 250, 0), #d3deed);
  }
  .service {
    background: linear-gradient(to right, #dee6f2, #f1f5ff);
    margin-top: -13px;
    padding: 80px 0 60px;
    .title {
      font: 24px/33px "";
      color: #1e2437;
      margin: 0 0 49px;
      text-align: center;
    }
    .mechan {
      width: 949px;
      height: 40px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .document {
    background: linear-gradient(to right, #28314a, #191e2e);
    padding: 80px 0 20px;
    box-sizing: border-box;
    .title {
      text-align: center;
      font: 28px/28px "";
      color: #dddee2;
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
      li {
        background: linear-gradient(to top right, #bfcbde, #f6f9ff);
        width: 207px;
        height: 360px;
        display: inline-block;
        padding: 28px 0 0 19px;
        box-sizing: border-box;
				&:hover {
					background: #fff;
				}
        .li-t {
          font-size: 18px;
          color: #465073;
          line-height: 25px;
          height: 25px;
          margin: 10px 0 0 10px;
        }
        .li-c {
          width: 14px;
          height: 2px;
          background: #465073;
          margin: 11px 0 0 10px;
          transition: all 0.25s ease-in;
        }
        .li-b {
					margin: 30px 0 0 10px;
          .data {
            width: 140px;
            height: 27px;
            line-height: 27px;
            font-size: 12px;
						&:hover {
							color: #3d6eff;
						}
          }
        }
      }
    }
  }
  .develop {
    height: 600px;
    background: url(//lbs.amap.com/web/public/dist/images/homepage/quick_build_back_2x.b3a51c.jpg) center bottom no-repeat;
    background-size: cover;
    padding: 80px 0;
    box-sizing: border-box;
    .title {
      text-align: center;
      font: 28px/28px "";
      color: #232325;
      margin-bottom: 80px;
      span {
        &:nth-child(2) {
          color: #3d6eff;
        }
      }
    }
    ul {
      display: flex;
      justify-content: space-around;
      li {
        text-align: center;
        .li-t {
          width: 100px;
    height: 100px;
    font-size: 36px;
    font-family: PingFangSC-Semibold;
    line-height: 100px;
    color: #fff;
    text-align: center;
    display: block;
    margin: 0 auto 33px;
    background: url(//lbs.amap.com/web/public/dist/images/homepage/square_2x.c6cc54.png) center 0 no-repeat;
    background-size: auto 100%;

        }
      }
      .te {
    height: 2px;
    width: 150px;
    margin: 48px 0 0;
    background: linear-gradient(to right,#e0e6f2,#262e46);
      }
    }
    .btn {
      color: #fff;
    width: 250px;
    height: 50px;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    font: 18px/50px "";
        background: #3D6EFF;
    margin: 80px auto;
    border-radius: 25px;
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
      <div class="news">
        <div class="margin">
          <div class="newsbox">
            <div class="data">
              <div class="data-t">关于2019年4月7日GPS周数翻转的情况说明</div>
              <div class="data-b">Android 定位SDK用户所受影响和解决方案</div>
            </div>
            <div class="data">
              <div class="data-t">关于2019年4月7日GPS周数翻转的情况说明</div>
              <div class="data-b">Android 定位SDK用户所受影响和解决方案</div>
            </div>
            <div class="data">
              <div class="data-t">关于2019年4月7日GPS周数翻转的情况说明</div>
              <div class="data-b">Android 定位SDK用户所受影响和解决方案</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="richpro">
      <div class="title margin">丰富的地图产品与服务</div>
      <div class="nav margin">
        <div class="data" v-for="item,index in navList" @mouseover="addclass(index)">
          <div class="data-t"></div>
          <div class="data-b">{{item.key}}</div>
        </div>
        <div class="swiperblock" :style="{left:42+navindex*169+'px'}"></div>
      </div>
    </div>
    <div class="navbody">
      <div class="margin">
        <transition-group name="fade">
          <div
            class="data"
            :class="navindex==index?'active':''"
            v-for="item,index in navbodylist"
            :key="item.key+index"
            v-if="navindex==index"
          >
            <div class="data-l">
              <div class="title">{{item.key}}</div>
              <div class="txtbody">
                <div class="txt" v-for="items,indexs in item.value">{{items}}</div>
              </div>
              <div class="btn">了解详情</div>
            </div>
            <div class="data-r">
              <img
                src="https://lbs.amap.com/web/public/dist/pages/home/bodymovin/ani_0/images/img_6.png"
                alt
              />
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="solveWays">
      <div class="margin">
        <div class="solveWays-l">
          <div
            class="data"
            :class="wayindex==index?'active':''"
            v-for="item,index in waylist"
            @mouseenter="switchways(index)"
          >{{item.key}}</div>
        </div>
        <div class="solveWays-r">
          <transition-group name="solve">
            <div
              class="solveWays-box"
              v-for="item,index in waylist"
              v-if="wayindex==index"
              :key="item.key+index"
            >
              <div class="title">{{item.key}}解决方案</div>
              <div class="block"></div>
              <div class="advans">
                <div class="h3">一站式解决行业痛点</div>
                <ul>
                  <li>优化服务体验</li>
                  <li>提升运营效率</li>
                  <li>赋能业务增长</li>
                </ul>
              </div>
              <div class="btn">了解详情</div>
              <div class="travel_plan_dash"></div>
              <div class="solveWays-rb">
                <img
                  src="https://lbs.amap.com/web/public/dist/images/homepage/travel_logo/travel_plan_user_01_2x.png"
                  alt
                />
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <div class="greatdata">
      <div class="margin">
        <div class="title">海量数据，铸就强大行业优势</div>
        <ul>
          <li>
            <div class="li-t"></div>
            <div class="li-c">1000亿</div>
            <div class="li-b">日均处理近1000亿次的定位及路线规划请求</div>
          </li>
          <li>
            <div class="li-t"></div>
            <div class="li-c">1000亿</div>
            <div class="li-b">日均处理近1000亿次的定位及路线规划请求</div>
          </li>
          <li>
            <div class="li-t"></div>
            <div class="li-c">1000亿</div>
            <div class="li-b">日均处理近1000亿次的定位及路线规划请求</div>
          </li>
          <li>
            <div class="li-t"></div>
            <div class="li-c">1000亿</div>
            <div class="li-b">日均处理近1000亿次的定位及路线规划请求</div>
          </li>
          <li>
            <div class="li-t"></div>
            <div class="li-c">1000亿</div>
            <div class="li-b">日均处理近1000亿次的定位及路线规划请求</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="ensure">
      <div class="margin">
        <div class="title">安全稳定，保障您的业务发展</div>
        <ul>
          <li>
            <div class="li-t"></div>
            <div class="li-c">稳定的服务可用性</div>
            <div class="li-b">超高的服务可用性，持续稳定支持您的业务发展</div>
          </li>
          <li>
            <div class="li-t"></div>
            <div class="li-c">稳定的服务可用性</div>
            <div class="li-b">超高的服务可用性，持续稳定支持您的业务发展</div>
          </li>
          <li>
            <div class="li-t"></div>
            <div class="li-c">稳定的服务可用性</div>
            <div class="li-b">超高的服务可用性，持续稳定支持您的业务发展</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shadow"></div>
    <div class="service">
      <div class="margin">
        <div class="title">携手共赢，与合作伙伴共建专业服务环境</div>
        <div class="mechan">
          <img src="https://lbs.amap.com/web/public/dist/images/homepage/partner.png" alt />
        </div>
      </div>
    </div>
    <div class="document">
      <div class="margin">
        <div class="title">携手共赢，与合作伙伴共建专业服务环境</div>
        <ul>
          <li v-for="item,index in serverlist" @mouseenter="enterservice(index)" @mouseleave="leaveservice(index)">
            <div class="li-t">Android平台</div>
            <div class="li-c" :style="{'width':(serviceindex==index?servicelength:14)+'px'}"></div>
            <div class="li-b">
              <div class="data">Android 地图SDK</div>
              <div class="data">Android 地图SDK</div>
              <div class="data">Android 地图SDK</div>
              <div class="data">Android 地图SDK</div>
              <div class="data">Android 地图SDK</div>
              <div class="data">Android 地图SDK</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="develop">
      <div class="margin">
        <div class="title">
          <span>注册开发者，立即领取价值1500元 </span>
          <span>新用户福利</span>
        </div>
        <ul>
          <li>
            <div class="li-t">1</div>
            <div class="li-b">注册账号</div>
          </li>
          <li class="te"></li>
          <li>
            <div class="li-t">2</div>
            <div class="li-b">注册账号</div>
          </li>
          <li class="te"></li>
          <li>
            <div class="li-t">3</div>
            <div class="li-b">注册账号</div>
          </li>
          <li class="te"></li>
          <li>
            <div class="li-t">4</div>
            <div class="li-b">注册账号</div>
          </li>
        </ul>
        <div class="btn">立即注册</div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
			serviceindex:6,
			servicelength:50,
			serverlist:[1,2,3,4,5],
      wayindex: 0,
      waylist: [
        { key: "出行" },
        { key: "货运" },
        { key: "海外" },
        { key: "游戏" },
        { key: "电商" },
        { key: "o2o" },
        { key: "社交" },
        { key: "运动" },
        { key: "智能硬件" }
      ],
      navindex: 0,
      navbodylist: [
        {
          key: "地图",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        },
        {
          key: "定位",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        },
        {
          key: "导航",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        },
        {
          key: "路线规划",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        },
        {
          key: "搜索",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        },
        {
          key: "猎鹰",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        },
        {
          key: "自定义地图",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        },
        {
          key: "地图",
          value: ["地图显示", "地图绘制", "自定义地图", "出行路径规划"]
        }
      ],
      navList: [
        { key: "地图" },
        { key: "定位" },
        { key: "导航" },
        { key: "路线规划" },
        { key: "搜索" },
        { key: "猎鹰" },
        { key: "自定义地图" },
        { key: "数据可视化" }
      ]
    };
  },
  methods: {
		enterservice(index) {
			this.serviceindex=index
		},
		leaveservice() {
			this.serviceindex=6;
		},
    switchways(index) {
      this.wayindex = index;
    },
    addclass(index) {
      this.navindex = index;
    }
  },
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

