<template>
  <div
    :style="`position:absolute;top:${top}px;left:${left}px;`"
    class="tutorial-container"
  >
    <div class="tutorial-body">
      <slot></slot>
    </div>
    <button @click="$emit('submit')" class="tutorial-button ">Ok</button>
    <button @click="$emit('skip')" class="tutorial-button2 ">
      {{ $ml.get("tutorialSkip") }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    top: {
      type: Number,
      default: 0,
    },
    left: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style>
.tutorial-container {
  z-index: 100;
  border-radius: 2.2222vh;
  padding: 2.222vh 12vh 2.222vh 2.222vh;
  background: linear-gradient(297.51deg, #292f40 0%, #9b9ea7 100%), #f2f2f2;
  max-width: 30%;
  min-height: 8.5vh;
}
.tutorial-body {
  font-size: 2vh;
  line-height: 4vh;
  color: #f2f2f2;
}
.tutorial-button {
  cursor: pointer;
  position: absolute;
  top: 2.222vh;
  right: 2.222vh;
  padding: 1.11vh;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  color: #f2f2f2;
  font-size: 1.444vh;
  -webkit-transition: background-color 1s;
  -moz-transition: background-color 1s;
  -ms-transition: background-color 1s;
  -o-transition: background-color 1s;
  transition: background-color 1s;
}
.tutorial-button:hover {
  background-color: #f2f2f2;
  color: #2a2c2f;
}
.tutorial-button2 {
  cursor: pointer;
  position: absolute;
  top: 7vh;
  right: 2.222vh;
  padding: 1.11vh;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  color: #f2f2f2;
  font-size: 1.444vh;
  -webkit-transition: background-color 1s;
  -moz-transition: background-color 1s;
  -ms-transition: background-color 1s;
  -o-transition: background-color 1s;
  transition: background-color 1s;
}
.tutorial-button2:hover {
  background-color: #f2f2f2;

  color: #2a2c2f;
}
@keyframes selected {
  100% {
    box-shadow: 0 0 10px 10px #1f2430c1;
  }
}
</style>
