<template>
  <div style="width:90%;height:67.4074074074074vh;margin:0;padding:0;">
    <div :class="{ active: ActiveSlide == 4 }" id="first">
      <div :class="{ textNormal: true, textShow: counter[3] == 0 }" class="t2">
        {{ $ml.get("p2s4Title") }}
      </div>
      <div :class="{ textNormal: true, textShow: counter[3] == 0 }" class="t4">
        {{ $ml.get("p2s4Text") }}
      </div>
      <router-link to="/registration">
        <button
          style="width:20.833333333333332vh;height:4.62962962962963vh"
          @click="SetActiveSlide(4)"
          :class="{
            nextButton: true,
            hideBtn: true,
            t4: true,
            showBtn: ActiveSlide == 4 && !countdown,
          }"
        >
          {{ $ml.get("register") }}
        </button>
      </router-link>
    </div>
    <div
      :class="{ active: ActiveSlide == 3, slidet3: ActiveSlide > 3 }"
      id="second"
    >
      <div :class="{ textNormal: true, textShow: counter[2] == 0 }" class="t2">
        {{ $ml.get("p2s3Title") }}
      </div>
      <div :class="{ textNormal: true, textShow: counter[2] == 0 }" class="t4">
        {{ $ml.get("p2s3Text") }}
      </div>
      <button
        @click="SetActiveSlide(3), CounterTimer(3)"
        :class="{
          nextButton: true,
          hideBtn: true,
          t4: true,
          showBtn: ActiveSlide == 3 && !countdown,
        }"
      >
        {{ $ml.get("p2Button") }}
      </button>
    </div>
    <div
      :class="{ active: ActiveSlide == 2, slidet2: ActiveSlide > 2 }"
      id="third"
    >
      <div
        :class="{
          textNormal: true,
          textShow: ActiveSlide == 2 && counter[1] == 0,
        }"
        style="color:#000000"
        class="t2"
      >
        {{ $ml.get("p2s2Title") }}
      </div>
      <div
        style="color:#000000"
        :class="{ textNormal: true, textShow: counter[1] == 0 }"
        class="t4"
      >
        {{ $ml.get("p2s2Text") }}
      </div>
      <button
        style="color:black;border-color:black"
        @click="SetActiveSlide(2), CounterTimer(2)"
        :class="{
          nextButton: true,
          hideBtn: true,
          t4: true,
          showBtn: ActiveSlide == 2 && !countdown,
        }"
      >
        {{ $ml.get("p2Button") }}
      </button>
    </div>
    <div
      :class="{ active: ActiveSlide == 1, slidet1: ActiveSlide > 1 }"
      id="fourth"
    >
      <div :class="{ textNormal: true, textShow: counter[0] == 0 }" class="t2">
        {{ $ml.get("p2s1Title") }}
      </div>
      <div :class="{ textNormal: true, textShow: counter[0] == 0 }" class="t4">
        {{ $ml.get("p2s1Text") }}
      </div>

      <button
        @click="SetActiveSlide(1), CounterTimer(1)"
        :class="{
          nextButton: true,
          hideBtn: true,
          t4: true,
          showBtn: ActiveSlide == 1 && !countdown,
        }"
      >
        {{ $ml.get("p2Button") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ActiveSlide: 1,
      countdown: 5000,
      counter: [0, 1, 1, 1],
    };
  },
  methods: {
    SetActiveSlide(index) {
      this.ActiveSlide = index + 1;
      this.$store.commit("SetCountdown", 4);
      this.countdown = this.$store.getters.countdown;
      this.CountdownTimer();
      if (index == 4)
        this.$store.dispatch("CheckSession", { i: 2, context: this });
    },
    CountdownTimer() {
      if (this.$store.getters.countdown > 0) {
        setTimeout(() => {
          this.$store.commit("SetCountdown", this.$store.getters.countdown - 1);
          this.countdown = this.$store.getters.countdown;
          this.CountdownTimer();
        }, 1000);
      }
    },
    CounterTimer(i) {
      this.counter[i - 1] = 1;
      setTimeout(() => (this.counter[i] -= 1), 500);
    },
  },
  created() {
    this.CountdownTimer();
  },
};
</script>
<style>
div.active {
  width: 70% !important;
  z-index: 10 !important;
}
.active:hover {
  box-shadow: 0 0 10px 6px #1f2430;
}
.slidet1 {
  right: 90% !important;
  padding: 0 !important;
}
.slidet2 {
  right: 80% !important;
  padding: 0 !important;
}
.slidet3 {
  right: 70% !important;
  padding: 0 !important;
}
.nextButton {
  width: 13.981481481481481vh;
  height: 4.62962962962963vh;
  position: absolute;
  right: 2.314814814814815vh;
  top: 58.888888888888886vh;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  color: #f2f2f2;
  -webkit-transition: background-color 1s;
  -moz-transition: background-color 1s;
  -ms-transition: background-color 1s;
  -o-transition: background-color 1s;
  transition: background-color 1s;
}
.nextButton:hover {
  background-color: #f2f2f2;
  border: #292f40;
  color: #2a2c2f;
}
.textNormal {
  opacity: 0;
  transition: opacity 1s;
}
.textShow {
  opacity: 1;
}
.hideBtn {
  opacity: 0;
  transition: opacity 0.5s;
}
.showBtn {
  opacity: 1;
}

#first {
  width: 10%;
  height: 67.4074074074074vh;
  position: absolute;
  right: 0;
  z-index: 4;
  background: url(../../assets/Principes/fourth.jpg) no-repeat;
  transition: padding 1s, width 1s, box-shadow 0.5s;
  background-size: cover;
  background-position: left center;
  box-sizing: border-box;
}
#first.active {
  padding: 5vh 0 0 40%;
}
#second {
  width: 10%;
  height: 67.4074074074074vh;
  position: absolute;
  right: 10%;
  z-index: 3;
  background: url(../../assets/Principes/third.jpg) no-repeat;
  transition: padding 1s, width 1s, right 1s, box-shadow 0.5s;
  background-size: cover;
  background-position: left center;
  box-sizing: border-box;
}
#second.active {
  padding: 5vh 40% 0 5%;
}
#third {
  width: 10%;
  height: 67.4074074074074vh;
  position: absolute;
  right: 20%;
  z-index: 2;
  background: url(../../assets/Principes/second.jpg) no-repeat;
  transition: padding 1s, width 1s, right 1s, box-shadow 0.5s;
  background-size: cover;
  background-position: left center;
  box-sizing: border-box;
}
#third.active {
  padding: 10vh 0 0 43.5%;
}
#fourth {
  width: 10%;
  height: 67.4074074074074vh;
  position: absolute;
  right: 30%;
  z-index: 1;
  background: url(../../assets/Principes/first.jpg) no-repeat;
  transition: padding 1s, width 1s, right 1s, box-shadow 0.5s;
  background-size: cover;
  background-position: left center;
  box-sizing: border-box;
}
#fourth.active {
  padding: 28.24074074074074vh 0 0 43.5%;
}

#fourth .textNormal {
  width: 100%;
  padding: 1.6666666666666665vh 1.6666666666666665vh 0;
  box-sizing: border-box;
}
#third .textNormal {
  width: 100%;
  padding: 1.6666666666666665vh 1.6666666666666665vh 0;
  box-sizing: border-box;
}
#second .textNormal {
  width: 100%;
  padding: 1.6666666666666665vh 1.6666666666666665vh 0;
  box-sizing: border-box;
}
#first .textNormal {
  width: 100%;
  padding: 1.6666666666666665vh 1.6666666666666665vh 0;
  box-sizing: border-box;
}
</style>
