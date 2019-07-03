<template>
    <div class="order-page">
        <div class="order-title">订单支付</div>
        <div class="order-content">
            <div class="pay-title">订单支付确认</div>
            <div class="pay-year">
                <span>购买年限：</span>
                <label>
                    <el-slider v-model="year" :step="1" :max="5" :show-tooltip="false" show-stops>
                    </el-slider>
                </label>
                <p>
                    <b v-for="item in 5">{{item}}年</b>
                </p>
            </div>
            <div class="pay-panel-item">
                <div class="pay-panel-item-hd">购买的版本</div>
                <div class="pay-panel-item-bd">{{version}} ￥
                    <b>{{amount}}</b> 1年
                </div>
            </div>
            <div class="pay-panel-item">
                <div class="pay-panel-item-hd">选择支付方式</div>
                <div class="pay-panel-item-bd">支付宝，微信
                </div>
            </div>
            <div class="pay-panel-item">
                需要发票请拨打电话:111111
                <!-- <el-checkbox v-model="checked"></el-checkbox> -->
                <!-- <p class="pay-invoice" v-show="checked" @click="open">添加发票信息</p> -->
            </div>
            <div class="pay-total">
                <div class="pay-total-text">
                    <label>订单应付：</label>
                    <span>￥{{totalAmount}}</span>

                </div>
            </div>
            <div class="pay-fool">
                <el-button @click="back">返回修改</el-button>
                <el-button type="primary">立即支付</el-button>
            </div>

        </div>
        <version-dialog ref="versionDialog"></version-dialog>
    </div>
</template>
<script>
import versionDialog from "./versionDialog";
export default {
  data() {
    return {
      checked: false,
      year: 1,
      amount: '4000',
      version:'标准版'
      
    };
  },
  computed: {
    totalAmount() {
      if (this.year == 1) {
        return this.amount * this.year;
      }else if(this.year==2){
        return (this.amount * this.year)*0.98;
      }else if(this.year==3){
        return (this.amount * this.year)*0.95;
      }else if(this.year==4){
        return (this.amount * this.year)*0.90;
      }else if(this.year==5){
        return (this.amount * this.year)*0.88;
      }
    }
  },
  components: {
    versionDialog
  },
  methods: {
    open() {
      this.$refs.versionDialog.open();
    },
    back(){
        this.$router.push('/version')
    }
  },
  mounted() {
      if(this.$route.params.pay==='standard'){
          this.amount=4000;
          this.version='标准版'
      }else if(this.$route.params.pay==='vip'){
          this.amount=8000;
          this.version="VIP版"
      }
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
    .pay-year {
      span {
        font-size: 16px;
        color: #333;
        margin: 20px 0 0;
        display: block;
      }
      p {
        display: flex;
        b {
          flex: 1;
          text-align: center;
        }
      }
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
      line-height: 44px;
      .pay-invoice {
        color: #5093e1;
        text-decoration: underline;
        cursor: pointer;
        font-size: 14px;
      }
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
          font-weight: bold;
          font-size: 18px;
          margin-right: 5px;
        }
      }
    }
    .pay-total {
      display: block;
      padding-top: 45px;
      padding-bottom: 25px;
      .pay-total-text {
        font-size: 14px;
        color: #666;
        text-align: center;
        span {
          color: #f47e43;
          font-size: 30px;
        }
      }
    }
    .pay-fool {
      text-align: center;
    }
  }
}
</style>
