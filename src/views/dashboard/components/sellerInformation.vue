<template>
    <div class="information-page">
        <div class="information-model">
            <div class="info-title">工商信息</div>
            <ul class="info-content">
                <li><span>法定代表人:</span>张三</li>
                <li><span>成立日期:</span>2015-12-9</li>
                <li><span>注册资本:</span>800万人民币</li>
                <li><span>统一社会信用代码:</span>4123442453987KGA</li>
                <li><span>状态:</span>存续(在营、开业、在册)</li>
                <li><span>企业类型:</span>有限责任公司（自然人独资）</li>
                <li><span>经营范围:</span>管乐器体验、乐器销售、乐器维修保养</li>
                <li><span>地址:</span>北京市丰台区宋家庄</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.information-model {
  height: 300px;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: #fff;
  .info-title {
    width: 100%;
    height: 30px;
    font-size: 18px;
    color: #878787;
  }
  .info-content{
      li{
          line-height: 30px;
          color:#878787;
          list-style: none;
          span{
            //   font-weight: bold;
              margin-right:8px;
              display: inline-block;
              width:120px;
              text-align: right;
              color:#878787;
          }
      }
  }
}
</style>


