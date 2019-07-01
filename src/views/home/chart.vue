<template>
    <div class="chart-page">

        <el-row :gutter="20">
            <el-col :span="16">
                <area-chart></area-chart>
                <statistical/>
            </el-col>
            <el-col :span="8">
                <sms-chart></sms-chart>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import areaChart from './areaChart'
import statistical from './statistical'
import smsChart from './smsChart'

export default {
    components:{
        areaChart,
        statistical,
        smsChart
    }
};
</script>
<style lang="less" scoped>
.chart-page {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
}
</style>

