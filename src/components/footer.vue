<template>
  <div id="pageFooter">
    <div class="page_foot_nav" :class="{'active': index === active}" v-for="(item, index) in routeList" :key="index" @click="footRoute(item.route)">
      <p :class="[active === index ? item.iconfont1 : item.iconfont, 'page_foot_iconfont', 'iconfont']"></p>
      <p class="page_foot_name">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
  data() {
    return {
      routeList: [
        {
          iconfont: "icon-tubiao-1",
          iconfont1: "icon-tubiao-3",
          name: "首页",
          route: "index"
        },
        {
          iconfont: "icon-integral",
          iconfont1: "icon-integral_fill",
          name: "分类",
          route: "mine"
        },
        {
          iconfont: "icon-fenxiang",
          iconfont1: "icon-fenxiangxuanzhong",
          name: "本地",
          route: "qrCode"
        },
        {
          iconfont: "icon-xinyongqianbao",
          iconfont1: "icon-xinyongqianbaofill",
          name: "购物车",
          route: "wallet"
        },
        {
          iconfont: "icon-tubiao-",
          iconfont1: "icon-tubiao-2",
          name: "我的",
          route: "userCenter"
        }
      ]
    };
  },
  mounted () {
  },
  methods: {
    footRoute(route) {
      this.$router.push({ name: route });
    }
  },
  props: ["active"]
};
</script>

<style lang="scss">
#pageFooter { 
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 98px;
  background: #fff;
  .page_foot_nav {
    width: 20%;
    float: left;
    text-align: center;
    color: #666;
    .page_foot_iconfont {
      font-size: 42px;
      line-height: 42px;
      padding-top: 15px;
    }
    .page_foot_name {
      font-size: 20px;
      line-height: 40px;
    }
    &.active {
      color: #007acc;
    }
  }
}
</style>
