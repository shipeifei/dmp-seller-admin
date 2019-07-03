<template>
    <div class="home-page">
        <div class="message">最近使用: 短信,机构留言</div>
        <message></message>
        <div class="banner">
            <app-lication></app-lication>
            <info></info>
        </div>
        <chart></chart>
        <statistical></statistical>

        <!-- <recommand-seller></recommand-seller> -->
    </div>
</template>
<script>
import message from "./message";
import appLication from "./application";
import info from "./info";
import statistical from "./statistical";

import chart from "./chart/chart";
// import recommandSeller from "../../components/recommandSeller";
export default {
  components: {
    message,
    appLication,
    statistical,
    info,
    chart,

    // recommandSeller
  }
};
</script>
<style lang="less" scoped>
.message {
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  color: #333;
  padding-left: 1em;
  height: 55px;
  background: #fff;
  line-height: 55px;
  padding-bottom: 50px;
}
.banner {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  div {
    flex: 1;
    margin: 20px;
  }
}
</style>


