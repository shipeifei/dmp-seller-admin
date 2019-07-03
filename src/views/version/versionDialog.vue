<template>
    <el-dialog title="发票信息" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="机构名称" prop="name">
                <el-input v-model="form.name" placeholder="机构名称"></el-input>
            </el-form-item>
            <el-form-item label="纳税人识别号" prop="taxNumber">
                <el-input v-model="form.taxNumber" placeholder="纳税人识别号"></el-input>
            </el-form-item>
            <el-form-item label="开户行" prop="bankName">
                <el-input v-model="form.bankName" placeholder="开户行"></el-input>
            </el-form-item>
            <el-form-item label="银行账号" prop="bankAccount">
                <el-input v-model="form.bankAccount" placeholder="银行账号"></el-input>
            </el-form-item>

            <el-form-item label="联系人" prop="contactPerson">
                <el-input v-model="form.contactPerson" placeholder="联系人"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.mobile" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model="form.address" placeholder="地址"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="submitForm('form')">确 定</el-button>
        </div>
    </el-dialog>

</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        taxNumber: "",
        bankName: "",
        bankAccount: "",
        contactPerson: "",
        address: "",
        mobile: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入机构名称", trigger: "blur" },
          { min: 3, max: 50, message: "长度在 3 到 50 个字符", trigger: "blur" }
        ],
        taxNumber: [
          { required: true, message: "请输入纳税人识别号", trigger: "blur" }
        ],
        bankName: [
          { required: true, message: "请输入开户行", trigger: "blur" }
        ],
        bankAccount: [
          { required: true, message: "请输入银行账号", trigger: "blur" }
        ],
        contactPerson: [
          { required: true, message: "请输入联系人", trigger: "blur" }
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }]
      }
    };
  },
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
    open() {
      this.dialogFormVisible = true;
    },
    close() {
      this.dialogFormVisible = false;
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

          console.log(this.form);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>


