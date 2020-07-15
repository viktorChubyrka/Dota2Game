<template>
  <div :class="{show:show,content:true}">
    <div class="t1 suppotrT">{{ $ml.get("sup") }}</div>
    <div class="t3 supportST">{{$ml.get("writeSup")}}</div>
    <select class="themeSelect t5" value="Тема" name="Тема" id="1">
      <option value disabled selected>{{$ml.get("topic")}}</option>
      <option>{{$ml.get("addEnterMoney")}}</option>
      <option>{{$ml.get("tellAbout")}}</option>
      <option>{{$ml.get("else")}}</option>
    </select>
    <textarea class="t5 supportMessage" :placeholder="yq()" type="textarea" />
    <button class="t4 buttonSend">{{$ml.get("supBut")}}</button>
    <div class="t2 oldQuestion">{{$ml.get("pQ")}}</div>
    <ul class="answersList">
      <li :id="`q${i}`" v-for="i in 7" :key="i">
        <div class="t3 liTitile">{{$ml.get(`q${i}`)}}</div>
        <div class="t5 liText">{{$ml.get(`a${i}`)}}</div>
      </li>
    </ul>
    <ul class="oldQLink">
      <li style="margin-bottom:10px" v-for="i in 7" :key="i">
        <a style="color:#35A7FF" class="t5" :href="`#q${i}`">{{$ml.get(`q${i}`)}}</a>
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
      show: false
    };
  },
  created() {
    setTimeout(() => (this.show = true), 10);
  }
};
</script>
<style >
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
.oldQLink {
  position: absolute;
  width: 332px;
  height: 386px;
  left: 992px;
  top: 42px;
  list-style-type: none;
}
.liTitile {
  width: 785px;
  margin-bottom: 14px;
}
.liText {
  width: 785px;
  margin-bottom: 32px;
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
  color: #828282;
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
}
.buttonSend {
  position: absolute;
  width: 170px;
  height: 40px;
  left: 619px;
  top: 482px;
  background: #1f2430;
  border-radius: 6px;
  color: white;
}
.oldQuestion {
  position: absolute;
  width: 311px;
  height: 48px;
  left: 0;
  top: 675px;
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
}
</style>