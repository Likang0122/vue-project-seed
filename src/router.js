import Vue from "vue";
import Router from "vue-router";
import demo from "./views/demo.vue";
import qrCode from "./views/qrCode.vue";
import index from "./views/index.vue";
import mine from "./views/mine.vue";
import userCenter from "./views/userCenter.vue";
import wallet from "./views/wallet.vue";
import { resolve } from "path";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "defult",
      meta: {
        index: 1
      },
      component: index
    },
    {
      path: "/qrCode",
      name: "qrCode",
      meta: {
        index: 3
      },
      component: qrCode
    },
    {
      path: "/demo",
      name: "demo",
      meta: {
        index: 2
      },
      component: demo
    },
    {
      path: "/index",
      name: "index",
      meta: {
        index: 1
      },
      component: index
    },
    {
      path: "/mine",
      name: "mine",
      meta: {
        index: 2
      },
      component: mine
    },
    {
      path: "/userCenter",
      name: "userCenter",
      meta: {
        index: 5
      },
      component: userCenter
    },
    {
      path: "/wallet",
      name: "wallet",
      meta: {
        index: 4
      },
      component: wallet
    }
  ]
});
