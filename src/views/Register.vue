<template>
  <div class="body-regiseter">
    <div class="container" id="app">
      <h2>Register</h2>
      <div class="form">
        <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="90px" label-height="10px" :hide-required-asterisk="false">
          <el-form-item label="账号" prop="name">
            <el-input v-model.number="registerForm.name" size="small"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerForm.password" autocomplete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="registerForm.checkPass" autocomplete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item  label="验证码" prop="code">
            <div class="codebox">
              <el-input
                  v-model="registerForm.code"
                  size="small"></el-input>
            </div>
          </el-form-item>
              <div>
                <img :src="registerForm.captchaUrl" alt="验证码" @click="refreshCaptcha">
              </div>
          <el-form-item class="btn">
            <el-button
                size="small"
                @click="submitForm">注册</el-button>
            <router-link class="login-btn" to="/login">登录</router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        name:'',
        password:'',
        checkPass:'',
        code:'',
      },
      rules: {
        //校验数据
        name: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 5, max: 16, message: "长度不在5-16个字符", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" },
          { validator: validatePass, trigger: 'blur' },
        ],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" },
          { validator: validatePass2, trigger: 'blur', required: true }
        ],
        // phone: [
        //     { required: true, message: "请输入手机号", trigger: "change" },
        //     { min: 8, max: 16, message: "请输入11位手机号", trigger: "blur" },
        // ],
        code    :[
          { required: true, message: "请输入验证码", trigger: "change" },
        ]
      },
    };
  },
  methods: {
    // 刷新验证码
    async refreshCaptcha() {
      try {
        // 向后端请求验证码图片和地址
        const response = await this.$http.get('/api/kaptcha', { responseType: 'blob' });
        const data = response.data;
        const url = URL.createObjectURL(data);

        // 更新registerForm.captchaUrl属性
        this.registerForm.captchaUrl = url;

        // 向后端请求新的验证码值
        const response2 = await this.$http.get('/common/verifiyCode');
        this.registerForm.verifyCode = response2.data;
      } catch (error) {
        console.error(error);
      }
    },
    submitForm() {
      this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          // 验证码验证
          if (this.registerForm.code !== this.registerForm.verifyCode) {
            this.$message.error('验证码输入错误');
            this.refreshCaptcha(); // 刷新验证码
            return;
          }

          // 提交表单
          try {
            await this.$http.post('/common/register', this.registerForm);
            this.$message.success('注册成功');
            this.$router.push('/login')
          } catch (error) {
            console.error(error);
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  mounted() {
    // 获取验证码图片
    this.refreshCaptcha();
  },
}
</script>
<style scoped>




.el-form-item {
  margin-bottom: 14px;
}

.el-input {
  width: 170px;
  height: 10px;
}
.el-form-item__content {
  line-height: 40px;
}
.sendcode {
  position: relative;
  right: 40px;
}
.codebox button {
  width: 85px;
  margin-top: 6px;
}
.login {
  position: relative;
  left: 45px;
}

.body-regiseter {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("~@/assets/img/bg6.jpg") no-repeat;
  background-size: cover;

}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 600px;
  border-radius: 3px;
  border-top: 1px solid rgba(255,255,255,0.2);
  border-left: 1px solid rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  border-right: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(20px);
}

.container > h2 {
  color: rgba(255,255,255,0.9);
  position: relative;
  font-size: 40px;
  left: 30px;
  bottom: 30px;

}

/deep/ .el-form-item label {
  color: rgba(255,255,255,0.6);
  font-size: 16px;
}


.img-code {
  position: relative;
  left: 90px;
}

.login-btn {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFF;
  border: 1px solid #DCDFE6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -webkit-user-select: none;
  text-decoration:none;
  position: relative;
  top: 1px;
  left: 55px;
}

.login-btn:hover {
  background-color: rgb(234, 243, 254);
  color: #3f9dfe;
}
</style>