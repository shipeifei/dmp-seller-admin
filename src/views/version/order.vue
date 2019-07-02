<template>
    <div class="order-page">
        <div class="order-title">订单支付</div>
        <div class="order-content">

            <div class="pay-title">订单支付确认</div>
            <div class="pay-panel-item">
                <div class="pay-panel-item-hd">购买的版本</div>
                <div class="pay-panel-item-bd">标准版 ￥
                    <b>9000</b> 1年
                </div>
            </div>
            <div class="pay-panel-item">
                <div class="pay-panel-item-hd">选择支付方式</div>
                <div class="pay-panel-item-bd">支付宝，微信
                </div>
            </div>
            <div class="pay-panel-item">
                <div class="pay-panel-item-hd"><el-checkbox v-model="checked">需要发票</el-checkbox></div>
                <div class="pay-panel-item-bd" v-show="checked">
                    <a>添加发票信息</a>  
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        checked:false
    };
  },
  mounted() {
    console.log(this.$route.params.item);
  }
};
</script>
<style lang="less" scoped>
.order-page {
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 50px;
  .order-title {
    width: 100%;
    font-size: 18px;
    color: #333;
    padding-left: 1em;
    height: 55px;
    background: #fff;
    line-height: 55px;
  }
  .order-content {
    margin: 0 auto;
    width: 1100px;
    background-color: #fff;
    box-sizing: border-box;
    margin-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
    border-radius: 5px;
    .pay-title {
      line-height: 130px;
      color: #333;
      font-size: 24px;
      text-align: center;
      border-bottom: 1px solid #e2e2e2;
    }
    .pay-panel-item {
      font-size: 16px;
      color: #333;
      line-height: 20px;
      border-bottom: 1px solid #e2e2e2;
      display: block;
      padding-top: 25px;
      padding-bottom: 25px;
      box-sizing: border-box;
      padding-left: 55px;
      min-height: 71px;
      .pay-panel-item-hd {
        
        float: left;
        margin-right: 40px;
        display: inline-block;
        line-height: 44px;
      }
      .pay-panel-item-bd {
        font-size: 14px;
        color: #666;
        line-height: 44px;
        b {
          color: #f47e43;
          font-weight: 300;
        //   font-size: 26px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
