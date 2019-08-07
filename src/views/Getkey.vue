<style lang="scss" scoped>
.Getkey {
  padding: 40px 0;
  display: flex;
  .Getkey-r {
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
    .stepsc {
      h3 {
        font-size: 16px;
      }
      .title {
        color: #767676;
        margin: 5px 0;
        line-height: 2;
        font-size: 14px;
        overflow-x: hidden;
        word-break: break-all;
      }
      .data {
        margin-bottom: 30px;
        img {
          max-width: 100%;
        }
      }
    }
    .info {
      color: #767676;
      overflow-x: hidden;
      word-break: break-all;
      font-size: 14px;
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
  <div class="Getkey margin">
    <div class="Getkey-l">
      <Sidebar :isgetkey="getkey" />
    </div>
    <div class="Getkey-r">
      <div class="header">您现在的位置： 开发 > Web服务 API > 开发指南 > 创建工程 > 获取Key</div>
      <div class="title">获取Key</div>
      <div class="updatetime">最后更新时间: 2017年03月22日</div>

      <div class="container">
        <div class="top">如何申请Key</div>
      </div>
      <div class="steps">
        <div class="stepsc">
          <h3>1、创建新应用</h3>
          <div class="title">进入控制台，创建一个新应用。如果您之前已经创建过应用，可直接跳过这个步骤。</div>
          <div class="body">
            <div class="data">
              <img src="//a.amap.com/lbs/static/img/2017dev_dev.png" alt />
            </div>
            <div class="data">
              <img src="//a.amap.com/lbs/static/img/2017dev_create_app.png" alt />
            </div>
          </div>
        </div>
        <div class="stepsc">
          <h3>2、添加新Key</h3>
          <div class="title">在创建的应用上点击"添加新Key"按钮，在弹出的对话框中，依次：输入应用名名称，选择绑定的服务为“web服务API”，如下图所示：</div>
          <div class="body">
            <div class="data">
              <img src="//a.amap.com/lbs/static/img/2017dev_webservice_key.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="info">在阅读完高德地图API服务条款后，勾选此选项，点击“提交”，完成 Key 的申请，此时您可以在所创建的应用下面看到刚申请的 Key 了。</div>
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
  name: "Getkey",
  components: {
    HelloWorld,
    Sidebar
  },
  data() {
    return {
      getkey: true
    };
  },
  methods: {},
  mounted() {}
};
</script>

