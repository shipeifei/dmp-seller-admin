<template>
    <div class="sms-page">
        <div class="sms-title">机构留言</div>
        <div class="sms-table">
            <h3>有
                <i>{{tableData.length}}</i>&nbsp;条留言</h3>
            <el-table :data="tableData" border style="width: 100%" class="table-cel">
                <el-table-column prop="id" label="序号">
                </el-table-column>
                <el-table-column label="留言内容">
                    <template slot-scope="scope">
                        {{scope.row.content}}
                    </template>
                </el-table-column>

            </el-table>
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
          content:
            "有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗有萨克斯产品吗"
        },
        {
          id: 2,
          content: "工厂在什么地方"
        }
      ]
    };
  }
};
</script>

<style lang="less" >
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
      }
    }
  }
}
</style>

