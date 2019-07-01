<template>
    <div class="application-page">
        <p class="application-title">
            我的机构
        </p>
        <div class="application-model">
            <p>
                <span class="application-item-icon ">
                    <i class="el-icon-s-data"></i>
                </span>
                <span class="application-item-hd">
                    10000
                </span>
                <span class="application-item-title">
                    可管理总数量
                </span>
                <span class="application-item-content">
                    企业最重要的数据，在EmailCar被完全拟人化。每条数据都代表着一个真实的用户，智能识别数据信息，让你更多了解数据的价值。
                </span>
            </p>
            <p>
                <span class="application-item-icon ">
                    <i class="el-icon-chat-dot-square"></i>
                </span>
                <span class="application-item-hd">
                    1000
                </span>
                <span class="application-item-title">
                    短信发送量
                </span>
                <span class="application-item-content">
                    通过发送短信息的形式将企业的产品、服务等信息传递给手机用户，从而达到广告的目的。
                </span>
            </p>
            <p>
                <span class="application-item-icon ">
                    <i class="el-icon-message"></i>
                </span>
                <span class="application-item-hd">
                    无限
                </span>
                <span class="application-item-title">
                    邮件发送量
                </span>
                <span class="application-item-content">
                    邮件批量发送是一款简单高效的电子邮件发送服务，它构建在可靠稳定安全系统基础之上，帮助您快速、精准地实现事务邮件、通知邮件和批量邮件的发送。
                </span>
                3
            </p>
            <p>

                开发中....
            </p>

        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.application-title {
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  color: #333;
  padding-left: 1em;
  height: 55px;
  background: #fff;
  line-height: 55px;
}
.application-model {
  display: flex;
  width: 100%;
  border-top: solid 1px #e2e2e2;
  border-bottom: solid 1px #e2e2e2;
  p {
    flex: 1;
    height: 300px;
    border-right: solid 1px #e2e2e2;
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background: #f4f7fa;
    position: relative;
    .application-item-icon {
      position: absolute;
      top: 8px;
      left: 8px;
      display: inline-block;
      width: 30px;
      height: 30px;
      font-size: 30px;
      color: #bbb;
    }
    .application-item-hd {
      line-height: 56px;
      font-size: 38px;
      color: #333;
      display: block;
      text-align: center;
    }
    .application-item-title {
      line-height: 30px;
      color: #666;
      display: block;
      text-align: center;
      font-size: 14px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      position: relative;
      &::before {
        content: "";
        width: 50px;
        height: 1px;
        background-color: #e2e2e2;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -25px;
      }
    }
    .application-item-content {
      font-size: 12px;
      color: #666;
      line-height: 20px;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      white-space: normal;
      text-overflow: -o-ellipsis-lastline;
    }
    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      top: 0px;
      right: 0px;
      border-left: 14px solid transparent;
      border-top: 14px solid #f47e43;
    }
    &:hover {
      background: #fff;
    }
  }
}
</style>


