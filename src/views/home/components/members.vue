<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>标准套餐</span>
            <span>到期天数：</span>
            <span>购买日期：</span>
            使用进度条

        </div>
        <div class="card-text item">
            <li v-for="(item,index) in packageData" :key="index">
                <p>共计{{item.total}}条</p>
                <span>{{item.title}}:</span>
                <span>{{item.number}}</span>
            </li>
        </div>
    </el-card>
</template>
<script>
export default {
  data() {
    return {
      packageData: [
        {
          total: 5000,
          title: "短信留言通知",
          number: "2000",
          icon: "el-icon-user-solid"
        },
        {
          total: 200,
          title: "发送用户短信通知",
          number: 100,
          icon: "el-icon-chat-dot-square"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.clearfix {
  font-size: 14px;
  color: #878787;
}
.card-text {
  color: #878787;
  display: flex;
  li {
    flex: 1;
    margin: 0 10px;
    width: 24%;
    border-right: solid 1px #ccc;
    text-align: center;
  }
  li:last-child{
    border-right: none;

  }
}
</style>


