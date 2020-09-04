<template>
  <div
    @click="DeleteNotification()"
    :class="{
      containerMessage: true,
      delete: isDeleted,
    }"
  >
    <div class="t6 messageDate">
      {{
      `${notification.date.split("T")[1].split(":")[0]}:${
      notification.date.split("T")[1].split(":")[1]
      } ${notification.date.split("-")[2].split("T")[0]}-${
      notification.date.split("-")[1]
      }`
      }}
    </div>
    <div
      v-if="notification.type == 'AddTooFriends' || notification.type == 'AddTooParty'"
      class="t5 buttonContainer"
    >
      {{ $ml.get(notification.type) }}
      <strong>{{ notification.login }}</strong>
      <button
        v-if="notification.type == 'AddTooFriends'"
        @click="acceptFriend()"
        class="buttonMessage b1 t5"
      >{{ $ml.get("accept") }}</button>
      <button v-else @click="acceptLobby()" class="buttonMessage b1 t5">{{ $ml.get("accept") }}</button>
      <button
        v-if="notification.type == 'AddTooFriends'"
        @click="notAcceptFriend()"
        class="buttonMessage b2 t5"
      >{{ $ml.get("cancel") }}</button>

      <button v-else @click="notAcceptLobby()" class="buttonMessage b2 t5">{{ $ml.get("cancel") }}</button>
    </div>
    <div
      class="messageText"
      v-else-if="notification.type == 'notAcceptFriend' || notification.type == 'AcceptLobby'|| notification.type=='notAcceptParty' ||notification.type=='AcceptFriend'"
    >
      <strong>{{ notification.login }}</strong>
      {{ $ml.get(notification.type) }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["notification"],
  data() {
    return { socket: null, isDeleted: false };
  },
  methods: {
    DeleteNotification() {
      this.isDeleted = true;
      setTimeout(() => {
        this.socket.send(
          JSON.stringify({
            login: localStorage.getItem("login"),
            date: this.notification.date,
            type: "DeleteNotification",
          })
        );
      }, 500);
    },
    acceptFriend() {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: this.notification.login,
          type: "AcceptFriend",
        })
      );
    },
    notAcceptFriend() {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: this.notification.login,
          type: "notAcceptFriend",
        })
      );
    },
    acceptLobby() {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: this.notification.login,
          type: "AcceptParty",
          partyID: this.notification.partyID,
          matchID: this.notification.matchID,
        })
      );
    },
    notAcceptLobby() {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: this.notification.login,
          type: "notAcceptParty",
          partyID: this.notification.partyID,
        })
      );
    },
  },
  created() {
    this.socket = this.$store.getters.socket;
  },
};
</script>
<style>
.messageText {
  width: 327px;
  padding: 30px 10px;
}
.buttonContainer {
  position: absolute;
  width: 270px;
  height: 32px;
  left: 12px;
  top: 42px;
}
div.delete.containerMessage {
  margin-top: -150px;
  z-index: 10;
}
.containerMessage {
  width: 347px;
  height: 140px;
  background: #ffffff;
  z-index: 100;
  position: relative;
  transition: box-shadow 0.5s, margin-top 0.5s;
}
.buttonMessage {
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border-radius: 8px;
  margin-right: 16px;
  border: 0px;
}
.b1 {
  background: #1f2430;
  color: white;
}
.b2 {
  background: #e0e0e0;
  color: #1f2430;
}
.containerMessage:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
}
.messageDate {
  padding: 16px 0 4px 12px;
  color: #bdbdbd;
}
</style>
