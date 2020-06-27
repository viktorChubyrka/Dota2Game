<template>
  <div style="width:100%;height:728px;margin:0;padding:0;">
    <div :class="{active:ActiveSlide == 4}" id="first">
      <div
        v-show="ActiveSlide == 4 "
        style="color:white;position: absolute;
                width: 429px;
                height: 48px;
                left: 624px;
                top: calc(50% - 48px/2 - 233px);"
        class="t2"
      >Забери свой приз</div>
      <div
        v-show="ActiveSlide == 4 "
        style="color:white;position: absolute;
                width: 483px;
                height: 72px;
                left: 624px;
                top: calc(50% - 72px/2 - 156px);"
        class="t4"
      >Любая достойная победа вознаграждается. Пускай победит сильнейший</div>
      <button
        v-show="ActiveSlide == 4 && !Countdown"
        style="width:225px;height:50px"
        class="next-button t4"
      >Регистрация</button>
    </div>
    <div :class="{active:ActiveSlide == 3,slidet3:ActiveSlide>3}" id="second">
      <div
        v-show="ActiveSlide == 3 "
        style="color:white;position: absolute;
                width: 429px;
                height: 48px;
                left: 83px;
                top: calc(50% - 48px/2 - 258px);"
        class="t2"
      >Поиск игры</div>
      <div
        v-show="ActiveSlide == 3 "
        style="color:white;position: absolute;
                width: 483px;
                height: 180px;
                left: 83px;
                top: calc(50% - 180px/2 - 127px);"
        class="t4"
      >В вашем личном кабинете вы сможете создать или найти уже готовую игру, выполнив определённые условия участия. Если период ожидания покажется вам долгим, то клуб всегда оповестит вас о предстоящих играх.</div>
      <button
        v-show="ActiveSlide == 3 && !Countdown"
        @click="SetActiveSlide(3)"
        class="next-button t4"
      >Далее</button>
    </div>
    <div :class="{active:ActiveSlide == 2,slidet2:ActiveSlide>2}" id="third">
      <div
        v-show="ActiveSlide == 2 "
        style="color:black;position: absolute;
                width: 429px;
                height: 48px;
                left: 627px;
                top: calc(50% - 48px/2 - 225px);"
        class="t2"
      >Активация клубного пропуска</div>
      <div
        v-show="ActiveSlide == 2 "
        style="color:black;position: absolute;
                width: 483px;
                height: 180px;
                left: 627px;
                top: calc(50% - 180px/2 - 94px);"
        class="t4"
      >Завершив регистрацию, вы получаете доступ к своему личному кабинету. В этом разделе вы сможете ознакомиться с правилами клуба и активировать счет, чтобы у вас была возможность делать игровые взносы.</div>
      <button
        style="color:black;border-color:black"
        v-show="ActiveSlide == 2 && !Countdown"
        @click="SetActiveSlide(2)"
        class="next-button t4"
      >Далее</button>
    </div>
    <div :class="{active:ActiveSlide == 1,slidet1:ActiveSlide>1}" id="fourth">
      <div
        v-show="ActiveSlide == 1 "
        style="color:white;position: absolute;
                width: 181px;
                height: 48px;
                left: 723px;
                top: 305.72px;"
        class="t2"
      >Регистрация</div>
      <div
        v-show="ActiveSlide == 1"
        style="color:white;position: absolute;
                width: 390.65px;
                height: 180px;
                left: 722px;
                top: 370.56px;"
        class="t4"
      >В любом клубе есть участники. Задайтесь вопросом: "как попасть в клуб?". Очень просто. Нажав на кнопку регистрации, вам будет открыт бланк для заполнения нужной информации.</div>

      <button
        v-show="ActiveSlide == 1 && !Countdown"
        @click="SetActiveSlide(1)"
        class="next-button t4"
      >Далее</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ActiveSlide: 1,
      ActiveButton: false,
      Countdown: 5
    };
  },
  methods: {
    SetActiveSlide(index) {
      this.ActiveSlide = index + 1;
      this.Countdown = 5;
      this.CountdownTimer();
    },
    CountdownTimer() {
      if (this.Countdown > 0) {
        setTimeout(() => {
          this.Countdown -= 1;
          this.CountdownTimer();
        }, 1000);
      }
    }
  },
  created() {
    this.CountdownTimer();
  }
};
</script>
<style >
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