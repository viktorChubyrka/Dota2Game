<template>
  <div>
    <div class="t1 suppotrT">Поддержка</div>
    <div class="t3 supportST">Написать в поддержку</div>
    <textarea class="t5 supportMessage" placeholder="Расскажите о проблеме" type="textarea" />
    <button class="t4 buttonSend">Обратиться</button>
    <div class="t2 oldQuestion">Популярные вопросы</div>
    <ul class="answersList">
      <li></li>
    </ul>
  </div>
</template>
<style >
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
  width: 789px;
  height: 216px;
  left: 0;
  padding: 17px 21px;
  top: 194px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
}
.buttonSend {
  position: absolute;
  width: 170px;
  height: 40px;
  left: 619px;
  top: 428px;
  background: #1f2430;
  border-radius: 6px;
  color: white;
}
.oldQuestion {
  position: absolute;
  width: 311px;
  height: 48px;
  left: 0;
  top: 517px;
}
.answersList {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 296px;
  height: 38px;
  left: 0;
  top: 597px;
  list-style-type: none;
}
</style>