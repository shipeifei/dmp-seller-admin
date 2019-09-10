<template>
    <div id="todayChart"></div>
</template>
<script>
import echarts from "echarts";
import _ from 'lodash';
export default {
  data() {
    return {
      hoursArr: [],
      hoursDataArr:[]
    };
  },
  mounted() {
    this.hoursData();
    this.getHours();
    this.getEchart();
  },
  methods: {
    getHours() {
      for (var i = 1; i <=24; i++) {
        this.hoursArr.push(i+ ":00");
      }
    },
    hoursData(){
       let hoursData=[2,'null','null','null','null',6,'null',8,'null','null',10,2,'null','null','null','null','null',7,8,9,'null',14,'null','null']
       let res= _.map(hoursData, function(item) {
          return item==='null' ? 0 : item
        });
        this.hoursDataArr=res;
    },
    getEchart() {
      let todayChart = echarts.init(document.getElementById("todayChart"));
      todayChart.setOption(this.option(this.hoursArr,this.hoursDataArr));
    },
    option(hoursArr,hoursDataArr) {
      return {
        title: {
          text: "今日浏览量",
          x: "14px",
          show:false
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   data: ["浏览量"]
        // },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: hoursArr,
          axisLabel: {
            interval: 0,
            rotate:-60
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
            data:hoursDataArr
          }
        ]
      };
    }
  },
  
};
</script>
<style lang="less" scoped>
#todayChart {
  background: #fff;
  padding: 10px 0;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
</style>

