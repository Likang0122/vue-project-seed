<template>
  <div id="index">
    <big-button :click="goNext">确定</big-button>
    <page-footer :active="0"></page-footer>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
    };
  },
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeDestroy: function () {},
  methods: {
    goNext() {
      this.$router.push('/demo');
    }
  },
};
</script>
<style lang="scss">
#index {}
</style>
