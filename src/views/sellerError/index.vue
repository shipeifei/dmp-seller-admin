<template>
    <div class="error-page">
        <div class="error-title">机构纠错</div>
        <div class="error-table">
            <h3>有
                <i>{{tableData.length}}</i>&nbsp;条记录 (升级VIP可查看所有错误内容)
                <span @click="go">马上升级
                    <i class="el-icon-top"></i>
                </span>
            </h3>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="序号">
                </el-table-column>
                <el-table-column prop="content" label="纠错内容">
                </el-table-column>
                <el-table-column prop="time" label="日期">
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
                </el-pagination>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage4: 1,
      pageSize: 10,
      tableData: [
        {
          id: 1,
          content: "地址不正确",
          time:'2019-07-09'
        },
        {
          id: 2,
          content: "电话号码有错误",
          time:'2019-07-09'

        }
      ]
    };
  },
  methods: {
    go() {
      this.$router.push("/version");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scoped>
.error-page {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;
  .error-title {
    width: 100%;
    font-size: 18px;
    color: #878787;
    padding-left: 1em;
    height: 55px;
    background: #fff;
    line-height: 55px;
  }
  .error-table {
    width: 100%;
    padding: 20px;
    span {
      color: #409eff;
      cursor: pointer;
    }
    h3 {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      color: #878787;
      i {
        color: #dc0f50;
        &.el-icon-top {
          font-size: 14px;
          font-weight: bolder;
          color: #409eff;
        }
      }
    }
  }
  .block {
    margin-top: 20px;
    text-align: center;
  }
}
</style>


