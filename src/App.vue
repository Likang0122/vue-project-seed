<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="children_view" ref="children_view"></router-view>
    </transition>
    <modal></modal>
    <footers :active="4" v-show="showFooter"></footers>
  </div>
</template>
<script>
import modal from "./components/modal";
import footers from "./components/footer";
export default {
  name: "App",
  data() {
    return {
      scrollRouteArr: [
        'demo',
        'wallet',
        'myBalance',
        'extensionPower',
        'communityPower',
        'Assets',
        'commonProblem',
        'myFriend',
      ],
      transitionName: ""
    };
  },
  mounted() {
    document.getElementById("app").addEventListener("scroll", this.toggleHead);
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  },
  computed: {
    showFooter() {
      console.log(this.$store.state.hasFooter);
      return this.$store.state.hasFooter;
    }
  },
  methods: {
    toggleHead(e) {
      if (this.scrollRouteArr.indexOf(this.$route.name) === -1) return false;
      let scrollBottom = document.getElementsByClassName("children_view")[0].clientHeight - document.getElementById("app").scrollTop - window.innerHeight;
      if (scrollBottom <= 50) this.$store.commit('setwithBottom', scrollBottom);
    }
  },
  components: {
    modal,
    footers
  }
};
</script>

<style lang="scss">
@import "./assets/css/reset.scss";
#app {
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  position: relative;
  background: #f5f5f5;
  .children_view {
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 300ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .public_no_data {
    text-align: center;
    color: #999;
    font-size: 28px;
    padding: 150px 0;
  }
}
</style>
