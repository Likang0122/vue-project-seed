<template>
  <div id="pageHead">
    <span class="header_back" v-show="!noBack" @click="clickBack"> <i class="iconfont icon-xiayiye-copy"></i> </span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "pageHead",
  data() {
    return {};
  },
  methods: {
    clickBack() {
      this.$router.go(-1);
    }
  },
  props: ["noBack"]
};
</script>
<style lang="scss">
#pageHead {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 94px;
  line-height: 94px;
  font-size: 34px;
  text-align: center;
  color: #111;
  z-index: 99;
  background: #fff;
  .header_back {
    position: absolute;
    top: 0;
    height: 100%;
    left: 30px;
    z-index: 100;
    .iconfont{
      font-size: 40px;
    }
  }
}
</style>
