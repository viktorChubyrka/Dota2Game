<template>
  <div class="main-div3">
    <Header class="header" />
    <div class="logo"></div>
    <img
      style="position: absolute;
width: 464px;
height: 612px;
left: 200px;
top: 208px;"
      src="../assets/AboutUs/dedy.jpg"
      alt
    />
    <div
      style="color:white;position: absolute;
            width: 952px;
            height: 252px;
            left: 768px;
            top: 252px;font-style: italic;"
      class="t4"
    >
      Будучи игроком в "DotA" я всегда мечтал попасть в ряды лучших, иметь возможность провести эти напряженные
      50 минут с профессионалами своего дела и, кончено же, побеждать, может быть, даже найти товарищей и в дальнейшем
      напарников по команде. Но увы, по определённым причинам это не так просто. В нашем клубе есть место каждому, кто достоин этого,
      где узнав цену победы и поражения, любой сможет проявить себя в полной мере, показывая исключительную игру, ибо на кону стоит вопрос
      денежного вознаграждения, и быть уверенным в том, что это было не напрасно. Испытав на себе вкус сладости победы и горечи поражения
      в Darewin's Club ты узнаешь себе цену.
    </div>
    <div
      style="color:white;position: absolute;
            width: 951px;
            height: 144px;
            left: 768px;
            top: 544px;font-style: italic;"
      class="t4"
    >
      Я мог бы рассказать, какие мы классные и замечательные. Но это не в моих интересах. Ведь мы – нечто большее, чем просто клуб.
      Мы скорей сообщество, которое подходит далеко не каждому. А точнее – каждому, кто готов бороться и побеждать. Именно это и
      характеризует Darewin’s Club. Теперь задайте себе вопрос – вы готовы?
    </div>
    <div class="t4 alfa">Альфа версия</div>
    <ul class="t4 lengUl">
      <li>RU</li>
      <li>ENG</li>
    </ul>
  </div>
</template>
<script>
import Header from "../components/General/Header";
export default {
  components: { Header }
};
</script>
<style >
.main-div3 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(117.51deg, #000000 1.18%, #8a8d91 100%);
}
.header {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
  color: #f2f2f2;
}
.logo {
  background: url(../assets/DarewinLargeWhite.svg);
  position: relative;
  left: 200px;
  top: 60px;
  width: 174px;
  height: 36px;
}
.alfa {
  position: absolute;
  width: 133px;
  height: 36px;
  right: 1587px;
  top: 904px;
  color: #f2f2f2;
}
.lengUl {
  position: absolute;
  width: 31px;
  height: 36px;
  left: 1624px;
  top: 904px;
  margin: 0;
  padding: 0;
}
.lengUl li {
  display: inline;
  margin-right: 32px;
}
.lengUl li:first-child {
  color: #f2f2f2;
}
</style>