<template>
  <div>
    <div class="partySlot">
      <div
        @mouseover=""
        :class="{
          circle: true,
          noPhoto: login ? (photo ? false : true) : false,
        }"
      >
        <i v-if="!login" class="fa fa-ellipsis-h fa-2x"></i>
      </div>
      <div v-if="login" class="circleText">{{ login }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["login"],
};
</script>
<style scoped>
.noPhoto {
  background: url("../../assets/userEmpty.svg") center !important;
}
.partySlot {
  width: 264px;
  height: 121px;
}
.circle {
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #828282;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circle i {
  margin: 12px 12px;
}
.circleText {
  color: white;
  width: 264px;
  text-align: center;
  margin-top: 8px;
}
</style>
