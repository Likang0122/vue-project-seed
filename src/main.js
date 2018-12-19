import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Qs from "qs";
import "./assets/js/component.js";
require("./assets/iconfont/iconfont.js");
require("./assets/iconfont/iconfont.css");

Vue.config.productionTip = false;
// 传参组件
Vue.prototype.$bus = new Vue();
Vue.prototype.Modal = (title, content, btnTitle, btnCallback) => {
  store.commit("showModal", {
    title: title,
    content: content,
    btnTitle: btnTitle,
    btnCallback: btnCallback
  });
};
Vue.prototype.Toast = content => {
  store.commit("showModal", {
    title: "",
    content: content,
    btnTitle: "",
    btnCallback: () => {}
  });
};
Vue.prototype.hideModal = () => {
  store.commit("hideModal");
};
Vue.prototype.hidePhone = phone => {
  let phoneStr;
  if (typeof (phone) !== 'string') {
    phoneStr = phone.toString();
  } else {
    phoneStr = phone;
  }
  return phoneStr.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};

Vue.prototype.$axios = axios; // 上传图片需要用到axios请求

Vue.prototype.axios = axios.create({
  baseURL: '',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [
    function(data) {
      data = Qs.stringify(data);
      return data;
    }
  ],
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
Vue.prototype.$http = axios.create({
  baseURL: '',
  timeout: 10000
});
Vue.prototype.axios.interceptors.response.use(config => {
  if (config.data.status === 2000) {
    router.replace({ name: 'login' });
  } else {
    return config;
  }
}, error => {
  console.log(error.message);
  return Promise.reject(error);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
