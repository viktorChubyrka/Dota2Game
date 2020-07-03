<template>
  <div style="width:100%;height:728px;margin:0;padding:0;">
    <div :class="{ active: ActiveSlide == 4 }" id="first">
      <div
        :class="{textNormal:true,textShow:counter[3] == 0}"
        style="color:white;position: absolute;
                width: 429px;
                height: 48px;
                left: 624px;
                top: calc(50% - 48px/2 - 233px);"
        class="t2"
      >{{ $ml.get("p2s4Title") }}</div>
      <div
        :class="{textNormal:true,textShow:counter[3] == 0}"
        style="color:white;position: absolute;
                width: 483px;
                height: 72px;
                left: 624px;
                top: calc(50% - 72px/2 - 156px);"
        class="t4"
      >{{ $ml.get("p2s4Text") }}</div>
      <router-link to="/registration">
        <button
          style="width:225px;height:50px"
          @click="SetActiveSlide(4)"
          :class="{nextButton:true, t4:true,showBtn:ActiveSlide == 4 && !countdown}"
        >{{ $ml.get("register") }}</button>
      </router-link>
    </div>
    <div :class="{ active: ActiveSlide == 3, slidet3: ActiveSlide > 3 }" id="second">
      <div
        :class="{textNormal:true,textShow:counter[2] == 0}"
        style="color:white;position: absolute;
                width: 429px;
                height: 48px;
                left: 83px;
                top: calc(50% - 48px/2 - 258px);"
        class="t2"
      >{{ $ml.get("p2s3Title") }}</div>
      <div
        :class="{textNormal:true,textShow:counter[2] == 0}"
        style="color:white;position: absolute;
                width: 483px;
                height: 180px;
                left: 83px;
                top: calc(50% - 180px/2 - 127px);"
        class="t4"
      >{{ $ml.get("p2s3Text") }}</div>
      <button
        @click="SetActiveSlide(3), CounterTimer(3)"
        :class="{nextButton:true, t4:true,showBtn:ActiveSlide == 3 && !countdown}"
      >{{ $ml.get("p2Button") }}</button>
    </div>
    <div :class="{ active: ActiveSlide == 2, slidet2: ActiveSlide > 2 }" id="third">
      <div
        :class="{textNormal:true,textShow:ActiveSlide == 2 && counter[1] == 0}"
        style="color:black;position: absolute;
                width: 429px;
                height: 48px;
                left: 627px;
                top: calc(50% - 48px/2 - 225px);"
        class="t2"
      >{{ $ml.get("p2s2Title") }}</div>
      <div
        :class="{textNormal:true,textShow:counter[1] == 0}"
        style="color:black;position: absolute;
                width: 483px;
                height: 180px;
                left: 627px;
                top: calc(50% - 180px/2 - 94px);"
        class="t4"
      >{{ $ml.get("p2s2Text") }}</div>
      <button
        style="color:black;border-color:black"
        @click="SetActiveSlide(2), CounterTimer(2)"
        :class="{nextButton:true, t4:true,showBtn:ActiveSlide == 2 && !countdown}"
      >{{ $ml.get("p2Button") }}</button>
    </div>
    <div :class="{ active: ActiveSlide == 1, slidet1: ActiveSlide > 1 }" id="fourth">
      <div
        :class="{textNormal:true,textShow:counter[0] == 0}"
        style="color:white;position: absolute;
                width: 181px;
                height: 48px;
                left: 723px;
                top: 305.72px;"
        class="t2"
      >{{ $ml.get("p2s1Title") }}</div>
      <div
        :class="{textNormal:true,textShow:counter[0] == 0}"
        style="color:white;position: absolute;
                width: 390.65px;
                height: 180px;
                left: 722px;
                top: 370.56px;"
        class="t4"
      >{{ $ml.get("p2s1Text") }}</div>

      <button
        @click="SetActiveSlide(1), CounterTimer(1)"
        :class="{nextButton:true, t4:true,showBtn:ActiveSlide == 1 && !countdown}"
      >{{ $ml.get("p2Button") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ActiveSlide: 1,
      countdown: 5000,
      counter: [0, 1, 1, 1]
    };
  },
  methods: {
    SetActiveSlide(index) {
      this.ActiveSlide = index + 1;
      this.$store.commit("SetCountdown", 4);
      this.countdown = this.$store.getters.countdown;
      this.CountdownTimer();
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
    }
  },
  created() {
    this.CountdownTimer();
  }
};
</script>
<style>
.active {
  width: 1132px !important;
}
.slidet1 {
  right: 1524px !important;
}
.slidet2 {
  right: 1328px !important;
}
.slidet3 {
  right: 1132px !important;
}
.nextButton {
  width: 151px;
  height: 50px;
  position: absolute;
  right: 25px;
  top: 636px;
  opacity: 0;
  background: transparent;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  color: #f2f2f2;
  transition: opacity 1s;
}
.nextButton:hover {
  background: #f2f2f2;
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

.showBtn {
  opacity: 1;
}

#first {
  width: 196px;
  height: 728px;
  position: absolute;
  right: 0px;
  z-index: 4;
  background: url(../../assets/Principes/fourth.jpg) no-repeat;
  transition: width 1s;
}
#second {
  width: 196px;
  height: 728px;
  position: absolute;
  right: 196px;
  z-index: 3;
  background: url(../../assets/Principes/third.jpg) no-repeat;
  transition: width 1s, right 1s;
}
#third {
  width: 196px;
  height: 728px;
  position: absolute;
  right: 392px;
  z-index: 2;
  background: url(../../assets/Principes/second.jpg) no-repeat;
  transition: width 1s, right 1s;
}

#fourth {
  width: 196px;
  height: 728px;
  position: absolute;
  right: 588px;
  z-index: 1;
  background: url(../../assets/Principes/first.jpg) no-repeat;
  transition: width 1s, right 1s;
}
</style>
