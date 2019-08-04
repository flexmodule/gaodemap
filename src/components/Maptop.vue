<template>
  <div class="Maptop margin">
    <div class="maptop-l">
      <div class="img"><img src="@/img/logo.png" alt=""></div>
      <div class="info">阿里巴巴旗下</div>
      <div class="body">
        <ul>
          <li>产品介绍</li>
          <li>解决方案</li>
          <li>开发支持</li>
          <li>示例中心</li>
          <li>服务升级</li>
        </ul>
      </div>
    </div>
    <div class="maptop-r">
      <ul>
        <li>控制台</li>
        <li>登录</li>
        <li>注册</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Maptop',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Maptop {
    display: flex;
    justify-content: space-between;
    .maptop-l {
      display: flex;
      align-items: center;
      color: #fff;
      font: 14px/48px "";
      .img {
        width: 169px;
        height: 48px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        margin: 0 20px;
      }
      ul {
        display: flex;
        li {
          padding: 0 10px;
        }
      }
    }
    .maptop-r {
      ul {
        color: #fff;
        font: 14px/14px "";
        &::after {
          content: "";
          display: inline-block;
          height: 48px;
          width: 0;
          vertical-align: middle;
        }
        li {
          padding: 0 10px;
          display: inline-block;
          vertical-align: middle;
          &:nth-last-child(1) {
            background: #3D6EFF;
            padding: 8px 13px;
            border-radius: 4px;
          }
        }
      }
    }
  }
</style>
