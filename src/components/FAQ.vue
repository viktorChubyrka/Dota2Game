<template>
  <div class="main-div4">
    <Header headerColor="#f2f2f2" class="header" />
    <div class="logo"></div>
    <div
      style="color:white;position: absolute;
left: 18.51851851851852vh;
top: 15.37037037037037vh;"
      :class="{ t1: true, hidetText: true, showText: $store.getters.anim4 }"
    >
      FAQ
    </div>
    <div>
      <div :class="{ hidetText: true, showText: $store.getters.anim4 }">
        <ul id="FAQUl">
          <li
            v-for="i in 10"
            :key="i"
            :class="{ focusedLi: i - 1 == focused, t5: true }"
            @click="ChangeQuestion(i - 1)"
          >
            {{ $ml.get(`p4q${i}`) }}
          </li>
        </ul>
      </div>
      <div
        :class="{ hidetText: true, showText: $store.getters.anim5 }"
        style="color:white;position: absolute;
                    max-width:77.77777777777777vh;
                    right: 15.38888888888889vh;
                    top: 20.74074074074074vh;"
      >
        <div :class="{ hiden: true, t2: true, show: show }">
          {{ $ml.get(`p4q${focused + 1}`) }}
        </div>
        <div
          style="margin-top:2.222222222222222vh;"
          :class="{ hiden: true, t4: true, show: show }"
        >
          {{ $ml.get(`p4t${focused + 1}`) }}
        </div>
      </div>
    </div>
    <Lang />
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
  </div>
</template>
<script>
import Header from "./General/Header";
import Lang from "./General/Lang";

export default {
  components: { Header, Lang },
  data() {
    return {
      show: true,
      focused: 0,
      CurrentQuestion: this.$ml.get("p4q1"),
      CurrentQuestionAnswer: this.$ml.get("p4t1"),
    };
  },
  methods: {
    ChangeQuestion(index) {
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
        this.focused = index;
      }, 500);
    },
  },
};
</script>
<style>
.show {
  opacity: 1 !important;
}
.hiden {
  opacity: 0;
  transition: opacity 0.25s;
}
.logo {
  background: url(../assets/DarewinLargeWhite.svg);
  position: relative;
  left: 13.51851851851852vh;
  top: 5.555555555555555vh;
  width: 16.11111111111111vh;
  height: 3.333333333333333vh;
}

.header {
  float: right;
  margin-top: 5.555555555555555vh;
  margin-right: 15.185185185185183vh;
  color: white;
}
.main-div4 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(297.51deg, #292f40 0%, #9b9ea7 100%), #f2f2f2;
}
.alfa {
  position: absolute;
  left: 18.51851851851852vh;
  top: 83.7037037037037vh;
  color: white;
}

#FAQUl {
  padding: 0;
  position: absolute;
  left: 18.51851851851852vh;
  top: 19.814814814814813vh;
  list-style-type: none;
}
#FAQUl li {
  padding: 0.9259259259259258vh 0;
  color: #bdbdbd;
  max-width: 523px;
  cursor: pointer;
  transition: margin-left 0.5s;
}
#FAQUl li:hover {
  color: #adb4ca;
  margin-left: 1.8518518518518516vh;
}
.focusedLi {
  color: #f2f2f2 !important;
}
</style>
