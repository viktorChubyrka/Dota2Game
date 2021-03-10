<template>
  <div class="no-money-pop-up">
    <div class="pop-up-back-drop"></div>
    <div class="pop-up-message">
      {{ $ml.get("noMoney") }}
      <div @click="$emit('close')" class="close-pop-up-btn">Ok</div>
    </div>
  </div>
</template>
<style scoped>
.no-money-pop-up {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pop-up-back-drop {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
}
.pop-up-message {
  position: relative;
  padding: 3vh;
  border-radius: 2vh;
  background: linear-gradient(242.49deg, #9b9ea7 0%, #2b344f 100%), #f2f2f2;
  text-align: center;
  font-size: 3vh;
  line-height: 4vh;
  color: #f2f2f2;
  width: 37vh;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate 1 ease 1s;
}
.close-pop-up-btn {
  width: 32vh;
  height: 2vh;
  margin-top: 2vh;
  border-radius: 10vh;
  position: absolute;
  bottom: 2vh;
  padding: 1vh 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f2f2f2;
  cursor: pointer;
  border: 1px solid #f2f2f2;
  font-size: 2vh;
  transition: background-color 0.5s, color 0.5s;
}
.close-pop-up-btn:hover {
  background-color: #f2f2f2;
  color: #2b344f;
}

@keyframes rotate {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>
