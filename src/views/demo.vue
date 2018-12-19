<template>
  <div id="demo">
    <page-header>我的资产</page-header>
    <big-button :click="tips">确定</big-button>
    <page-footer :active="2"></page-footer>
    <date-picker></date-picker>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  watch: {
    showDate() {
      console.log(this.showDate);
    }
  },
  computed: {
    showDate() {
      if (!this.$store.state.date.config.selectResult[1]) {
        return (
          this.$store.state.date.config.default[1][0] +
          "-" +
          this.$store.state.date.config.default[1][1]
        );
      } else {
        return (
          this.$store.state.date.config.selectResult[0] +
          "-" +
          this.$store.state.date.config.selectResult[1]
        );
      }
    }
  },
  beforeDestroy() {
    this.hideModal();
    this.$store.commit("beDefault", {});
  },
  methods: {
    clickit() {
      this.Modal("成功提示", "操作成功", "确定", () => {
        console.log("确定");
      });
    },
    tips() {
      this.Toast("");
    },
    picker() {
      this.$store.commit("configDateWrap");
    }
  }
};
</script>
<style lang="scss">
#demo {
  padding-top: 100px;
}
</style>
