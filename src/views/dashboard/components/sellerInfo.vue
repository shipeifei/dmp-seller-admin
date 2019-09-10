<template>
    <div class="application-page">
        <div class="application-model">
            <p>
                <!-- <img src="../../../assets/3.jpg" alt="" class="seller-img" /> -->
                <span class="seller-name">
                    <b>机构名称</b>
                    <div class="box-text">账户版本:免费版
                        <el-tooltip class="item" effect="dark" content="升级为会员" placement="top">
                            <span class="upgrade" @click="seller">
                                升级
                                <i class="el-icon-top"></i>
                            </span>
                        </el-tooltip>
                    </div>
                    <div class="box-text">入驻时间:{{purchaseDate | date}}</div>
                    <div class="box-text">机构编码:yueqizhixiang</div>
                    <div class="box-text" @click="editor">
                        <span>编辑</span>
                    </div>
                </span>
                <label class="seller-info">
                    正欧(ZO)乐器管乐服务中心有着强大的售后服务能力，一个比较高端的维修工作室，工具方面是采用了美国和德国两家全球最好的工具，好工具让每一件乐器都能得到最好的维修，其他的辅助配件方面都是厂家直供，各种优质配件应有尽有。 技术方面，正欧(ZO)乐器管乐服务中心的维修技师都是从业多年的高级技师，和欧美、台湾、香港等地的维修技师多次进行交流学习，尤其在德国进行了长时间的学习交流，有着优质的维修解决方案。
                </label>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      purchaseDate: 1562575733000
    };
  },
  methods: {
    editor() {
      this.$router.push("/seller");
    },
    seller() {
      this.$router.push("/version");
    }
  },
  filters: {
    date(val) {
      let date = new Date(val);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return year + "年" + month + "月" + day + "日";
    }
  }
};
</script>
<style lang="scss" scoped>
.el-icon-top {
  font-size: 14px;
  font-weight: bolder;
  color: #409eff;
}
.application-model {
  p {
    height: 300px;
    box-sizing: border-box;
    padding-top: 10px;
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
        color: #409eff;
        cursor: pointer;
      }
      .upgrade {
        text-decoration: underline;
        color: #409eff;
        cursor: pointer;
      }
    }
    label.seller-info {
      display: block;
      width: 100%;
      overflow: hidden;
      font-size: 14px;
      color: #878787;
      margin-top: 10px;
      float: left;
      text-indent: 26px;
      line-height: 24px;
    }
  }
}
</style>


