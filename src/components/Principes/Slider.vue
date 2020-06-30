<template>
  <div style="width:100%;height:728px;margin:0;padding:0;">
    <div :class="{ active: ActiveSlide == 4 }" id="first">
      <div
        v-show="ActiveSlide == 4"
        style="color:white;position: absolute;
                width: 429px;
                height: 48px;
                left: 624px;
                top: calc(50% - 48px/2 - 233px);"
        class="t2"
      >
        {{ $ml.get("p2s4Title") }}
      </div>
      <div
        v-show="ActiveSlide == 4"
        style="color:white;position: absolute;
                width: 483px;
                height: 72px;
                left: 624px;
                top: calc(50% - 72px/2 - 156px);"
        class="t4"
      >
        {{ $ml.get("p2s4Text") }}
      </div>
      <button
        v-show="ActiveSlide == 4 && !countdown"
        style="width:225px;height:50px"
        class="next-button t4"
      >
        {{ $ml.get("register") }}
      </button>
    </div>
    <div
      :class="{ active: ActiveSlide == 3, slidet3: ActiveSlide > 3 }"
      id="second"
    >
      <div
        v-show="ActiveSlide == 3"
        style="color:white;position: absolute;
                width: 429px;
                height: 48px;
                left: 83px;
                top: calc(50% - 48px/2 - 258px);"
        class="t2"
      >
        {{ $ml.get("p2s3Title") }}
      </div>
      <div
        v-show="ActiveSlide == 3"
        style="color:white;position: absolute;
                width: 483px;
                height: 180px;
                left: 83px;
                top: calc(50% - 180px/2 - 127px);"
        class="t4"
      >
        {{ $ml.get("p2s3Text") }}
      </div>
      <button
        v-show="ActiveSlide == 3 && !countdown"
        @click="SetActiveSlide(3)"
        class="next-button t4"
      >
        {{ $ml.get("p2Button") }}
      </button>
    </div>
    <div
      :class="{ active: ActiveSlide == 2, slidet2: ActiveSlide > 2 }"
      id="third"
    >
      <div
        v-show="ActiveSlide == 2"
        style="color:black;position: absolute;
                width: 429px;
                height: 48px;
                left: 627px;
                top: calc(50% - 48px/2 - 225px);"
        class="t2"
      >
        {{ $ml.get("p2s2Title") }}
      </div>
      <div
        v-show="ActiveSlide == 2"
        style="color:black;position: absolute;
                width: 483px;
                height: 180px;
                left: 627px;
                top: calc(50% - 180px/2 - 94px);"
        class="t4"
      >
        {{ $ml.get("p2s2Text") }}
      </div>
      <button
        style="color:black;border-color:black"
        v-show="ActiveSlide == 2 && !countdown"
        @click="SetActiveSlide(2)"
        class="next-button t4"
      >
        {{ $ml.get("p2Button") }}
      </button>
    </div>
    <div
      :class="{ active: ActiveSlide == 1, slidet1: ActiveSlide > 1 }"
      id="fourth"
    >
      <div
        v-show="ActiveSlide == 1"
        style="color:white;position: absolute;
                width: 181px;
                height: 48px;
                left: 723px;
                top: 305.72px;"
        class="t2"
      >
        {{ $ml.get("p2s1Title") }}
      </div>
      <div
        v-show="ActiveSlide == 1"
        style="color:white;position: absolute;
                width: 390.65px;
                height: 180px;
                left: 722px;
                top: 370.56px;"
        class="t4"
      >
        {{ $ml.get("p2s1Text") }}
      </div>

      <button
        v-show="ActiveSlide == 1 && !countdown"
        @click="SetActiveSlide(1)"
        class="next-button t4"
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
    };
  },
  methods: {
    SetActiveSlide(index) {
      this.ActiveSlide = index + 1;
      this.$store.commit("SetCountdown", 5);
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
  },
  created() {
    this.CountdownTimer();
  },
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
.next-button {
  width: 151px;
  height: 50px;
  position: absolute;
  right: 25px;
  top: 636px;
  background: transparent;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  color: #f2f2f2;
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
