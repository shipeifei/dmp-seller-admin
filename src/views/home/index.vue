<template>
    <div class="home-page">
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
</style>


