<template>
    <div class="info-page">
        <el-tabs v-model="activeName">
            <el-tab-pane label="公告" name="first">
                <li v-for="item in 10">{{item}} 信息</li>
            </el-tab-pane>
            <el-tab-pane label="快讯" name="second">
                <li v-for="item in 10">{{item}} 快讯</li>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
   
  }
};
</script>
<style lang="less" scoped>
.info-page {
  background: #fff;
  padding: 10px;
  li{
      font-size: 12px;
      color:#878787;
  }
}
</style>


