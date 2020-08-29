<template>
  <span>{{ number }}</span>
</template>
<script>
export default {
  props: ["date", "partyLeader", "matchNum", "matchType"],
  data() {
    return {
      number: 1,
      socket: null,
      interval: null,
    };
  },
  created() {
    this.socket = this.$store.getters.socket;
    let nowDate = Date.now();
    let date = new Date(this.date);
    this.number =
      10 - +((nowDate - date.getTime()) / 1000 / 60).toString().split(".")[0];
    if (this.number <= 0) {
      clearInterval(this.interval);
      this.socket.send(
        JSON.stringify({
          login: this.partyLeader,
          type: "DestroyLobby",
        })
      );
    }
    this.number =
      10 - +((nowDate - date.getTime()) / 1000 / 60).toString().split(".")[0];
    this.socket.send(
      JSON.stringify({
        matchNumber: this.matchNum,
        matchType: this.matchType,
        type: "StartGame",
      })
    );
    this.interval = setInterval(() => {
      let nowDate = Date.now();
      let date = new Date(this.date);
      this.socket.send(
        JSON.stringify({
          matchNumber: this.matchNum,
          matchType: this.matchType,
          type: "StartGame",
        })
      );
      this.number =
        10 - +((nowDate - date.getTime()) / 1000 / 60).toString().split(".")[0];
      if (this.number <= 0) {
        clearInterval(this.interval);
        this.socket.send(
          JSON.stringify({
            login: this.partyLeader,
            type: "DestroyLobby",
          })
        );
      }
    }, 60000);
  },
};
</script>
