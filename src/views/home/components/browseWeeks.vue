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

