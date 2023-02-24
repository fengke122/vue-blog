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
