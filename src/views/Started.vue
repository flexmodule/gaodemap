<style lang="scss" scoped>
.Started {
  padding: 20px 0;
  display: flex;
  .Started-r {
    padding: 0 30px;
    flex: 1;
    .header {
      color: #7c7e7d;
      font: 14px/14px "";
      padding: 20px 0;
      border-bottom: 1px solid #eee;
    }
    .title {
      font: 28px/28px "";
      margin: 30px 0 20px;
    }
    .updatetime {
      color: #afb1b0;
      font-size: 12px;
      font-weight: 400;
      display: block;
      margin: 17px 0 0;
    }
    .info {
      color: #767676;
      margin: 5px 0;
      overflow-x: hidden;
      word-break: break-all;
      font: 14px/80px "";
    }
    .container {
      .top {
        font-size: 18px;
        font-weight: 400;
        color: #3c3d3f;
        line-height: 1;
        margin: 0 0 20px;
        padding: 30px 0 20px;
        border: 0;
        border-bottom: 1px solid #e7e7e7;
      }

      .bottom {
        color: #767676;
        font-size: 14px;
        margin: 5px 0;
        line-height: 2;
        overflow-x: hidden;
        word-break: break-all;
      }
      .getkey {
        color: #009cf9;
      }
    }
    .solveproblem {
      padding: 20px;
      background: #fafbfc;
      border: 1px solid #f2f6fa;
      border-radius: 2px;
      margin-top: 30px;
      .h3 {
        font-size: 14px;
        color: #767676;
        display: block;
        margin-bottom: 15px;
      }
      .selectdata {
        display: flex;
        .selectdata-l,
        .selectdata-r {
          margin-right: 20px;
          i {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            display: inline-block;
            background: url(https://lbs.amap.com/web/public/dist/faces.f93864.png)
              no-repeat 0 bottom;
            background-size: auto 100px;
            background-position: 0 bottom;
            margin-right: 10px;
          }
          span {
            vertical-align: middle;
            display: inline-block;
          }
        }
        .selectdata-r {
          i {
            background-position: bottom;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="Started margin">
    <div class="Started-l">
      <Sidebar :isstarted="started" />
    </div>
    <div class="Started-r">
      <div class="header">您现在的位置： 开发 > Web服务 API > 入门指南</div>
      <div class="title">入门指南</div>
      <div class="updatetime">最后更新时间: 2018年04月12日</div>
      <div class="info">本指南是向 webAPI添加地图的快速入门指南。</div>

      <div class="container">
        <div class="top">第 1 步：申请”Web服务API”密钥（key）</div>
        <div class="bottom getkey">点我获取Key>></div>
      </div>
      <div class="container">
        <div class="top">第 2 步：拼接HTTP请求URL</div>
        <div class="bottom">第一步申请的key需作为必填参数一同发送</div>
      </div>
      <div class="container">
        <div class="top">第 3 步：接收HTTP请求返回的数据（JSON或XML格式），解析数据。</div>
        <div class="bottom">如无特殊声明，接口的输入参数和输出数据编码全部统一为UTF-8。</div>
      </div>
      <div class="solveproblem">
        <div class="h3">这篇文章是否解决了您的问题</div>
        <div class="selectdata">
          <div class="selectdata-l">
            <i></i>
            <span>已解决</span>
          </div>
          <div class="selectdata-r">
            <i></i>
            <span>未解决</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Started",
  components: {
    HelloWorld,
    Sidebar
  },
  data() {
    return {
      started: true
    };
  },
  methods: {},
  mounted() {}
};
</script>

