<template>
  <div>
    <ul class="dots">
      <li v-for="i in 5" :key="i">
        <div
          :class="{
            dot: true,
            selected: $store.getters.GetCurrentPage == i,
          }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<style>
.dot {
  background: black;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin: 0 0 16px 3px;
}
.dots {
  z-index: 10;
  position: fixed;
  top: 450px;
  right: 32px;
  list-style-type: none;
  margin: 0;
}
.selected {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin: 0 0 16px 0px;
  background: #f2f2f2;
}
</style>
