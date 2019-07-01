<template>
    <div id="smsChart">
        <div class="sms-box-hd">
            短信营销
        </div>
        <div class="sms-circle">
            <el-progress type="circle" :percentage="50" color="#f47e43" ></el-progress>

        </div>
        <p class="sms-total">
            <span>成功数:50%</span>
            <span>失败数:50%</span>
        </p>
    </div>

</template>
<script>
import echarts from "echarts";
export default {
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
#smsChart {
  background: #fff;
  padding: 10px 0;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.sms-box-hd {
  display: block;
  padding-left: 25px;
  font-size: 20px;
  line-height: 70px;
  color: #333;
}
.sms-circle {
  float: left;
  margin: 20px;
}
.sms-total {
  float: left;
  margin-top: 20px;

  span {
    display: block;
    line-height: 14px;
    font-size: 14px;
    color: #999;
    margin: 20px;
  }
}
</style>


