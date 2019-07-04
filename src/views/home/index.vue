<template>
    <div class="home-page">
        <div class="commonly_used">最近使用:
            <a href="">机构留言</a>
            <a href="">机构纠错</a>
        </div>
        <!-- 今日信息 -->
        <div class="banner">
            <message></message>
        </div>
        <!-- 套餐信息 -->
        <div class="banner">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>标准套餐</span>
                    <span>到期天数：</span>
                    <span>购买日期：</span>
                    使用进度条

                </div>
                <div class="card-text item">
                    <li v-for="(item,index) in messageData" :key="index">
                        <p>共计{{item.total}}条</p>
                        <span>{{item.title}}:</span>
                        <span>{{item.number}}</span>
                    </li>
                </div>
            </el-card>
        </div>
        <!-- 机构信息及公共 -->
        <div class="banner">
            <app-lication></app-lication>
            <info></info>
        </div>
        <!-- 对比信息 -->
        <div class="banner">
            <browse></browse>
            <area-chart></area-chart>
        </div>
        <!-- <statistical></statistical> -->

        <!-- <recommand-seller></recommand-seller> -->
    </div>
</template>
<script>
import message from "./message";
import appLication from "./application";
import info from "./info";
import statistical from "./statistical";

import browse from "./browse/browse";
import areaChart from "./browse/areaChart";
// import recommandSeller from "../../components/recommandSeller";
export default {
  components: {
    message,
    appLication,
    // statistical,
    info,
    browse,
    areaChart

    // recommandSeller
  },
  data() {
    return {
      messageData: [
        {
          total: 5000,
          title: "短信留言通知",
          number: "2000",
          icon: "el-icon-user-solid"
        },
        {
          total: 200,
          title: "发送用户短信通知",
          number: 100,
          icon: "el-icon-chat-dot-square"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.commonly_used {
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  color: #878787;
  padding-left: 1em;
  height: 55px;
  background: #fff;
  line-height: 55px;
  padding-bottom: 50px;
  a {
    font-size: 14px;
    border: solid 1px #409eff;
    color: #878787;
    border-radius: 2px;
    padding: 0 4px;
    margin-left: 10px;
  }
}
.clearfix {
  font-size: 14px;
  color: #878787;
}
.card-text {
  color: #878787;
  display: flex;
  li {
    flex: 1;
    margin: 0 10px;
    width: 24%;
    border-right: solid 1px #ccc;
    text-align: center;
  }
}
.banner {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  div {
    flex: 1;
    margin: 10px;
  }
}
</style>


