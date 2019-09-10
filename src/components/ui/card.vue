<template>
  <el-card
    v-loading="loading"
    ref="gucp-card"
    :class="{ 'no-header': !title, 'zoom-out': zoom }"
    :style="position"
    :element-loading-text="$t('loading')"
    class="card-wrap"
  >
    <template slot="header">
      {{ title }}
      <span class="subtitle" @click="click">{{ subtitle }}</span>
    </template>
    <slot />
  </el-card>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      zoom: false,
      position: { position: 'position' }
    }
  },
  methods: {
    zoomOut () {
      this.zoom = true
      this.position.position = 'fixed'
      this.$bus.emit('show-mask')
      this.$bus.emit('bar-resize')
    },
    zoomIn () {
      this.zoom = false
      this.position.position = 'relative'
    },
    click () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>
.card-wrap {
  display: flex;
  flex-direction: column;

  .subtitle {
    position: absolute;
    right: 20px;
    cursor: pointer;
    color: #55a8fd;
  }
}
</style>
<style lang="less">
@import "../../assets/less/variables.less";
.el-card {
  position: relative;

  &:not(.first-card) {
    margin-top: @vertical-gap-height;
  }

  &.no-header {
    .el-card__header {
      display: none;
    }
  }

  .el-card__body {
    overflow: auto;
  }
  .el-card__header {
    padding-top: 11px;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 700;
  }

  .el-collapse-item__wrap {
    background-color: white;
  }
}
</style>
