<template>
  <div class="Mapbottom">
    <div class="margin">
      <div class="Mapbottom-t">
        <ul>
          <li>
            <div class="title">新手入门</div>
            <div class="list">
              <div class="data">关于我们</div>
              <div class="data">产品与服务</div>
              <div class="data">解决方案</div>
              <div class="data">开发文档</div>
            </div>
          </li>
          <li>
            <div class="title">新手入门</div>
            <div class="list">
              <div class="data">关于我们</div>
              <div class="data">产品与服务</div>
              <div class="data">解决方案</div>
              <div class="data">开发文档</div>
            </div>
          </li>
          <li>
            <div class="title">商务合作</div>
            <div class="list">
              <div class="data">关于我们</div>
              <div class="data">产品与服务</div>
              <div class="data">解决方案</div>
              <div class="data">开发文档</div>
            </div>
          </li>
          <li>
            <div class="title">常见问题</div>
            <div class="list">
              <div class="data">关于我们</div>
              <div class="data">产品与服务</div>
              <div class="data">解决方案</div>
              <div class="data">开发文档</div>
            </div>
          </li>
          <li>
            <div class="title">健康状态</div>
            <div class="list">
              <div class="list-t">
                <div class="data">服务健康状态</div>
                <div class="data">所有服务状态正常</div>
              </div>
              <div class="list-b">
                <div class="data">链路健康状态</div>
                <div class="data">正常监测点数量90个</div>
                <div class="data">异常监测点数量0个</div>
              </div>
  
            </div>
          </li>
        </ul>
      </div>
      <div class="Mapbottom-b">
        <div id="ali_footer">
          <a target="_blank" href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a> |
          <a target="_blank" href="https://www.taobao.com">淘宝网</a> |
          <a target="_blank" href="https://www.tmall.com">天猫</a> |
          <a target="_blank" href="https://ju.taobao.com">聚划算</a> |
          <a target="_blank" href="http://www.aliexpress.com">全球速卖通</a> |
          <a target="_blank" href="http://www.alibaba.com/">阿里巴巴国际交易市场</a> |
          <a target="_blank" href="http://www.1688.com">1688</a> |
          <a target="_blank" href="http://www.alimama.com">阿里妈妈</a> |
          <a target="_blank" href="http://www.fliggy.com/">飞猪</a> |
          <a target="_blank" href="http://www.aliyun.com">阿里云计算</a> |
          <a target="_blank" href="https://www.alios.cn">AliOS</a> |
          <a target="_blank" href="http://www.aliqin.cn/">阿里通信</a> |
          <a target="_blank" href="http://www.etao.com/">一淘</a> |
          <a target="_blank" href="http://www.net.cn">万网</a> |
          <a target="_blank" href="http://www.autonavi.com/">高德</a> |
          <a target="_blank" href="http://www.uc.cn/">UC</a> |
          <a target="_blank" href="http://www.umeng.com/">友盟</a> |
          <a target="_blank" href="http://www.xiami.com">虾米</a> |
          <a target="_blank" href="http://www.alibabaplanet.com/">阿里星球</a> |
          <a target="_blank" href="http://www.ddchong.com/">点点虫</a> |
          <a target="_blank" href="http://www.dingtalk.com/">钉钉</a> |
          <a target="_blank" href="https://www.alipay.com">支付宝</a> |
          <a target="_blank" href="http://www.youku.com/">优酷</a> |
          <a target="_blank" href="http://www.tudou.com/">土豆</a> |
          <a target="_blank" href="http://www.alihealth.cn/">阿里健康</a> |
          <a target="_blank" href="http://www.alibabapictures.com/simp/0-home.html">阿里影业</a> |
          <a target="_blank" href="http://www.alisports.com/cn/">阿里体育</a> |
          <a target="_blank" href="https://www.mybank.cn/">网商银行</a>
        </div>
        <!-- /#ali_footer -->
  
        <a target="_blank" href="/site-map" class="hide">网站地图</a> © 2002-2019 Amap.com 版权所有 | 京ICP证070711号<br />
        <a class="beian" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030880">京公网安备 11010502030880号</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Mapbottom',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Mapbottom {
    background: #252D45;
    .Mapbottom-t {
      padding: 40px;
      border-bottom: 1px solid #3e4561;
      ul {
        display: flex;
        justify-content: space-between;
      }
      .title {
        font: 16px/16px "";
        color: #fff;
        margin-bottom: 14px;
      }
      .list {
        .data {
          display: block;
          color: rgba(255, 255, 255, .6);
          font-size: 12px;
          transition: .2s;
          font: 12px/28px "";
          color: rgba(255, 255, 255, .6);
        }
        .list-t {
          margin-bottom: 20px;
          .data {
            &:nth-child(2) {
              color: #36ffed;
            }
          }
        }
        .list-b {
          .data {
            &:nth-child(2) {
              color: #36aded;
            }
            &:nth-child(3) {
              color: #ff4948;
            }
          }
        }
      }
    }
    .Mapbottom-b {
      padding: 20px 80px 10px;
      text-align: center;
       color: rgba(255,255,255,.38);
    font-size: 12px;
      #ali_footer {
        color: rgba(255,255,255,.38);
    max-width: 866px;
    text-align: center;
    font-size: 12px;
    padding: 0 0 10px;
    margin: 0 auto;
      }
      .hide {
        color: rgba(255,255,255,.38);
    font-size: 12px;
      }
    }
  }
</style>
