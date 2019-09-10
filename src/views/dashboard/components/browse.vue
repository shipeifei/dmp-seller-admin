<template>
    <div class="balance-warp">
        <el-tabs>
            <el-tab-pane label="日">
                <div class="balance-item">
                    <span class="item-span">今日短信发送</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(3,6)}">
                            3
                            <i v-if="getDataContrast(3, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">今日留言</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(9,6)}">
                            3
                            <i v-if="getDataContrast(9, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
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
                    <span class="item-span">本周短信发送</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(3,6)}">
                            3
                            <i v-if="getDataContrast(3, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本周留言</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(9,6)}">
                            3
                            <i v-if="getDataContrast(9, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本周纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本周浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本周收藏</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上周短信发送</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上周留言</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上周纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上周浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上周收藏</span>
                    <span class="item-span">
                        3
                    </span>
                </div>

            </el-tab-pane>
            <el-tab-pane label="月">
                <div class="balance-item">
                    <span class="item-span">本月短信发送</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(3,6)}">
                            3
                            <i v-if="getDataContrast(3, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本月留言</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(9,6)}">
                            3
                            <i v-if="getDataContrast(9, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本月纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本月浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本月收藏</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上月短信发送</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上月留言</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上月纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上月浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上月收藏</span>
                    <span class="item-span">
                        3
                    </span>
                </div>

            </el-tab-pane>

            <el-tab-pane label="季度">
                <div class="balance-item">
                    <span class="item-span">本季度短信发送</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(3,6)}">
                            3
                            <i v-if="getDataContrast(3, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本季度留言</span>
                    <span class="item-span">
                        <b :class="{iconDown:!getDataContrast(9,6)}">
                            3
                            <i v-if="getDataContrast(9, 6)" class="el-icon-upload2 iconUp" />
                            <i v-else class="el-icon-download iconDown" />
                        </b>
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本季度纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本季度浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">本季度收藏</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上季度短信发送</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上季度留言</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上季度纠错</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上季度浏览量</span>
                    <span class="item-span">
                        3
                    </span>
                </div>
                <div class="balance-item">
                    <span class="item-span">上季度收藏</span>
                    <span class="item-span">
                        3
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
  methods: {
    getDataContrast(current, last) {
      return current > last;
    }
  }
};
</script>
<style lang="scss" scoped>
.balance-warp {
  margin-top: 20px;
  background: #fff;
  .balance-item {
    float: left;
    border-right: solid 1px #e4e7ed;
    width: 20%;
    text-align: center;
    padding: 20px 0;
    margin-top: 20px;
    margin-bottom: 14px;

    .item-span {
      color: #909399;
      display: block;
      padding-top: 10px;
      font-size: 14px;

      .iconDown {
        color: red;
        font-size: 14px;
      }
      b {
        font-size: 14px;
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
  .balance-item:nth-child(5) {
    border-right: none;
  }
}
</style>
