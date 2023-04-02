<template>
  <div class="body-login">
    <div class="container">
      <h2>Login</h2>
      <div class="form">
        <form  @submit.prevent="submit">
          <div class="box">
            <label for="name">账号:</label>
            <input v-model="username" type="text" @input="checkName" id="username" name="username">
            <p class="message">请输入5-16位账号</p>
          </div>
          <div class="box">
            <label for="password">密码:</label>
            <input v-model="password" type="password" @input="checkPassword" class="password" id="password" name="password">
            <p class="message2">请输入8-16位密码</p>
          </div>
          <div>
            <button type="submit">登录</button>
<!--            <button class="reg" >注册</button>-->
            <router-link class="reg" to="/register">注册</router-link>
          </div>
          <a href="/forget-password" class="forgetPsw">忘记密码?</a>
        </form>
      </div>
    </div>
  </div>


</template>
<script>

export default {
  name: "Login",
  data() {
    return {
      username:'',
      password:'',

    };
  },

  methods: {

    submit() {
      const formData = new FormData();
      formData.append('username', this.username);
      formData.append('password', this.password);

      this.$http.post('/do', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data.code);
        if (response.code === 200) {
          // 登录成功，从后端返回的响应中获取 sessionid，并将其存储在 cookie 中
          const JSESSIONID = response.data;
          console.log(response.data);
          this.$cookie.set('JSESSIONID', JSESSIONID, 1); // 设置过期时间为 1 天// 设置过期时间为 1 天
          // 登录成功，跳转到 /userindex 页面
          this.$http.get("/user/isUserDetailExist").then(response => {
            if (response.code === 200) {
              this.$router.push('/userindex')
            } else {
              this.$router.push('/userdetil')
            }
          }
          ).catch(error => {
            console.log("reer")
          });
        } else {
          // 登录失败，打印错误信息到控制台
          console.error('登录失败')
        }
      }).catch(error => {
        // 处理错误信息
        console.error(error)
      })
    },
    checkPassword(event) {
      var msg = document.querySelector('.message2');
      const input = event.target.value;
      const pattern = /^\w{8,16}$/;
      if (!pattern.test(input)) {
        msg.className = 'message2 wrong';
      }
      else {
        msg.className = 'message2 right';
      }
    },
    checkName(event) {
      var msg = document.querySelector('.message');
      const input = event.target.value;
      const pattern = /^\w{5,16}$/;
      if (!pattern.test(input)) {
        msg.className = 'message wrong';
      }
      else {
        msg.className = 'message right';
      }
    },
  },
}

</script>
<style scoped>
.body-login {
  width: 100%;
  height: 100%;
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
  border-radius: 3px;
  width: 450px;
  height: 500px;
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

label {
  color: rgba(255,255,255,0.6);
  font-size: 16px;
}

input {
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  display: inline-block;
  font-size: inherit;
  outline: 0;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);

}

form div {
  padding-bottom: 5px;
}

.box {
  width: 300px;
}

button, .reg{
  display: inline-block;
  position: relative;
  left: 40px;
  width: 50px;
  height: 30px;
  font-size: 14px;
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
}

button:hover {
  background-color: #999999;
}
.reg:hover {
  background-color: #999999;
}


.reg {
  position: relative;
  left: 162px;
  line-height: 30px;
  text-decoration:none;
}

.message {
  display: inline-block;
  font-size: 12px;
  color: #999;
  background: url("~@/assets/img/mess.png") no-repeat;
  padding-left: 20px;
  position: relative;
  left: 40px;
}
.message2 {
  display: inline-block;
  font-size: 12px;
  color: #999;
  background: url("~@/assets/img/mess.png") no-repeat;
  padding-left: 20px;
  position: relative;
  left: 40px;
}

.wrong {
  color: red;
  background: url("~@/assets/img/wrong.png") no-repeat;
}

.right {
  background: url("~@/assets/img/right.png") no-repeat;
}

.forgetPsw {
  text-decoration: none;
  position: relative;
  left: 205px;
  color: #DCDFE6;
  font-size: 14px;
}

.forgetPsw:hover {
  color: #999999;
}


</style>