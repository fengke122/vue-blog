import Vue from 'vue'  //在页面中引入vue.js
import App from './App.vue'  //引入自定义组件
import router from './router' //引入路由
import ElementUI from 'element-ui';
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';
import cookie from 'vue-cookie'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './assets/fonts/font.css'

Vue.use(mavonEditor)


Vue.prototype.$cookie = cookie;  //配置时候prototype.$这里的名字自己定义不是固定是cookie
axios.defaults.withCredentials=true

Vue.use(ElementUI);

Vue.config.productionTip = false

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:8081', // 设置默认的基础地址
  // timeout: 5000, // 设置默认的超时时间
  headers: { // 设置默认的请求头
    'Content-Type': 'application/json',
  }
});

// 将 axios 实例挂载到 Vue 原型上
Vue.prototype.$http = instance;

new Vue({ //vue全局实例 不建议使用   不用修改
  router, //注册路由对象
  render: h => h(App)  //注册App组件
}).$mount('#app') //绑定vue实例全局作用范围




export default instance;
