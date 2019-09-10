<template>
  <el-dialog
    ref="dialog"
    :visible.sync="dialogVisible"
    :title="title"
    :width="width"
    :custom-class="customClass"
    :class="{ 'pure-model': pureModal }"
    :close-on-click-modal="canCloseOnClickModal"
    :close-on-press-escape="canCloseOnPressEscape"
    :top="top"
  >
    <slot />
    <span
      v-if="!pureModal && (showConfirmButton || showCancelButton)"
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        v-if="showCancelButton"
        class="btn-cancel"
        @click="dialogVisible = false"
      >
        {{ cancelLabel ? cancelLabel : $t("cancel") }}
      </el-button>
      <el-button
        v-if="showConfirmButton"
        class="btn-ok"
        type="primary"
        @click="$emit('confirm')"
      >
        {{ confirmLabel ? confirmLabel : $t("ok") }}
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    confirmLabel: {
      type: String,
      required: false,
      default: ''
    },
    cancelLabel: {
      type: String,
      required: false,
      default: ''
    },
    top: {
      type: String,
      default: '15vh'
    },
    width: {
      type: String,
      default: '50%'
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    pureModal: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    showConfirmButton () {
      return typeof this.confirmLabel !== 'undefined'
    },
    showCancelButton () {
      return typeof this.cancelLabel !== 'undefined'
    },
    canCloseOnClickModal () {
      return this.pureModal ? false : this.closeOnClickModal
    },
    canCloseOnPressEscape () {
      return this.pureModal ? false : this.closeOnPressEscape
    }
  },
  methods: {
    open () {
      this.dialogVisible = true
    },
    close () {
      this.dialogVisible = false
    }
  }
}
</script>
<style lang="less">
@import "../../assets/less/variables.less";
@active-btn-background-color: #0b9da4;
@color1: #20a0ff;
@color2: #55a8fd;

.el-dialog--small {
  width: 800px;
  &::-webkit-scrollbar {
    display: none;
  }
  .el-dialog__footer {
    padding: 0 20px 15px !important;
  }
}

.el-dialog__wrapper {
  &::-webkit-scrollbar {
    display: none;
  }
  &.pure-model {
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
    }
    .el-dialog__footer {
      display: none;
    }
  }
  .el-dialog__header {
    border-radius: 1px;
    background-color: #eee;
    height: 40px;
    padding-top: 10px;
    .el-dialog__title {
      color: #777;
      font-family: @font-family-helvetica;
      font-size: 14px;
      font-weight: 500;
    }
    .el-dialog__headerbtn {
      top: auto;
      .el-dialog__close {
        width: 11.9px;
        height: 11.9px;
        border-radius: 1px;
        color: #777;
      }
    }
  }
  .el-dialog__body {
    &::-webkit-scrollbar {
      display: none;
    }
    .el-form {
      max-height: 90vh;
      overflow: auto;
      .el-form-item {
        margin-top: 10px;
        .el-form-item__label {
          font-weight: 100;
        }
      }
    }
    .el-tree {
      border: 0;
      .el-tree-node__expand-icon:not(.is-leaf) {
        border-left-color: @color1;
      }
      .node-label {
        display: inline-block;
        .level1 {
          color: @color1;
        }
      }
      .el-progress {
        display: inline-block;
        width: 260px;
        .el-progress-bar__outer {
          background-color: #d8d8d8;
          border-radius: 3px;
        }
        .el-progress-bar__inner {
          background-color: @color1;
          border-radius: 3px;
        }
      }
      .score {
        margin-left: 20px;
        span {
          margin-left: 10px;
        }
      }
      &:last-child {
        .el-tree-node__expand-icon:not(.is-leaf) {
          border-left-color: @color2;
        }
        .node-label {
          .level1 {
            color: @color2;
          }
        }
        .el-progress-bar__inner {
          background-color: @color2;
        }
      }
    }
    .el-dialog__footer {
      text-align: center;
    }
  }
}
</style>
<style lang="less" scoped>
@import "../../assets/less/variables.less";

.el-button {
  line-height: 0.5;
}
.btn-ok,
.btn-cancel {
  width: 80px;
  height: 30px;
}
.btn-cancel {
  border-radius: 2px;
  background-color: #e6f2ff;
  border: solid 1px #ddd;
  font-family: @font-family-helvetica;
  font-size: 14px;
  color: #777;
}

.btn-ok {
  border-radius: 2px;
  background-color: #55a8fd;
  font-family: @font-family-helvetica;
  font-size: 14px;
  color: #fff;
}
</style>
