<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>标准套餐</span>
        </div>
        <div class="card-text item">
            <p>
                <span>购买日期：{{purchaseDate | data}}</span><br/>
                <span>剩余天数：{{purchaseDate | diffdate}}</span>
            </p>
            <li v-for="(item,index) in packageData" :key="index">
                <p>共计{{item.total}}条</p>
                <span>{{item.title}}</span>
                <!-- <span>{{item.number}}</span> -->
                <el-progress :percentage="100-(item.number/item.total*100)" :format="format"></el-progress>
            </li>
        </div>
    </el-card>
</template>
<script>
export default {
  data() {
    return {
      purchaseDate: 1562575733000,
      packageData: [
        {
          total: 5000,
          title: "短信留言通知",
          number: 1000,
          icon: "el-icon-user-solid"
        },
        {
          total: 200,
          title: "发送用户短信通知",
          number: 20,
          icon: "el-icon-chat-dot-square"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    format(percentage) {
      return percentage === 0 ? "暂未使用" : `剩余${percentage}%`;
    }
  },
  filters: {
    data(val) {
      let date = new Date(val);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return year + "年" + month + "月" + day + "日";
    },
    diffdate(val) {
    // 获取当前年总共天数
      var Year = new Date().getFullYear(),
        s = 0,// 总天数
        d; //获取当前年
      for (var i = 1; i < 13; i++) {
        d = new Date(Year, i, 0); //获取某一个月的天数
        s += d.getDate();
      }
      let date = new Date();
      //转换成毫秒数
      let currentTime = parseInt(date.getTime() / 1000);
      //有效期是366天
      let allSeconds = s * 24 * 60 * 60;
      let residualTime = allSeconds - (currentTime - parseInt(val / 1000));
      let day = parseInt(residualTime / (24 * 3600)); //剩余天数
      let hour = parseInt((residualTime % (24 * 3600)) / 3600); //剩余小时
      let minute = parseInt((residualTime % 3600) / 60); //剩余分钟
      let second = parseInt(residualTime % 60); //剩余秒数
      return `${day}天`;
    }
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
    color: #878787;
  }
  li:last-child {
    border-right: none;
  }
}
</style>


