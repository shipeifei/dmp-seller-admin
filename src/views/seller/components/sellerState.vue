<template>
    <div class="sellerState-page">
        <div class="steps-state">
            <el-steps :active="1" finish-status="success" >
                <el-step title="免费版"></el-step>
                <el-step title="标准版"></el-step>
                <el-step title="VIP版" ></el-step>
            </el-steps>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="less" scoped>
.sellerState-page {
  padding-left: 10px;
  padding-right: 10px;
  .steps-state{
      width: 80%;
      margin: 20px auto;
  }
}
</style>


