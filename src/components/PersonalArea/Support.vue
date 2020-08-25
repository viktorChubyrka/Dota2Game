<template>
  <div :class="{ show: show, content: true }">
    <div class="t1 suppotrT slide-right">{{ $ml.get("sup") }}</div>
    <div :class="`t3 supportST ${focus?'text-to-left':''}`">{{ $ml.get("writeSup") }}</div>
    <select
      @focus="focus=true"
      @focusout="focus=false"
      class="themeSelect t5"
      value="Тема"
      name="Тема"
      id="1"
    >
      <option style="color:#828282" value disabled selected>{{ $ml.get("topic") }}</option>
      <option>{{ $ml.get("addEnterMoney") }}</option>
      <option>{{ $ml.get("tellAbout") }}</option>
      <option>{{ $ml.get("else") }}</option>
    </select>
    <textarea
      @focus="focus=true"
      @focusout="focus=false"
      class="t5 supportMessage"
      :placeholder="yq()"
      type="textarea"
      id="textArea"
    />
    <button class="t4 buttonSend">{{ $ml.get("supBut") }}</button>
    <div class="t2 oldQuestion slide-right">{{ $ml.get("pQ") }}</div>
    <ul class="answersList">
      <li :id="`q${i}`" v-for="i in 7" :key="i">
        <div class="t3 liTitile">
          {{i}}.
          <span class="slide-right">{{ $ml.get(`q${i}`)}}</span>
        </div>
        <div :style="`${i==7?'margin-bottom:410px':''}`" class="t5 liText">{{ $ml.get(`a${i}`) }}</div>
      </li>
    </ul>
    <ul class="oldQLink">
      <li style="margin-bottom:10px" :to="`#q${i}`" v-for="i in 7" :key="i">
        <a class="t5 linkTo" :href="`#q${i}`">
          {{i}}. {{
          $ml.get(`q${i}`)
          }}
        </a>
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
    };
  },
  created() {
    setTimeout(() => (this.show = true), 10);
  },
  computed: {},
  methods: {},
};
</script>
<style>
.oldQLink li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #828282;
}
.slide-right {
  font-weight: 100;
  transition: font-weight 0.5s;
}
.slide-right:hover {
  font-weight: 900;
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
  font-weight: bold !important;
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
  width: 785px;
  margin-bottom: 14px;
  cursor: default;
}
.liText {
  background-color: #ececec;
  width: 785px;
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
  transition: font-weight 0.1s, margin-left 0.5s;
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
  top: 625px;
}
.answersList {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 296px;
  height: 38px;
  left: 0;
  top: 755px;
  list-style-type: none;
  margin-left: 10px;
}
</style>
