<template>
    <div class="leave-page">
        <div class="leave-title">机构留言</div>
        <div class="leave-table">
            <h3>有
                <i>{{tableData.length}}</i>&nbsp;条留言 
            </h3>
            <el-table :data="tableData" border style="width: 100%" class="table-cel">
                <el-table-column prop="name" label="留言姓名">
                </el-table-column>
                <el-table-column prop="content" label="留言内容">
                </el-table-column>
                <el-table-column prop="time" label="留言手机号">
                </el-table-column>
                <el-table-column prop="email" label="留言邮箱">
                </el-table-column>
                <el-table-column prop="time" label="留言日期">
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
          name: "张三",
          content: "留言内容",
          email:"",
          time: "2019-07-09"
        },
        {
          id: 2,
          name: "李四",
          content: "工厂在什么地方",
          email:"",
          time: "2019-07-09"
        },
        {
          id: 3,
          name: "张三",
          content: "留言内容",
          email:"",
          time: "2019-07-09"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="less" >
.leave-page {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;

  .leave-title {
    width: 100%;
    font-size: 18px;
    color: #878787;
    padding-left: 1em;
    height: 55px;
    background: #fff;
    line-height: 55px;
  }
  .leave-table {
    width: 100%;
    padding: 20px;
    .el-table .cell {
      font-size: 12px;
      color: #878787;
    }
    a {
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
      span {
        color: #409eff;
        cursor: pointer;
      }
    }
  }
  .block {
    margin-top: 20px;
    text-align: center;
  }
}
</style>

