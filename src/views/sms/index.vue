<template>
    <div class="sms-page">
        <div class="sms-title">短信记录</div>
        <div class="sms-table">
            <h3>有
                <i>{{tableData.length}}</i>&nbsp;条记录 (升级VIP可查看完整手机号)
                <span @click="go">马上升级
                    <i class="el-icon-top"></i>
                </span>
            </h3>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="序号">
                </el-table-column>
                <el-table-column label="手机号">
                    <template slot-scope="scope">
                        <span>{{scope.row.tel | tel}}</span>
                    </template>
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
      tableData: [
        {
          id: 1,
          tel: "13011111111"
        },
        {
          id: 2,
          tel: "13022222222"
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
  },
  filters: {
    // 手机号脱敏
    tel(val) {
      let data = val.replace(/(\d{3})\d{4}(\d*)/, "$1****$2");
      return data;
    }
  }
};
</script>

<style lang="less" scoped>
.sms-page {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;
  .sms-title {
    width: 100%;
    font-size: 18px;
    color: #878787;
    padding-left: 1em;
    height: 55px;
    background: #fff;
    line-height: 55px;
  }
  .sms-table {
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

