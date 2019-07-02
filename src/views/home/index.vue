<template>
    <div class="home-page">
        <div class="message">消息通知</div>
        <app-lication></app-lication>
        <chart></chart>
    </div>
</template>
<script>
import appLication from "./application";
import chart from "./chart/chart";
export default {
  components: {
    appLication,
    chart
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
}
</style>


