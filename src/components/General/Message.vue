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
      v-if="
        notification.type == 'AddTooFriends' ||
          notification.type == 'AddTooParty'
      "
      class="t5 buttonContainer"
    >
      <div class="notificationText">
        {{ $ml.get(notification.type) }}
        <strong>{{ notification.login }}</strong>
      </div>
      <button
        v-if="notification.type == 'AddTooFriends'"
        @click="acceptFriend()"
        class="buttonMessage b1 t5"
      >
        {{ $ml.get("accept") }}
      </button>
      <button v-else @click="acceptLobby()" class="buttonMessage b1 t5">
        {{ $ml.get("accept") }}
      </button>
      <button
        v-if="notification.type == 'AddTooFriends'"
        @click="notAcceptFriend()"
        class="buttonMessage b2 t5"
      >
        {{ $ml.get("cancel") }}
      </button>

      <button v-else @click="notAcceptLobby()" class="buttonMessage b2 t5">
        {{ $ml.get("cancel") }}
      </button>
    </div>
    <div
      class="messageText"
      v-else-if="
        notification.type == 'notAcceptFriend' ||
          notification.type == 'AcceptLobby' ||
          notification.type == 'notAcceptParty' ||
          notification.type == 'AcceptFriend' ||
          notification.type == 'LobbyDestroed'
      "
    >
      <strong>{{ notification.login }}</strong>
      {{ $ml.get(notification.type) }}
    </div>
    <div
      class="messageText"
      v-else-if="notification.type == 'partyInviteSendet'"
    >
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
.notificationText {
  width: 35.18518518518518vh;
}
.messageText {
  width: 30.277777777777775vh;
  padding: 2.7777777777777777vh 0.9259259259259258vh;
}
.buttonContainer {
  width: 25vh;
  height: 2.962962962962963vh;
  padding-left: 1.111111111111111vh;
}
div.delete.containerMessage {
  margin-top: -13.888888888888888vh;
  z-index: 10;
}
.containerMessage {
  width: 35.18518518518518vh;
  height: 12.962962962962962vh;
  margin-left: 7.037037037037036vh;
  margin-right: 7.037037037037036vh;
  background: #ffffff;
  z-index: 100;
  transition: box-shadow 0.5s, margin-top 0.5s;
}
.buttonMessage {
  width: 9.25925925925926vh;
  height: 3.7037037037037033vh;
  margin-top: 0.9259259259259258vh;
  border-radius: 0.7407407407407407vh;
  margin-right: 1.4814814814814814vh;
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
  padding: 1.4814814814814814vh 0 0.37037037037037035vh 1.111111111111111vh;
  color: #bdbdbd;
}
</style>
