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

<style scoped>
.app {
  height: 100%;
  width: 100%;
  background: #eee;
}
.page {
  height: 100%;
  width: 100%;
  background: #eee;
}
</style>
