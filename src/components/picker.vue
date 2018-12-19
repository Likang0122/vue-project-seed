<template>
  <div id="picker" v-show="isShowWrap">
    <div class="date_wrap">
      <span class="cancel" @click="close">取消</span>
      <span class="sure" @click="sureSelect">确定</span>
      <div class="select_wrap">
        <div class="year_wrap">
          <span class="year" v-for="(item, index) in yearArr" :key="index" :class="{'active': index === activeYear}" @click="activeYear = index">{{`${item}${typeDetails.showAllText ? "" : ""}`}}</span>
        </div>
        <div class="month_wrap">
          <span class="month" v-for="(item, index) in monthArr" :key="index" :class="{'active': index === activeMonth}" @click="activeMonth = index">{{`${item}${typeDetails.showAllText ? "" : ""}`}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "picker",
  data() {
    return {
      activeYear: 0,
      activeMonth: 0,
      activeDay: 0,
      month: {}
    };
  },
  computed: {
    isShowWrap() {
      return this.$store.state.date.isShow;
    },
    yearArr() {
      let arr = [];
      for (
        let i = parseFloat(this.$store.state.date.config.default[1][0]);
        i <= parseFloat(this.$store.state.date.config.default[1][0]);
        i++
      ) {
        arr.push(i);
      }
      this.activeYear = arr.length - 1;
      return arr;
    },
    monthArr() {
      if (this.activeYear === 0 && this.yearArr.length !== 1) {
        let arr = [];
        for (
          let i = parseFloat(this.$store.state.date.config.default[0][1]);
          i <= 12;
          i++
        ) {
          arr.push(i);
        }
        this.activeMonth = arr.length - 1;
        return arr;
      } else if (this.activeYear === this.yearArr.length - 1) {
        let arr = [];
        for (
          let i = 1;
          i <= parseFloat(this.$store.state.date.config.default[1][1]);
          i++
        ) {
          arr.push(i);
        }
        this.activeMonth = arr.length - 1;
        return arr;
      } else {
        this.activeMonth = 11;
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      }
    },
    typeDetails() {
      return this.$store.state.date.config;
    }
  },
  methods: {
    close() {
      this.$store.commit("hideDateWrap");
    },
    sureSelect() {
      let result = [];
      let str = [];
      result.push(this.activeYear);
      str.push(this.yearArr[this.activeYear]);
      result.push(this.activeMonth);
      str.push(this.monthArr[this.activeMonth]);
      this.$store.commit("sureDate", str);
      this.close();
    },
    chooseMonth(type, index) {
      this.activeMonth.splice(type, 1, index);
    }
  }
};
</script>
<style lang="scss">
#picker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 110;
  .date_wrap {
    position: absolute;
    bottom: 30vh;
    left: 0;
    bottom: 0;
    width: 100%;
    .cancel {
      display: inline-block;
      width: 50%;
      text-align: center;
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      background-color: #91cbf1;
      border-bottom: 1px solid #9abcd3;
      color: #000;
    }
    .sure {
      display: inline-block;
      width: 50%;
      text-align: center;
      color: #fff;
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      background-color: #007acc;
      border-bottom: 1px solid #9abcd3;
    }
    .select_wrap {
      background-color: #fff;
      height: 540px;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      .year_wrap {
        max-height: 540px;
        width: 50%;
        display: flex;
        overflow-y: auto;
        align-items: center;
        background: #fff;
        .year {
          width: 100%;
          text-align: center;
          height: 56px;
          line-height: 56px;
          font-size: 24px;
          &.active {
            color: #fff;
            font-size: 30px;
            background: #007acc;
          }
          &.can_not_select {
            color: #999;
            box-shadow: none;
          }
        }
      }
      .month_wrap {
        max-height: 540px;
        width: 50%;
        display: flex;
        align-items: center;
        overflow-y: auto;
        flex-wrap: wrap;
        background: #fff;
        .month {
          text-align: center;
          height: 56px;
          line-height: 56px;
          width: 100%;
          font-size: 24px;
          &.active {
            color: #fff;
            font-size: 30px;
            background: #007acc;
          }
          &.can_not_select {
            color: #999;
            box-shadow: none;
          }
        }
      }
    }
  }
}
</style>
