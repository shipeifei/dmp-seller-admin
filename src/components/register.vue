<template>
    <div class="login-page">
        <div class="login-logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="login-main">
            <div class="login-form">
                <p class="title">新用户注册</p>
                <el-form ref="ruleForm" :model="form" :rules="rules">
                    <el-form-item label="账号（手机号/邮箱）" prop="username">
                        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="ConfirmPassword">
                        <el-input v-model="form.ConfirmPassword" placeholder="请再次输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                    </el-form-item>
                </el-form>
                <div class="form-item--text">
                    <p>
                        <span>已有账号？请点击</span>
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
        username: "",
        password: "",
        ConfirmPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        ConfirmPassword: [
          { required: true, message: "确认密码不能为空", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          if (this.form.password != this.form.ConfirmPassword) {
            this.$message({
              showClose: true,
              message: "两次输入的密码不一致，请重新输入",
              type: "warning"
            });
            return false;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

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
    padding-bottom:40px;
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
