<template>
  <div class="loading">
    <img src="../assets/loading.gif" alt="" />
  </div>
</template>
<script>
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 121;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  img {
    width: 160px;
    height: 120px;
    position: fixed;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
