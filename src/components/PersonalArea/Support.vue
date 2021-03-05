<template>
  <div :class="{ show: show, content: true }">
    <div class="controll-container">
      <div id="scroll-area" class="support-column">
        <div class="t1 suppotrT slide-right">{{ $ml.get("sup") }}</div>
        <div :class="`t3 supportST ${focus ? 'text-to-left' : ''}`">
          {{ $ml.get("writeSup") }}
        </div>
        <select
          @focus="focus = true"
          @focusout="focus = false"
          class="themeSelect t5"
          name="Тема"
          id="1"
          v-model="topic"
        >
          <option style="color:#828282" value disabled selected>{{
            $ml.get("topic")
          }}</option>
          <option>{{ $ml.get("addEnterMoney") }}</option>
          <option>{{ $ml.get("tellAbout") }}</option>
          <option>{{ $ml.get("else") }}</option>
        </select>
        <textarea
          @focus="focus = true"
          @focusout="focus = false"
          class="t5 supportMessage"
          :placeholder="yq()"
          type="textarea"
          id="textArea"
          v-model="reportDiscription"
        />
        <button @click="SendReport()" class="t4 buttonSend">
          {{ $ml.get("supBut") }}
        </button>
        <div class="t2 oldQuestion slide-right">{{ $ml.get("pQ") }}</div>
        <ul class="answersList">
          <li :id="`q${i}`" v-for="i in 7" :key="i">
            <div class="t3 liTitile">
              {{ i }}.
              <span class="slide-right">{{ $ml.get(`q${i}`) }}</span>
            </div>
            <div class="t5 liText">
              {{ $ml.get(`a${i}`) }}
            </div>
          </li>
        </ul>
      </div>
      <div class="support-column">
        <ul class="oldQLink">
          <li style="margin-bottom:10px" :to="`#q${i}`" v-for="i in 7" :key="i">
            <a class="t5 linkTo" :href="`#q${i}`">
              {{ i }}. {{ $ml.get(`q${i}`) }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="scroll_area_height / 2 < scroll_area_scroll_top"
      @click="scrollUp()"
      class="scrollTopBtn"
    >
      <i class="fa fa-chevron-up"></i>
    </div>
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
      scroll_area_scroll_top: null,
      scroll_area_height: null,
    };
  },
  watch: {
    show() {
      let scroll_container = document.getElementById("scroll-area");
      scroll_container.addEventListener("scroll", (event) => {
        this.scroll_area_scroll_top = event.target.scrollTop;
        this.scroll_area_height = event.target.offsetHeight;
      });
    },
  },
  created() {
    setTimeout(() => (this.show = true), 10);
    if (+this.$route.params.reportTopic) {
      this.topic = this.$ml.get("tellAbout");
    }
  },
  computed: {},
  methods: {
    scrollUp() {
      let scroll_container = document.getElementById("scroll-area");
      scroll_container.scrollTop = 0;
    },
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
.controll-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.support-column {
  width: 40%;
  scroll-behavior: smooth;
}
.support-column:first-child {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;
  overflow-y: scroll;
  height: 77.22222222222221vh;
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
  padding-left: 0.7407407407407407vh;
  padding-right: 0.7407407407407407vh;
  width: 37.96296296296296vh;
  transition: box-shadow 0.3s, margin-left 0.3s;
}
.oldQLink li:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
  cursor: pointer;
  margin-left: 1.8518518518518516vh;
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
  margin-top: 3.888888888888889vh;
  margin-left: 10vh;
  width: 37.03703703703704vh;
  height: 35.74074074074074vh;
  list-style-type: none;
}
.liTitile {
  width: 100%;
  margin-bottom: 1.2962962962962963vh;
  cursor: default;
}
.liText {
  background-color: #ececec;
  width: 100%;
  margin-bottom: 2.962962962962963vh;
  padding: 0.9259259259259258vh;
  transition: background-color 0.5s, box-shadow 0.5s;
  cursor: default;
  box-sizing: border-box;
}
.liText:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
}
.themeSelect {
  width: 95%;
  margin-right: 5%;
  height: 4.0740740740740735vh;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 0.5555555555555555vh 1.9444444444444444vh;
  color: #1f2430;
  margin-bottom: 1.759259259259259vh;
}
.themeSelect option {
  color: #1f2430;
}
.suppotrT {
  margin: 3.888888888888889vh 0 2.962962962962963vh;
  width: 100%;
}
.supportST {
  transition: color 0.5s, margin-left 0.5s;
  margin-bottom: 1.574074074074074vh;
  width: 100%;
}
.supportMessage {
  width: 95%;
  margin-right: 5%;
  min-height: 20vh;
  resize: none;
  padding: 1.574074074074074vh 1.9444444444444444vh;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 0.37037037037037035vh;
  font-weight: 400;
  margin-bottom: 1.759259259259259vh;
}
.buttonSend {
  width: 15.74074074074074vh;
  height: 3.7037037037037033vh;
  margin-right: 5%;
  background-color: #1f2430;
  border-width: 0px;
  border-radius: 0.5555555555555555vh;
  color: white;
  transition: color 0.5s, background-color 0.5s;
}
.buttonSend:hover {
  color: black;
  border: 1px solid #bdbdbd;
  background-color: rgb(236, 240, 239);
}
.oldQuestion {
  width: 100%;
  margin: 7.592592592592592vh 0 2.962962962962963vh;
}
.answersList {
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
  margin-left: 0.9259259259259258vh;
}
.answersList li {
  padding: 1.4vh;
}
</style>
