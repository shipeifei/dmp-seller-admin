<template>
    <div class="login-page">
        <div class="login-logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="login-main">
            <div class="login-form">
                <p class="title">新用户入驻</p>
                <el-form ref="ruleForm" :model="form" :rules="rules">
                    <el-form-item label="机构全称" prop="name">
                        <el-input v-model="form.name" placeholder="请输入机构全称" class="form-control"></el-input>
                    </el-form-item>
                    <el-form-item label="机构简称" prop="briefName">
                        <el-input v-model="form.briefName" placeholder="请输入机构简称" class="form-control"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人" prop="managerPerson">
                        <el-input v-model="form.managerPerson" placeholder="请输入联系人" class="form-control"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="form.mobile" placeholder="请输入手机号" class="form-control"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="form.email" placeholder="请输入邮箱" class="form-control"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ">
                        <el-input v-model="form.qq" placeholder="请输入QQ" class="form-control no-required"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">入驻</el-button>
                    </el-form-item>
                </el-form>
                <div class="form-item--text">
                    <p>
                        <span>已入驻？请点击</span>
                        <a href="./login" class="form-item-text-link">登录</a>
                    </p>

                </div>
            </div>
        </div>
        <div class="login-footer">
            <ul>
                <li>
                    <a href="">联系我们</a>
                </li>|
                <li>
                    <a href="">隐私政策</a>
                </li>|
                <li>
                    <a href="">服务条款</a>
                </li>
            </ul>
            Copyright © 2017 - 2019 乐器之乡yueqizhixiang.com 版权所有 冀ICP备18006168号
        </div>
    </div>
</template>
<script>
import { sessionStorageApi } from "@/utils/storageApi";
export default {
  name: "IndexLogin",
  data() {
    return {
      form: {
        briefName: "",
        name: "",
        managerPerson: "",
        mobile: "",
        email: "",
        desc: "",
        qq: "",
        weixin: "",
        cstatus: "noreview",
        managerPhone: "",
        managerEmail: "",
        password: "",
        code: ""
      },
      rules: {
        name: [{ required: true, message: "请输入机构全称", trigger: "blur" }],
        briefName: [
          { required: true, message: "请输入机构简称", trigger: "blur" }
        ],
        briefName: [
          { required: true, message: "请输入机构简称", trigger: "blur" }
        ],
        managerPerson: [
          { required: true, message: "请输入联系人", trigger: "blur" }
        ],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
      }
    };
  },
  mounted() {},
  methods: {
    isPhone(obj) {
      //验证是否手机号 mobile
      let reg = /^1\d{10}$/;
      if (!reg.test(obj)) {
        return false;
      } else {
        return true;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (!this.form.mobile.trim()) {
            this.$message.error("请输入手机号");
            return false;
          }
          if (!this.isPhone(this.form.mobile.trim())) {
            this.$message.error("请输入11位有效手机号");
            return false;
          }
          alert("submit!");
        } else {
          console.log("error submit!!");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@font: 22px/1.5 Lantinghei SC, Microsoft Yahei, Hiragino Sans GB,
  Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
@font-family: Lantinghei SC, Microsoft Yahei, Hiragino Sans GB,
  Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;

body {
  background: #eee;
}
.login-page {
  background: #eee url("../assets/home_bg1.jpg") no-repeat;
  background-size: 100% 350px;
  overflow: hidden;
  .login-logo {
    width: 300px;
    margin: 60px auto;
    height: 60px;
    text-align: center;
  }
  .login-main {
    margin: 0 auto 30px;
    min-height: 400px;
    background-color: #fff;
    border-radius: 3px;
    width: 600px;
    padding-bottom: 40px;
    .login-form {
      width: 450px;
      margin: 0px auto;
      padding-top: 40px;
      .title {
        width: 100%;
        text-align: center;
        font-size: 24px;
        color: #333;
        line-height: 30px;
        text-align: center;
        font-family: @font-family;
      }
      .form-item--text {
        line-height: 28px;
        color: #666;
        text-align: left;
        font: @font;
        p {
          margin-bottom: 5px;
        }
        .form-item-text-link {
          color: #76d1ee;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  .login-footer {
    width: 600px;
    text-align: center;
    margin: 0 auto;
    ul {
      width: 300px;
      margin: 20px auto;
      display: flex;
      li {
        flex: 1;
        a {
          color: #333;
        }
      }
    }
  }
}
</style>
