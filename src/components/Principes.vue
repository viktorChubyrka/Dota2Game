<template>
  <div>
    <div class="slider">
      <div style="background-color:black;left:100px;z-index:1"></div>
      <div style="background-color:green;left:500px;z-index:2"></div>
      <div style="background-color:yellow;left:650px;z-index:3"></div>
      <div style="background-color:red;left:800px;z-index:4"></div>
    </div>
  </div>
</template>

<style >
.slider div {
  position: absolute;
  width: 400px;
  height: 80vh;
}
.slider div:hover {
}
</style>