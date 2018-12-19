import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: {
      show: false,
      content: "",
      btnCallback: "",
      btnTitle: "",
      title: ""
    },
    date: {
      isShow: false, // 是否显示
      hasTrans: false,
      config: {
        default: [
          [2018, 9],
          [
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate()
          ]
        ],
        showAllText: true,
        showDoubleNum: false,
        selectResult: [],
        canRepeat: false,
        intervalTimeType: ""
      }
    },
    country: "中國 +86",
    onscroll: {
      withBottom: 0
    },
    hasFooter: false
  },
  mutations: {
    hideFooter: state => {
      state.hasFooter = false;
    },
    showFooter: state => {
      state.hasFooter = true;
    },
    hideModal: state => {
      state.alert.show = false;
    },
    showModal: (state, data = true) => {
      function* entries(obj) {
        for (let key of Object.keys(obj)) {
          yield [key, obj[key]];
        }
      }
      if (data) {
        for (let [key, value] of entries(data)) {
          state.alert[key] = value;
        }
      }
      state.alert.show = true;
    },
    configDateWrap: (state, data) => {
      if (
        data &&
        data.intervalTimeType === "end" &&
        !state.date.config.selectResult[0]
      ) {
        return false;
      }
      // 只把传来的值赋值，不传值用默认值
      function* entries(obj) {
        for (let key of Object.keys(obj)) {
          yield [key, obj[key]];
        }
      }
      if (data) {
        for (let [key, value] of entries(data)) {
          state.date.config[key] = value;
        }
      }
      state.date.isShow = true;
      state.date.hasTrans = true;
    },
    // 显示
    showDateWrap: state => {
      state.date.isShow = true;
    },
    // 隐藏
    hideDateWrap: state => {
      state.date.isShow = false;
    },
    // 确定
    sureDate: (state, data) => {
      state.date.config.selectResult = data;
    },
    // 初始化
    beDefault: state => {
      state.date.config.default = [
        [2018, 1, 1],
        [
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ]
      ];
      state.date.config.selectResult = [];
    },
    chooseTel: (state, data) => {
      state.country = data;
    },
    // 滚动加载更多
    setwithBottom: (state, data) => {
      state.onscroll.withBottom = data;
    }
  }
});
