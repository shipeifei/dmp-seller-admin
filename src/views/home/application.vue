<template>
    <div class="application-page">
        <div class="application-model">
            <p>
                <img src="../../assets/3.jpg" alt="" class="seller-img" />
                <span class="seller-name">
                    <b>机构名称</b>
                    <div class="box-text">账户版本:免费版
                        <el-tooltip class="item" effect="dark" content="升级到VIP" placement="top">
                            <span class="upgrade" @click="seller">
                                升级
                                <i class="el-icon-top"></i>
                            </span>
                        </el-tooltip>
                    </div>
                    <div class="box-text">到期时间:无限</div>
                    <div class="box-text" @click="editor">
                        <span>编辑</span>
                    </div>
                </span>
                <label class="seller-info"> 简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</label>
            </p>

        </div>
    </div>
</template>
<script>
export default {
  components: {},
  methods: {
    editor() {
      this.$router.push("/seller");
    },
    seller() {
      this.$router.push("/version");
    }
  }
};
</script>
<style lang="less" scoped>
.el-icon-top {
  font-size: 14px;
  font-weight: bolder;
  color: #409EFF;
}
.application-model {
  p {
    height: 300px;
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background: #fff;
    position: relative;
    img.seller-img {
      width: 120px;
      height: 120px;
      overflow: hidden;
      float: left;
    }
    span.seller-name {
      font-size: 16px;
      color: #878787;
      float: left;
      margin-left: 10px;
    }
    .box-text {
      line-height: 25px;
      font-size: 14px;
      color: #878787;
      display: block;
      span {
        text-decoration: underline;
        color: #409EFF;
        cursor: pointer;
      }
      .upgrade {
        text-decoration: underline;
        color: #409EFF;
        cursor: pointer;
      }
    }
    label.seller-info {
      display: block;
      width: 100%;
      overflow: hidden;
      font-size: 12px;
      color: #878787;
      margin-top: 10px;
      float: left;
    }
  }
}
</style>


