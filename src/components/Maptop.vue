<template>
  <div class="Maptop" :style="{background:backmsg}">
		<div class="Maptopbox">
			<div class="maptop-l">
      <div class="img" @click='tohome'><img src="@/img/logo.png" alt=""></div>
      <div class="info">阿里巴巴旗下</div>
      <div class="body">
        <ul>
          <li>
						<div class="title">产品介绍</div>
						<div class="triangle"></div>
						<div class="body">
							<div class="body-t">
								<div class="body-tl">位置产品</div>
								<div class="body-tr">特色产品</div>
							</div>
							<div class="body-b">
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
							</div>
						</div>
					</li>
          <li>
						<div class="title">解决方案</div>
						<div class="triangle"></div>
						<div class="body">
							<div class="body-t">
								<div class="body-tl">位置产品</div>
								<div class="body-tr">特色产品</div>
							</div>
							<div class="body-b">
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r">自定义地图</div>
								</div>
							</div>
						</div>
					</li>
          <li>
						<div class="title">开发支持</div>
						<div class="triangle"></div>
						<div class="body">
							<div class="body-t">
								<div class="body-tl">位置产品</div>
								<div class="body-tr">web服务</div>
							</div>
							<div class="body-b">
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r" @click='toweb'>web服务api</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r" @click='toweb'>web服务api</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r" @click='toweb'>web服务api</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r" @click='toweb'>web服务api</div>
								</div>
								<div class="data">
									<div class="data-l">地图</div>
									<div class="data-r" @click='toweb'>web服务api</div>
								</div>
							</div>
						</div>
					</li>
          <li>
						<div class="title">示例中心</div>
						<div class="triangle"></div>
						<div class="body te">
							<div class="body-b">
								<div class="data">
									<div class="data-r" @click="todemo">移动端SDK</div>
								</div>
								<div class="data">
									<div class="data-r">移动端SDK</div>
								</div>
								<div class="data">
									<div class="data-r">移动端SDK</div>
								</div>
								<div class="data">
									<div class="data-r">移动端SDK</div>
								</div>
								<div class="data">
									<div class="data-r">移动端SDK</div>
								</div>
							</div>
						</div>
					</li>
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
    
  </div>
</template>

<script>
  export default {
    name: 'Maptop',
    props: {
			backmsg:String,
			ishome:Boolean
		},
		methods: {
			todemo() {
				this.$router.push('/demo');
			},
			tohome() {
				this.$router.push('/');
			},
			toweb() {
				this.$router.push('/started');
			}
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Maptop {
		background: transparent;
		.Maptopbox {
			display: flex;
			width: 1280px;
			margin: 0 auto;
    	justify-content: space-between;
		}
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
					position: relative;
					.triangle {
						position: absolute;
						width: 0;
						height: 0;
						bottom: 0;
						display: none;
						z-index: 99;
						left: 0;
						right: 0;
						margin: auto;
						border-bottom: 6px solid #fff;
						border-left: 6px solid transparent;
						border-right: 6px solid transparent;
						border-top: 6px solid transparent;
					}
					.body {
						position: absolute;
						display: block;
						left: -115px;
						background: #fff;
						width: 300px;
						box-shadow: 0 0 8px #999;
						color: #333;
						padding:0 20px;
						font: 14px/30px "";
						height: 0;
						box-sizing: border-box;
						overflow: hidden;
						transition: all .2s;
						.body-t {
							display: flex;
							border-bottom: 1px solid #eee;
							padding: 0 0 10px 0;
							.body-tl,.body-tr {
								flex: 1;
								padding: 0 10px;
							}
						}
						.body-b {
							padding: 10px 0 0 0;
							.data {
								display: flex;
								.data-l,.data-r {
									flex: 1;
									padding: 0 10px;
								}
								.data-l:hover {
									background: #ebf0ff;
								}
								.data-r:hover {
									background: #ebf0ff;
								}
							}
						}
					}	
					.te {
						width: 150px;
						left: -40px;
						.body-b {
							padding: 0;
						}
					}
					&:hover .triangle	{
						display: block;
					}				
					&:hover .title {
						color: #3D6EFF;
					}
					&:hover .body {
						display: block;
						padding: 20px;
						height: 250px;
					}
					&:hover .te {
						display: block;
						padding: 20px;
						height: 180px
					}
					.te {
						width: 150px;
						left: -40px;
					}
					
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
					position: relative;
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
