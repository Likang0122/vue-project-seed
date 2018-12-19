<template>
  <div id='modal' v-show="isShow">
    <div class="defult">
      <div class="title">{{modal.title ? modal.title : '提示'}}</div>
      <div class="content">{{modal.content ? modal.content : '糟糕，获取资源失败啦'}}</div>
      <div class="buttons" @click="close">{{modal.btnTitle ? modal.btnTitle : '确定'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {};
  },
  computed: {
    isShow() {
      return this.$store.state.alert.show;
    },
    modal() {
      return this.$store.state.alert;
    }
  },
  methods: {
    close() {
      this.modal.btnCallback();
      this.$store.commit("hideModal");
    }
  }
};
</script>
<style lang='scss'>
#modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 110;
  .defult {
    width: 590px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 10px 40px;
    border-radius: 10px;
    text-align: center;
    .title {
      height: 84px;
      line-height: 84px;
      border-bottom: 1px solid #dad9de;
      font-size: 26px;
      color: #04032b;
    }
    .content {
      font-size: 26px;
      color: #807cb3;
      line-height: 1;
      padding: 50px 0;
    }
    .buttons {
      background: #007acc;
      width: 360px;
      line-height: 70px;
      height: 70px;
      border-radius: 35px;
      font-size: 30px;
      color: #ffffff;
      margin: 20px auto;
      transition: all 0.1s;
      user-select: none;
    }
  }
}
</style>
