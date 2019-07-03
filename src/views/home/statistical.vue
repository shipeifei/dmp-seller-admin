<template>
    <div class="statistical-page">
        <div class="statistical-item" @click="goSms">
            <div class="item-icon">
                <i class="el-icon-chat-dot-square item-firsts"></i>
            </div>
            <div class="item-bd-hd">
                12
            </div>
            <div class="item-bd-text">
                <span>发送短信记录</span>
            </div>
        </div>
        <div class="statistical-item">
            <div class="item-icon">
                <i class="el-icon-notebook-1 item-firsts"></i>

            </div>
            <div class="item-bd-hd">
                40
            </div>
            <div class="item-bd-text">
                <span>机构留言</span>
            </div>
        </div>
        <div class="statistical-item">
            <div class="item-icon">
                <i class="el-icon-edit item-firsts"></i>
            </div>
            <div class="item-bd-hd">
                20
            </div>
            <div class="item-bd-text">
                <span>机构纠错</span>
            </div>
        </div>
        <div class="statistical-item">
            <div class="item-icon">
                <i class="el-icon-monitor item-firsts"></i>
            </div>
            <div class="item-bd-hd">
                2
            </div>
            <div class="item-bd-text">
                <span>机构浏览量</span>
            </div>
        </div>
        <div class="statistical-item">
            <div class="item-icon">
                <i class="el-icon-monitor item-firsts"></i>
            </div>
            <div class="item-bd-hd">
                2
            </div>
            <div class="item-bd-text">
                <span>机构收藏</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        goSms(){
            this.$router.push('/sms')
        }
    }
};
</script>
<style lang="less" scoped>
.item-firsts {
  font-size: 68px;
  color: #f47e43;
}
.statistical-page .item {
  color: #5697e2;
}
.statistical-page {
  display: flex;
  flex-direction: row;
  .statistical-item {
    text-align: center;
    width: 25%;
    height: 200px;
    border-right: solid 1px #ccc;
    .item-icon {
      width: 100%;
      margin-right: 0;
      padding-bottom: 15px;
      padding-top: 20px;
    }
    .item-bd-hd {
      line-height: 20px;
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    }
    .item-bd-text {
      line-height: 14px;
      font-size: 14px;
      color: #999;
    }
  }
  .statistical-item:last-child {
    border-right: none;
  }
}
</style>


