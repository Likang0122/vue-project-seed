<template>
  <div id="bigButton">
    <button class="buttons" :class="{'button_click': isClick}" @click="buttonClick">
      <slot>確認</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "bigButton",
  data() {
    return {
      isClick: false
    };
  },
  methods: {
    buttonClick() {
      this.isClick = true;
      setTimeout(() => {
        this.isClick = false;
        this.click();
      }, 100);
    }
  },
  props: ["click"]
};
</script>

<style lang="scss">
#bigButton {
  margin-top: 150px;
  .buttons {
    background: #007acc;
    width: 590px;
    line-height: 78px;
    height: 78px;
    border-radius: 39px;
    font-size: 30px;
    color: #ffffff;
    display: block;
    margin: 0 auto;
    transition: all 0.1s;
    user-select: none;
    &.button_click {
      transform-origin: center;
      transform: scale(0.85);
      background: #2a8bcc;
    }
  }
}
</style>
