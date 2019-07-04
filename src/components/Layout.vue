<template>
    <div class="base-container">
        <div class="body-container">
            <NavMenu></NavMenu>
            <router-view class="content-wrapper"></router-view>
        </div>
    </div>
</template>

<script>
import NavMenu from "./NavMenu";
export default {
  name: "layout",
  components: {
    NavMenu
  },
  watch: {},
  mounted() {},
  data() {
    return {
    };
  },
  methods: {}
};
</script>
<style lang="less">
@import "../assets/less/variables.less";
.base-container {
  display: flex;
  flex-direction: column;
}
.body-container {
  flex: 1;
  width: 100%;
  display: flex;
  overflow: hidden;
  
}

.content-wrapper {
  overflow-y: auto;
  flex: 1;
  padding-bottom:50px;
//   padding: 20px;
}
</style>
