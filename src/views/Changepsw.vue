<template>
  <div class="change-body">
    <div class="container">
      <div class="setps-box">
        <el-steps :space="150" :active="active" finish-status="success">
          <el-step title="验证身份"></el-step>
          <el-step title="设置密码"></el-step>
          <el-step title="改密成功"></el-step>
        </el-steps>
      </div>
      <div class="setp1" v-show="showingContent === 0">
        <div class="changepsw-box">
          <el-input v-model="phone" placeholder="请输入手机号" class="phone-input"></el-input>
          <el-row :gutter="20" class="input-box">
            <el-col :span="12" :push="1"><el-input v-model="code" placeholder="请输入验证码" ></el-input></el-col>
            <el-col :span="5" :push="1">    <el-button type="primary" class="send-code" :disabled="disableButton"  @click="sendCode">
              {{ remainingTime > 0 ? `${remainingTime}s后获取` : '发送验证码' }}
            </el-button></el-col>
          </el-row>
        </div>
        <div style="text-align: center;"><el-button style="margin-top: 12px;" type="primary" @click="next"  :disabled="!canNext" class="next-btn">下一步</el-button></div>
      </div>
      <div class="setp2" v-show="showingContent === 1">
        <div style="text-align: center; " >
          <el-input v-model="newpassword" style="width: 350px" placeholder="请输入新密码" ></el-input>
        </div>
        <div style="text-align: center;">
        </div>
        <div style="text-align: center;"><el-button style="margin-top: 12px;" type="primary" @click="() => {next(); sendNewpsw();}"   class="next-btn">下一步</el-button></div>
      </div>
      <div class="setp3" v-show="showingContent === 2">
        <div style="text-align: center;">
          <h3>修改密码成功！</h3>
          <img src="../assets/img/success.png" alt="">
        </div>
        <div style="text-align: center;"><el-button type="primary"><router-link to="/home" class="home-btn">返回首页</router-link></el-button></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Changepsw",
  data() {
    return {
      active: 1,
      phone: '',
      code: '',
      phonecode: '1234',
      remainingTime: 0,
      disableButton: false,
      showingContent: 0,
      newpassword:'',
      canNext: false // 下一步按钮是否可点击
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 1;
      if (this.showingContent === 2) {
        // 如果是最后一个盒子了，则回到第一个盒子
        this.showingContent = 0
      } else {
        // 否则显示下一个盒子
        this.showingContent += 1
      }
    },
    sendCode() {
      if (this.isSending) {
        return;
      }

      this.disableButton = true;
      this.isSending = true;

      // 发送验证码的逻辑，此处只是模拟发送请求
      // 此处应该调用真实的发送验证码接口
      this.$http.post('/your/api/endpoint', { phoneNumber: this.phone }).then(response => {
        // 请求成功后执行倒计时逻辑
        this.isSending = false;

        // 获取请求返回的验证码
        this.phonecode = response.data.phonecode;

        this.remainingTime = 60;
        const countdownTimer = setTimeout(() => {
          this.disableButton = false;
        }, 60000);

        const updateTimer = setInterval(() => {
          this.remainingTime--;
          if (this.remainingTime === 0) {
            clearInterval(updateTimer);
            clearTimeout(countdownTimer);
            this.disableButton = false;
          }
        }, 1000);
      }).catch(error => {
        // 请求失败处理逻辑
        console.error(error);
        this.isSending = false;
        this.disableButton = false;
        // TODO: show error message to user
      });
    },
    sendNewpsw() {
      const newPassword = this.newPassword; // 获取输入框的值
      this.$http.post('/do', { newpassword: newPassword })
          .then(response => {
            console.log(response.data); // 请求成功后的处理
          })
          .catch(error => {
            console.log(error); // 请求失败后的处理
          });
    }
  },
  watch: {
    code(val) {
      if (this.showingContent === 0) {
        if (val === this.phonecode) {
          // 如果输入正确，可以进行下一步操作
          this.canNext = true
        }
      }
      },
  }
}
</script>
<style scoped>


.change-body {
  width: 100%;
  height: 100%;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  height: 100vh;
  background: url("~@/assets/img/bg6.jpg") no-repeat;
  background-size: cover;
}

.container {
  border-radius: 3px;
  width: 450px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: 1px solid rgba(255,255,255,0.2);
  border-left: 1px solid rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  border-right: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(20px);
}

.container > h2 {
  color: rgba(255,255,255,0.9);
  font-size: 40px;
  margin-left: 30px;
  margin-bottom: 50px;
}

.phone-input {
  width: 348px;
  position: relative;
  left: 50px;
  margin-bottom: 10px;
}



.el-steps {
  position: relative;
  top: 50px;
  left: 50px;
  margin-bottom: 50px;
}


.send-code {
  font-size: 14px;
}

.input-box {
  position: relative;
  left: 30px;
}

.setp1 {
  margin-top: 100px;
}

.next-btn {
  width: 350px;
}


.setp2 {
  position: relative;
  top: 50px;
}

.setp3 {
  position: relative;
  top: 20px;
}

.setp3 div h3 {
  font-size: 24px;
  color: #222;
  margin: 0 auto 20px;
  text-align: center;
}

.home-btn {
  color: #fff;
  text-decoration: none;
}


</style>