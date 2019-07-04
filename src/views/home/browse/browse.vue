<template>
    <div class="balance-warp">
        <el-tabs>
            <el-tab-pane label="日">
                <div class="balance-item">
                    <span class="item-span">今日短信发送</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">今日留言</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">今日纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">今日浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">今日收藏</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">昨日短信发送</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">昨日留言</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">昨日纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">昨日浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">昨日收藏</span>
                    <span class="item-span">
                        3
                    </span>
                </div>

            </el-tab-pane>
            <el-tab-pane label="周">
                <div class="balance-item">
                    <span class="item-span">本周浏览量</span>
                    <span class="item-span">
                        10
                    </span>
                </div>

            </el-tab-pane>
            <el-tab-pane label="月">
                <div class="balance-item">
                    <span class="item-span">本月浏览量</span>
                    <span class="item-span">
                        300
                    </span>
                </div>

            </el-tab-pane>
            <el-tab-pane label="季度">
                <div class="balance-item">
                    <span class="item-span">本季度浏览量</span>
                    <span class="item-span">
                        499
                    </span>
                </div>

            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.balance-warp {
  margin-top: 20px;
  background: #fff;
  .balance-item {
    float: left;
    border-right: solid 1px #E4E7ED;
    width: 20%;
    text-align: center;
    padding:20px 0;
    margin-top:20px;
    margin-bottom: 14px;

    .item-span {
      color: #909399;
      display: block;
      padding-top:10px;
      .iconDown {
        color: red;
      }
      b {
        font-size: 22px;
        color: #3e8ddd;
        display: block;
        .iconUp {
          color: #3e8ddd;
        }
        .iconDown {
          color: red;
        }
      }
    }
  }
  .balance-item:last-child {
    border-right: none;
  }
}
</style>
