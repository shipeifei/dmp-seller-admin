<template>
    <div>
        <div class="title">
            <p v-for="(item,index) in title" :key="index" @click="tab(index)" :class="{active:index==currentIndex}">
                {{item}}
            </p>
        </div>
         <browse-day v-if="currentIndex==0" ></browse-day>
         <browse-weeks v-if="currentIndex==1"></browse-weeks>
         <browse-month v-if="currentIndex==2"></browse-month>
    </div>

</template>
<script>
import echarts from "echarts";

import browseDay from "./browseDay";
import browseWeeks from "./browseWeeks";
import browseMonth from "./browseMonth";

export default {
  data() {
    return {
      currentIndex: 0,
      title: ["今日浏览量", "本周浏览量", "本月浏览量"],
      monthArr: []
    };
  },
  components: {
    browseDay,
    browseWeeks,
    browseMonth
  },
  mounted() {
  },
  methods: {
    tab(index) {
      this.currentIndex = index;
    },
  }
  
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  background: #fff;
  .active {
    color: #409eff;
    border-bottom: solid 2px #409eff;
  }
  p {
    display: inline-block;
    margin-right: 10px;
    color: #878787;
    font-size: 14px;
    margin: 0 10px;
    height: 38px;
    line-height: 38px;
    cursor: pointer;
  }
}
.browseChar,
#todayChart {
  background: #fff;
  padding: 10px 0;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
</style>

