<template>
  <div :class="{ show: show, content: true }">
    <div class="t2 oldQuestion slide-right">{{ $ml.get("pravil") }}</div>
    <ul class="answersList">
      <div class="t2 oldQuestion2 slide-right">Общие положения</div>
      <li :id="`q${i}`" v-for="i in 9" :key="i">
        <div class="t5 liText">
          {{ $ml.get(`rule${i}1`) }}
        </div>
      </li>
      <div class="t2 oldQuestion2 slide-right">Правила поведения</div>
      <li :id="`q${i}`" v-for="i in 4" :key="i">
        <div class="t5 liText">
          {{ $ml.get(`rule${i}2`) }}
        </div>
      </li>
      <div class="t2 oldQuestion2 slide-right">
        Правила проведения игр Solo формата
      </div>
      <li :id="`q${i}`" v-for="i in 13" :key="i">
        <div class="t5 liText">
          {{ $ml.get(`rule${i}3`) }}
        </div>
      </li>
      <div class="t2 oldQuestion2 slide-right">
        Правила проведения игр Party формата
      </div>
      <li :id="`q${i}`" v-for="i in 12" :key="i">
        <div
          :style="`${i == 12 ? 'margin-bottom:440px' : ''}`"
          class="t5 liText"
        >
          {{ $ml.get(`rule${i}4`) }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yq: () => {
        return this.$ml.get("tayQ");
      },
      show: false,
      scroll: 0,
      focus: false,
      topic: "",
      reportDiscription: "",
    };
  },
  created() {
    setTimeout(() => (this.show = true), 10);
    if (+this.$route.params.reportTopic) {
      this.topic = this.$ml.get("tellAbout");
    }
  },
  computed: {},
  methods: {
    SendReport() {
      let user = this.$store.getters.userData;
      if (this.reportDiscription && this.topic)
        this.$store.dispatch("SendReport", {
          login: user.login,
          email: user.email,
          reportTopic: this.topic,
          reportDescription: this.reportDiscription,
        });
      this.topic = "";
      this.reportDiscription = "";
    },
  },
};
</script>
<style scoped>
.rules {
  width: 100%;
}
.oldQLink li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #828282;
}
.slide-right {
  color: rgb(101, 100, 100);
  transition: color 0.5s;
}
.slide-right:hover {
  color: #1f2430;
}
.text-to-left {
  font-weight: 600;
}
.oldQLink li {
  padding-left: 8px;
  padding-right: 8px;
  width: 410px;
  transition: box-shadow 0.3s, margin-left 0.3s;
}
.oldQLink li:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
  cursor: pointer;
  margin-left: 20px;
}
.oldQLink li a {
  transition: font-weight 0.3s;
}
.oldQLink li:hover a {
  font-weight: bold;
}
.linkTo {
  text-decoration: none;
}

.content {
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
html {
  scroll-behavior: smooth !important;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.oldQLink {
  position: fixed;
  margin: 0;
  padding: 0;
  width: 400px;
  height: 386px;
  left: 1290px;
  top: 288px;
  list-style-type: none;
}
.liTitile {
  width: 100%;
  margin-bottom: 14px;
  cursor: default;
}
.liText {
  background-color: #ececec;
  width: 80%;
  margin-bottom: 32px;
  padding-left: 10px;
  transition: background-color 0.5s, box-shadow 0.5s;
  cursor: default;
}
.liText:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
}
.themeSelect {
  position: absolute;
  width: 789px;
  height: 44px;
  left: 0px;
  top: 187px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 6px 21px;
  color: #1f2430;
}
.themeSelect option {
  color: #1f2430;
}
.suppotrT {
  position: absolute;
  width: 198px;
  height: 58px;
  left: 0px;
  top: 42px;
}
.supportST {
  position: absolute;
  width: 261px;
  height: 38px;
  left: 0;
  top: 132px;
  transition: color 0.5s, margin-left 0.5s;
}
.supportMessage {
  position: absolute;
  min-width: 789px;
  min-height: 216px;
  max-width: 789px;
  max-height: 216px;
  left: 0;
  padding: 17px 21px;
  top: 250px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 400;
}
.buttonSend {
  position: absolute;
  width: 170px;
  height: 40px;
  left: 619px;
  top: 482px;
  background-color: #1f2430;
  border-width: 0px;
  border-radius: 6px;
  color: white;
  transition: color 0.5s, background-color 0.5s;
}
.buttonSend:hover {
  color: black;
  border: 1px solid #bdbdbd;
  background-color: rgb(236, 240, 239);
}
.oldQuestion {
  position: absolute;
  width: 311px;
  height: 48px;
  left: 0;
  top: 20px;
}
.answersList {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 100px;
  list-style-type: none;
  margin-left: 10px;
}
</style>
