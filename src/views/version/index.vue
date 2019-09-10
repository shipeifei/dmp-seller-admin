<template>
    <div class="version-page">
        <!-- <div class="version-title">购买套餐</div> -->
        <div class="version-content-body">
            <div class="grid-content bg-purple">
                <p class="version" style="background:#758d94;color:#fff;">免费版</p>
                <div class="version-state">
                    <span>¥
                        <em>0</em>元</span>
                    <label>免费版</label>
                </div>
                <div class="version-content">
                    <dl>
                        <dd>
                            <i class="el-icon-check"></i>PC端、微信商城 </dd>
                        <dd>
                            <i class="el-icon-check"></i>用户给机构留言(1000)条 </dd>
                        <dd>
                            <i class="el-icon-check"></i>机构信息纠错(10)条 </dd>
                        <dd>
                            <i class="el-icon-check"></i>机构信息纠错(10)条 </dd>
                        <dd>
                            <i class="el-icon-check"></i>相关机构资讯 </dd>
                    </dl>

                </div>
            </div>
            <div class="grid-content bg-purple-light">
                <p class="version" style="background:#2facb2;color:#fff;">标准版</p>
                <div class="version-state">
                    <span>¥
                        <em>4000</em>元</span>
                    <label @click="pay('standard')">立即支付</label>
                </div>
                <div class="version-content">
                    <dl>
                        <dd>
                            <i class="el-icon-check"></i>PC端、手机端、微信商城、APP </dd>

                        <dd>
                            <i class="el-icon-check"></i>用户给机构留言(5000)条 </dd>
                        <dd>
                            <i class="el-icon-check"></i>所有机构信息纠错 </dd>

                        <dd>
                            <i class="el-icon-check"></i>用户给机构留言(1000)条 </dd>
                        <dd>
                            <i class="el-icon-check"></i>机构信息纠错(10)条 </dd>

                        <dd>
                            <i class="el-icon-check"></i>相关机构资讯 </dd>

                        <dd>
                            <i class="el-icon-check"></i>全国乐器展会信息短信/邮件通知 </dd>

                        <dd>
                            <i class="el-icon-check"></i>电商平台销售产品 </dd>
                        <dd>
                            <i class="el-icon-check"></i>收录机构搜索关键词 </dd>
                        <dd>
                            <i class="el-icon-check"></i>提高搜索排名 </dd>

                        <dd>
                            <i class="el-icon-check"></i>相关行业动态推送 </dd>
                        <dd>
                            <i class="el-icon-check"></i>产品市场分析 </dd>
                        <dd>
                            <i class="el-icon-check"></i>产品关注度分析 </dd>

                    </dl>
                </div>
            </div>

            <div class="grid-content bg-purple-consrigh">
                <p class="version" style="background:#2dbe60;color:#fff;">VIP版</p>
                <div class="version-state">
                    <span>¥
                        <em>8000</em>元</span>
                    <label @click="pay('vip')">立即支付</label>
                </div>
                <div class="version-content">
                    <dl>
                        <dd>
                            <i class="el-icon-check"></i>PC端、手机端、微信商城、APP </dd>

                        <dd>
                            <i class="el-icon-check"></i>用户给机构留言(5000)条 </dd>
                        <dd>
                            <i class="el-icon-check"></i>所有机构信息纠错 </dd>

                        <dd>
                            <i class="el-icon-check"></i>设计机构封面、logo、背景图</dd>
                        <dd>
                            <i class="el-icon-check"></i>在线宣传册 </dd>
                        <dd>
                            <i class="el-icon-check"></i>视频动画制作宣传片 </dd>
                        <dd>
                            <i class="el-icon-check"></i>机构产品推广 </dd>
                        <dd>
                            <i class="el-icon-check"></i>首页展示产品 </dd>
                        <dd>
                            <i class="el-icon-check"></i>提高广告位 </dd>

                        <dd>
                            <i class="el-icon-check"></i>用户给机构留言(1000)条 </dd>
                        <dd>
                            <i class="el-icon-check"></i>机构信息纠错(10)条 </dd>

                        <dd>
                            <i class="el-icon-check"></i>相关机构资讯 </dd>

                        <dd>
                            <i class="el-icon-check"></i>全国乐器展会信息短信/邮件通知 </dd>

                        <dd>
                            <i class="el-icon-check"></i>电商平台销售产品 </dd>
                        <dd>
                            <i class="el-icon-check"></i>收录机构搜索关键词 </dd>
                        <dd>
                            <i class="el-icon-check"></i>提高搜索排名 </dd>

                        <dd>
                            <i class="el-icon-check"></i>相关行业动态推送 </dd>
                        <dd>
                            <i class="el-icon-check"></i>产品市场分析 </dd>
                        <dd>
                            <i class="el-icon-check"></i>产品关注度分析 </dd>

                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Version',
  data() {
    return {};
  },
  methods: {
    pay(pay) {
      this.$router.push({ path: "/order/index/"+ pay});
    }
  }
};
</script>
<style lang="scss" scoped>
.el-icon-check {
  font-size: 18px;
  color: #4cae4c;
  font-weight: bold;
  margin-right: 10px;
}
.version-page {
  box-sizing: border-box;
  width: 100%;
  .version-title {
    width: 100%;
    font-size: 18px;
    color: #878787;
    padding-left: 1em;
    height: 55px;
    background: #fff;
    line-height: 55px;
  }
  .version-content-body {
    display: flex;
    box-sizing: border-box;
    padding-top: 20px;
    width: 100%;
    margin: 0 auto;
    .grid-content {
      flex: 1;
      width: 33%;
      box-sizing: border-box;
      padding: 0 0px 10px;
      margin: 0 10px;
      background: #f4f7fa;
      border-radius: 2px;
      box-shadow: 0 0 0 1px #ccc;
      .version {
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        font-size: 16px;
        color: #333;
        line-height: 40px;
        background-color: #fff;
        padding-left: 16px;
        padding-right: 16px;
        margin: 0;
      }
      .version-state {
        width: 80%;
        height: 120px;
        margin: 10px auto;
        text-align: center;
        color:#878787;
        cursor: pointer;
        span,
        label {
          display: block;
        }
        span {
          font-size: 12px;
          em {
            font-size: 28px;
            font-style: normal;
            margin: 0 4px;
            color:#000;
          }
        }
        label {
          height: 44px;
          line-height: 44px;
          width: 50%;
          margin: 30px auto;
          border-radius: 2px;
          text-align: center;
          color: #4cae4c;
          border: solid 1px #4cae4c;
          cursor: pointer;
        }
      }
      .version-content {
        width: 80%;
        margin: 0 auto;
        dl {
          padding: 10px 0px 0 10px;
          dd {
            font-size: 12px;
            padding-left: 10px;
            line-height: 26px;
            color:#878787;
          }
        }
      }
    }
  }
}
</style>


