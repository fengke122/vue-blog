import Vue from 'vue'  //在页面中引入vue.js
import App from './App.vue'  //引入自定义组件
import router from './router' //引入路由
import ElementUI from 'element-ui';
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({ //vue全局实例 不建议使用   不用修改
  router, //注册路由对象
  render: h => h(App)  //注册App组件
}).$mount('#app') //绑定vue实例全局作用范围

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 设置拦截器
instance.interceptors.request.use(config => {
  // 在请求发送之前做些什么
  return config;
}, error => {
  // 处理请求错误
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  // 处理响应数据
  return response.data;
}, error => {
  // 处理响应错误
  return Promise.reject(error);
});

// 将 axios 实例挂载到 Vue 原型上
Vue.prototype.$http = instance;
