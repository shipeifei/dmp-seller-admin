<template>
  <section>
    <div class="section-header">
      <!-- <h2>{{title}}</h2>
      <p v-if="desc">{{desc}}</p> -->
    </div>
    <div class="recommandSeller-page">
      <!-- {{dataList}} 推荐机构页面 轮播图形式显示推荐机构 -->
      <div class="mask"></div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in dataList" :key="index" class="seller-item">
          <a href="javascript:(0)" target="_blank">
            <div class="item-image">
              <!-- <img
                :src="item.coverImageUrl&&item.coverImageUrl!='NULL'?item.coverImageUrl:'http://imsapi.yueqizhixiang.com/uploads/images/leqizhixiang/shangjiadianpu/fengmian/1558679675292.png'"
                alt
              > -->
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="item-desc">
              <span>{{item.briefName}}</span>
              <label>{{item.desc}}</label>
            </div>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>
<script>
export default {
//   props: {
//     dataList: {
//       type: Array
//     },
//     title: {
//       type: String,
//       required: true
//     },
//     desc: {
//       type: String
//     }
//   },
  data(){
      return{
          dataList:[
              {
                  imgUrl:require('../assets/2.jpg'),
                  briefName:'1',
                  desc:'1'
              },
              {
                  imgUrl:require('../assets/3.jpg'),
                  briefName:'2',
                  desc:'2'
              }
          ]
      }
  }
};
</script>
<style lang="less" scoped>
.section-header {
  margin-top: 50px;
  position: relative;
  text-align: center;
  h2 {
    color: #505866;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
  }
}
.recommandSeller-page {
  position: relative;
  padding: 120px 0 100px 0;
  background: url("../assets/selllerDefaultBg.jpg") no-repeat;
  background-size: 100% 100%;
  margin-top: 73px;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(75, 75, 75, 0.6);
    top: 0;
    left: 0;
  }
  .el-carousel__container {
    width: 80%;
    margin: 0 auto;
  }
  .seller-item {
    a {
      display: block;
      cursor: pointer;
      .item-image {
        width: 320px;
        height: 237px;
        overflow: hidden;
        float: left;
        margin: 20px 0 0 100px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .item-desc {
        float: left;
        width: 600px;
        overflow: hidden;
        margin: 20px 0 0 20px;
        span {
          font-size: 28px;
          color: #fff;
          display: block;
        }
        label {
          font-size: 14px;
          color: #fff;
          line-height: 28px;
        }
      }
    }
  }
  .el-carousel__indicators--outside button {
    background: #000;
  }
  .el-carousel__item:nth-child(2n) {
    // background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    // background-color: #d3dce6;
  }
}
.recommandSeller-page .el-carousel__indicators--outside button {
  background: #fff;
}
</style>

