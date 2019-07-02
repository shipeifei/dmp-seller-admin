<template>
    <div class="nav-menu-page">
        <router-link v-for="(item,index) in navMenus" :key="item.name" :to="item.path" tag="li">
            <i :class="item.icon" />
            <span>{{ item.name }}</span>
        </router-link>
    </div>
</template>
<script>
import { sessionStorageApi, localStorageApi } from "@/utils/storageApi";
export default {
  data() {
    return {
      currentIndex: 1,
      navMenus: [
        {
          icon: "el-icon-s-custom",
          name: "机构中心",
          path: "/seller"
        },
        {
          icon: "el-icon-s-home",
          name: "首页",
          path: "/home"
        },
        {
          icon: "el-icon-chat-dot-square",
          name: "短信",
          path: "duanx"
        },
        {
          icon: "el-icon-chat-dot-square",
          name: "机构留言",
          path: "duanx"
        },
        {
          icon: "el-icon-service",
          name: "机构纠错",
          path: "kef"
        },
        {
          icon: "el-icon-s-data",
          name: "机构资讯",
          path: "/data"
        },
        {
          icon: "el-icon-switch-button",
          name: "退出",
          path: "/login"
        }
      ]
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.nav-menu-page {
  //   width: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2e3239;
  li {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    &.router-link-active {
      background: #1e2126;
    }
    &:hover {
      background: #1e2126;
    }
    i,
    span {
      display: block;
    }
    i {
      font-size: 34px;
      color: #fff;
    }
    span {
      padding-top: 4px;
      font-size: 12px;
      color: #fff;
    }
    &:first-child {
      margin-bottom: 30px;
    }
    &:last-child {
      position: fixed;
      bottom: 0px;
      width: 68px;
      overflow: hidden;
    }
  }
}
</style>
