<template>
    <div class="app">
        <router-view :class="{'page':isLogin}" />
        <Loading v-show="loading"></Loading>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "./components/Loading";
export default {
  data() {
    return {
      isLogin: true
    };
  },
  components: {
    Loading
  },
  watch: {
    $route() {
      this.getPath();
    }
  },
  mounted() {
    this.getPath();
  },
  methods: {
    getPath() {
      let login = this.$route.path;
      if (login === "/" || login==='/login' || login === '/forgetPassword' || login === '/register') {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    }
  },
  computed: {
    ...mapGetters(["loading"])
  }
};
</script>

<style lang="less" scoped>
@background:rgba(238,238,238,0.2);
.app {
  height: 100%;
  width: 100%;
  background:@background;
}
.page {
  height: 100%;
  width: 100%;
  background:@background;
}
</style>
