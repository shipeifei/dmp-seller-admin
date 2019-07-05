<template>
    <div>
        <div class="title">
            <p v-for="(item,index) in title" :key="index" @click="tab(index)" :class="{active:index==currentIndex}">
                {{item}}
            </p>
        </div>
        <div v-show="currentIndex==0" class="browseChar" id="todayChart"></div>
        <div v-show="currentIndex==1" class="browseChar">本周浏览量</div>
        <div v-show="currentIndex==2" class="browseChar">本月浏览量</div>
    </div>

</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      currentIndex: 0,
      title: ["今日浏览量", "本周浏览量", "本月浏览量"],
      monthArr: []
    };
  },
  mounted() {
    this.getMonth();
    this.getEchart();
  },
  methods: {
    tab(index) {
      this.currentIndex = index;
    },
    getMonth() {
      var data = new Date();
      var year = data.getFullYear();
      data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
      for (var i = 0; i < 6; i++) {
        data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
        var m = data.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        this.monthArr.push(data.getFullYear() + "年" + m + "月");
        this.monthArr.sort();
      }
    },
    getEchart() {
      let todayChart = echarts.init(document.getElementById("todayChart"));
      todayChart.setOption(this.option(this.monthArr));
    },
    option(monthArr) {
      return {
        title: {
          text: "浏览量",
          x: "20px"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["浏览量"]
        },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: monthArr,
          axisLabel: {
            interval: 0
            // rotate:-10
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "浏览量",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210, 34, 21, 23, 89, 123]
          }
        ]
      };
    }
  }
};
</script>
<style lang="less" scoped>
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
.browseChar,#todayChart{
  background: #fff;
  padding: 10px 0;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
</style>

