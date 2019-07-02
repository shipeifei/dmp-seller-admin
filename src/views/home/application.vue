<template>
    <div class="application-page">
        <div class="application-model">
            <p class="p1">
                <!-- <span class="application-item-icon ">
                    免费版(升级)
                </span> -->
                <img src="../../assets/home_bg1.jpg" alt="" class="seller-img" />
                <span class="seller-name">
                    <b>机构名称</b>
                    <div class="box-text">账户版本:免费版
                        <el-tooltip class="item" effect="dark" content="升级到VIP" placement="top" >
                            <i class="el-icon-top"  @click="seller"></i>
                        </el-tooltip>
                    </div>
                    <div class="box-text">到期时间:无限</div>
                </span>
                <label class="seller-info" > 简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</label>
            </p>
            <p class="p2">
                <statistical></statistical>
            </p>
        </div>
    </div>
</template>
<script>
import statistical from "./statistical";
export default {
  components: {
    statistical
  },
  methods:{
      seller(){
          this.$router.push('/seller')
      }
  }
};
</script>
<style lang="less" scoped>
.el-icon-top {
  font-size: 18px;
  font-weight: bolder;
  color: #f47e43;
  cursor: pointer;
}
.application-model {
  display: flex;
  width: 100%;
  border-top: solid 1px #e2e2e2;
  border-bottom: solid 1px #e2e2e2;
  .p1 {
    flex: 1;
  }
  .p2 {
    flex: 3;
  }
  p {
    height: 300px;
    border-right: solid 1px #e2e2e2;
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background: #f4f7fa;
    position: relative;
    img.seller-img {
      width: 120px;
      height: 120px;
      overflow: hidden;
      float: left;
    }
    span.seller-name {
      font-size: 16px;
      color: #666;
      float: left;
      margin-left: 10px;
    }
    .box-text {
      line-height: 25px;
      font-size: 14px;
      color: #666;
      display: block;
    }
    label.seller-info {
      display: block;
      width: 100%;
      overflow: hidden;
      font-size: 12px;
      color: #666;
      margin-top: 10px;
      float: left;
    }
    .application-item-icon {
      position: absolute;
      top: 8px;
      left: 8px;
      display: inline-block;
      width: 130px;
      height: 30px;
      font-size: 12px;
      color: #000;
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


