<template>
    <div class="seller-page">
        <div class="seller-title">机构中心</div>
        <seller-state></seller-state>
    </div>
</template>
<script>
import sellerState from './components/sellerState'
export default {
    components:{
        sellerState
    }
};
</script>
<style lang="less" scoped>
.seller-page {
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 50px;
  .seller-title {
    width: 100%;
    font-size: 18px;
    color: #878787;
    padding-left: 1em;
    height: 55px;
    background: #fff;
    line-height: 55px;
  }
}
</style>


