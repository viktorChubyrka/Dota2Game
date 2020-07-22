<template>
  <span>
    {{ number }}
  </span>
</template>
<script>
export default {
  props: ["date", "partyLeader"],
  data() {
    return {
      number: 1,
      socket: null,
    };
  },
  created() {
    let nowDate = Date.now();
    let date = new Date(this.date);
    this.number =
      10 - +((nowDate - date.getTime()) / 1000 / 60).toString().split(".")[0];
    let interval = setInterval(() => {
      let nowDate = Date.now();
      let date = new Date(this.date);
      this.number =
        10 - +((nowDate - date.getTime()) / 1000 / 60).toString().split(".")[0];
      if (this.number <= 0) {
        this.socket.send(
          JSON.stringify({
            login: this.partyLeader,
            type: "DestroyParty",
          })
        );
        interval.clearInterval();
      }
    }, 60000);
    this.socket = this.$store.getters.socket;
  },
};
</script>
