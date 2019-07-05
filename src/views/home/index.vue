<template>
    <div class="home-page">
        <!-- 常用功能 -->
        <commonly></commonly>
        <!-- 今日数据 -->
        <div class="banner">
            <today-data></today-data>
        </div>
        <!-- 套餐信息 -->
        <div class="banner">
            <members></members>
        </div>
        <!-- 机构信息及公告 -->
        <div class="seller-info">
            <seller-info></seller-info>
            <info></info>
        </div>
        <!-- 对比信息 -->
        <div class="banner">
            <browse></browse>
            <browse-chart></browse-chart>
        </div>

    </div>
</template>
<script>
// 添加引导步骤

import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import steps from "../../utils/guide";

import commonly from "./components/commonly";
import todayData from "./components/todayData";
import members from "./components/members";
import sellerInfo from "./components/sellerInfo";
import info from "./components/info";
import browse from "./components/browse";
import browseChart from "./components/browseChart";
export default {
  components: {
    commonly,
    todayData,
    members,
    sellerInfo,
    info,
    browse,
    browseChart
  },
  data() {
    return {};
  },
  mounted() {
    this.driver = new Driver({
      className: "scoped-class", 
      animate: true, 
      opacity: 0.75, 
      padding: 10, 
      allowClose: true, 
      overlayClickNext: false, 
      doneBtnText: "完成",
      closeBtnText: "关闭", 
      nextBtnText: "下一步",
      prevBtnText: "上一步" 
    });
    this.guide();
  },
  methods: {
    //引导步骤
    guide() {
      this.driver.defineSteps(steps);
      this.driver.start();
    }
  }
};
</script>
<style lang="less" scoped>
.banner {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  div {
    flex: 1;
    margin: 10px;
  }
}
.seller-info {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  div:first-child {
    margin: 10px;
    flex: 4;
  }
  div:last-child {
    margin: 10px;
    flex: 2;
  }
}
</style>


