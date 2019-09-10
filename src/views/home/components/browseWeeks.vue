<template>
    <div id="weeksChart"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      monthArr: []
    };
  },
  mounted() {
    this.getMonth();
    this.getEchart();
  },
  methods: {
    getMonth() {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = doHandleMonth(tMonth + 1);
      tDate = doHandleMonth(tDate);
      this.this.monthArr= tYear + "-" + tMonth + "-" + tDate;
    },
    getEchart() {
      let weeksChart = echarts.init(document.getElementById("weeksChart"));
      weeksChart.setOption(this.option(this.monthArr));
    },
    option(monthArr) {
      return {
        title: {
          text: "浏览量2",
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
#weeksChart {
  background: #fff;
  padding: 10px 0;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
</style>

