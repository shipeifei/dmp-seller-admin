<template>
    <div id="areaChart"></div>
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
      let areaChart = echarts.init(document.getElementById("areaChart"));
      areaChart.setOption(this.option(this.monthArr));
    },
    option(monthArr) {
      return {
        title: {
          text: "邮件/短信营销",
          x:"20px"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "短信营销"]
        },
        grid: {
          left: "3%",
          right: "4%",
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
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210, 34, 21, 23, 89, 123]
          },
          {
            name: "短信营销",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310, 12, 43, 45, 78, 19]
          }
        ]
      };
    }
  }
};
</script>
<style lang="less" scoped>
#areaChart {
  background: #fff;
  padding:10px 0;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
</style>

