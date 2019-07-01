<template>
    <div class="statistical-page">
        <div class="statistical-item">
            <div class="item-icon">
                <i class="el-icon-position item-firsts"></i>
            </div>
            <div class="item-bd-hd">
                0
            </div>
            <div class="item-bd-text">
                <span>总发送数</span>
                <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </div>
        </div>
        <div class="statistical-item">
            <div class="item-icon">
                <el-progress type="circle" :percentage="0" :width="80"></el-progress>
            </div>
            <div class="item-bd-hd">
                0
            </div>
            <div class="item-bd-text">
                <span>总发送数</span>
                <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </div>
        </div>
        <div class="statistical-item">
            <div class="item-icon">
                <el-progress type="circle" :percentage="0" :width="80"></el-progress>
            </div>
            <div class="item-bd-hd">
                0
            </div>
            <div class="item-bd-text">
                <span>总发送数</span>
                <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </div>
        </div>
        <div class="statistical-item">
            <div class="item-icon">
                <el-progress type="circle" :percentage="0" :width="80"></el-progress>
            </div>
            <div class="item-bd-hd">
                0
            </div>
            <div class="item-bd-text">
                <span>总发送数</span>
                <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                    <i class="el-icon-question"></i>
                </el-tooltip>

            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.item-firsts {
  font-size: 88px;
  color: #f47e43;
}
.statistical-page .item {
  color: #5697e2;
}
.statistical-page {
  background: #fff;
  border-top: solid 1px #ccc;
  display: flex;
  flex-direction: row;
  .statistical-item {
    text-align: center;
    width: 25%;
    height: 200px;
    border-right: solid 1px #ccc;
    .item-icon {
      width: 100%;
      margin-right: 0;
      padding-bottom: 15px;
      padding-top: 20px;
    }
    .item-bd-hd {
      line-height: 20px;
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    }
    .item-bd-text {
      line-height: 14px;
      font-size: 14px;
      color: #999;
    }
  }
  .statistical-item:last-child {
    border-right: none;
  }
}
</style>


