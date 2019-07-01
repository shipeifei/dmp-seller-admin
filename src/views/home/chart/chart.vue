<template>
    <div class="chart-page">

        <el-row :gutter="20">
            <el-col :span="16">
                <area-chart></area-chart>
            </el-col>
            <el-col :span="8">
            </el-col>
        </el-row>
    </div>
</template>
<script>
import areaChart from './areaChart'
export default {
    components:{
        areaChart,
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

