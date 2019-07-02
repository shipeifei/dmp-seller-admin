<template>
    <div class="seller-page">
        <div class="seller-title">购买套餐</div>
        <div class="seller-content-body">
            <div class="grid-content bg-purple">
                <p class="version">免费版</p>
                <div class="seller-state">
                    <span>¥
                        <em>0</em>元</span>
                    <label disabled>免费版</label>
                </div>
                <div class="seller-content">
                    <dl>
                        <dt>终端</dt>
                        <dd><i class="el-icon-check"></i>PC端、手机端、微信商城 </dd>
                    </dl>
                    <dl>
                        <dt>短信通知</dt>
                        <dd><i class="el-icon-check"></i>用户给机构留言(1000)条 </dd>
                        <dd><i class="el-icon-check"></i>机构信息纠错(10)条 </dd>
                    </dl>
                </div>
            </div>
            <div class="grid-content bg-purple-light">
                <p class="version">标准版</p>
                <div class="seller-state">
                    <span>¥
                        <em>4000</em>元</span>
                    <label>立即支付</label>
                </div>
                <div class="seller-content">
                    内容
                </div>
            </div>

            <div class="grid-content bg-purple-consrigh">
                <p class="version">VIP版</p>
                <div class="seller-state">
                    <span>¥
                        <em>8000</em>元</span>
                    <label>立即支付</label>
                </div>
                <div class="seller-content">
                    内容
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.el-icon-check{
    font-size: 18px;
    color:#4cae4c;
    font-weight: bold;
    margin-right:10px;
}
.seller-page {
  box-sizing: border-box;
  width: 100%;
  .seller-title {
    width: 100%;
    font-size: 18px;
    color: #333;
    padding-left: 1em;
    height: 55px;
    background: #fff;
    line-height: 55px;
  }
  .seller-content-body {
    display: flex;
    box-sizing: border-box;
    padding-top: 20px;
    width: 80%;
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
      }
      .seller-state {
        width: 80%;
        height: 120px;
        margin: 10px auto;
        text-align: center;
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
        }
      }
      .seller-content {
        width: 80%;
        margin: 0 auto;
        dl {
          padding: 10px 0px 0 10px;
          dt {
            font-size: 14px;
            color: #333;
            margin-bottom:8px;
          }
          dd {
            font-size: 12px;
            padding-left:10px;
          }
        }
      }
    }
  }
}
</style>


