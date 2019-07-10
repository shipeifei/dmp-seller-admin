<template>
    <div class="message-page">
        <div class="stat-widget-two" v-for="(item,index) in messageData" :key="index">
            <div class="widget-icon color-1" :style="{color:colorArr[index]}">
                <i :class="item.icon"></i>
            </div>
            <div class="stat-content">
                <div class="stat-text">{{item.title}}</div>
                <div class="stat-digit" :style="{color:colorArr[index]}">{{item.number}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      colorArr: ["#41c300", "#00838F", "#f47e43","#409eff","#DC143C"],
      messageData: [
        {
          title: "今天短信发送",
          number: 2,
          icon: "el-icon-chat-dot-square"
        },
        {
          title: "今日留言",
          number: 2,
          icon: "el-icon-chat-line-square"
        },
        {
          title: "今日纠错",
          number: 10,
          icon: "el-icon-edit"
        },
        {
          title: "今日浏览量",
          number: 2,
          icon: "el-icon-monitor"
        },
        {
          title: "今日收藏",
          number: 2,
          icon: "el-icon-star-on"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.message-page {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  margin-top: 20px;
  .stat-widget-two {
    flex: 1;
    background: #fff;
    margin: 0 10px;
    padding: 10px;
    border: 0px;
    border-radius: 0px;
    width: 24%;
    text-align: left;
    position: relative;
  }
  .stat-widget-two .widget-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 16px;
  }
  .stat-widget-two .stat-text {
    font-size: 14px;
    margin-bottom: 5px;
    color: #878787;
  }
  .stat-widget-two .stat-digit {
    font-size: 24px;
    font-weight: 600;
    color: #878787;
  }
}
</style>

