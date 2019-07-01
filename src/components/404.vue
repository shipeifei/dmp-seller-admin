<template>
  <div class="notFound-page">
    <dl>
      <dt>
        <!-- <img src="../assets/404.svg" /> -->
      </dt>
      <dd>
        <!-- <p>Can Not Found ！</p> -->
      </dd>
    </dl>
  </div>
</template>

<script>
import { sessionStorageApi } from '@/utils/storageApi'
export default {
  mounted () {
    this.timer = setTimeout(() => {
      let { pathMatch } = this.$route.params
      const routers = JSON.parse(sessionStorageApi.get('routers'))
      let urls = []
      routers.forEach(route => {
        route.children.forEach(child => {
          urls.push(child.path)
        })
      })
      let flag = false
      urls.forEach(url => {
        if (pathMatch === url) {
          flag = true
        }
      })
      if (flag) {
        this.$router.push(pathMatch)
      } else {
        this.$router.push(routers[0].redirect)
      }
    }, 0)
  },
  deactivated () {
    this.timer = null
  }
}
</script>

<style lang="less" scoped>
.notFound-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    height: 250px;
  }
  p {
    margin-top: 20px;
    font-size: 28px;
    color: #889196;
  }
}
</style>
