<template>
    <div class="application-page">
        <p class="application-title">
            我的机构
        </p>
        <div class="application-model">
            <p class="p1">
                <span class="application-item-icon ">
                    免费版(升级)
                </span>
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
  }
};
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


