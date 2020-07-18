<template>
  <div class="main-div4">
    <Header headerColor="#f2f2f2" class="header" />
    <div class="logo"></div>
    <div
      style="color:white;position: absolute;
left: 200px;
top: 166px;"
      class="t1"
    >
      FAQ
    </div>
    <div>
      <div>
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
        style="color:white;position: absolute;
                    max-width:840px;
                    left: 879px;
                    top: 224px;"
      >
        <div :class="{ hiden: true, t2: true, show: show }">
          {{ $ml.get(`p4q${focused + 1}`) }}
        </div>
        <div
          style="margin-top:24px;"
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
  left: 200px;
  top: 60px;
  width: 174px;
  height: 36px;
}

.header {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
  color: white;
}
.main-div4 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(297.51deg, #292f40 0%, #9b9ea7 100%), #f2f2f2;
}
.alfa {
  position: absolute;
  left: 200px;
  top: 904px;
  color: white;
}

#FAQUl {
  padding: 0;
  position: absolute;
  left: 200px;
  top: 214px;
  list-style-type: none;
}
#FAQUl li {
  padding: 10px 0;
  color: #bdbdbd;
  max-width: 523px;
  cursor: pointer;
}
#FAQUl li:hover {
  color: #adb4ca;
}
.focusedLi {
  color: #f2f2f2 !important;
}
</style>
