<template>
  <span>
    {{ number }}
  </span>
</template>
<script>
export default {
  props: ["date"],
  data() {
    return {
      number: 1,
    };
  },
  created() {
    let nowDate = Date.now();
    let date = new Date(this.date);
    console.log((nowDate - date.getTime()) / 1000 / 60);
  },
};
</script>
