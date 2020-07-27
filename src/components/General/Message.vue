<template>
  <div
    @click="DeleteNotification()"
    :class="{
      containerMessage: true,
      delete: isDeleted,
      addTofriendMessage:
        notification.type == 'AddTooFriends' ||
        notification.type == 'AddTooParty',
    }"
  >
    <div
      class="t6"
      style="position: absolute;
width: 80px;
height: 22px;
left: 12px;
top: 16px;
color:#BDBDBD"
    >
      {{
        `${notification.date.split("T")[1].split(":")[0]}:${
          notification.date.split("T")[1].split(":")[1]
        } ${notification.date.split("-")[2].split("T")[0]}-${
          notification.date.split("-")[1]
        }`
      }}
    </div>
    <div
      v-if="notification.type == 'AddTooFriends'"
      class="t5"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      {{ $ml.get("friendRequest") }} <strong>{{ notification.login }}</strong>
      <button @click="acceptFriend()" class="buttonMessage b1 t5">
        {{ $ml.get("accept") }}
      </button>
      <button @click="notAcceptFriend()" class="buttonMessage b2 t5">
        {{ $ml.get("cancel") }}
      </button>
    </div>
    <div
      v-if="notification.type == 'AddTooParty'"
      class="t5 "
      style="position: absolute;
width: 270px;
height: 140px;
left: 12px;
top: 42px;"
    >
      {{ notification.message }} <strong>{{ notification.login }}</strong>
      <button @click="acceptLobby()" class="buttonMessage b1 t5">
        {{ $ml.get("accept") }}
      </button>
      <button @click="notAcceptLobby()" class="buttonMessage b2 t5">
        {{ $ml.get("cancel") }}
      </button>
    </div>
    <div
      v-if="notification.type == 'AcceptLobby'"
      :class="{ t5: true }"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      <strong>{{ notification.login }}</strong> {{ notification.message }}
    </div>
    <div
      v-if="notification.type == 'notAcceptFriend'"
      :class="{ t5: true }"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      <strong>{{ notification.login }}</strong> {{ notification.message }}
    </div>
    <div
      v-if="notification.type == 'LobbyDestroed'"
      :class="{ t5: true }"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      {{ notification.message }}
    </div>
    <div
      v-if="notification.type == 'notAcceptParty'"
      :class="{ t5: true }"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      {{ notification.message }} <strong>{{ notification.login }}</strong>
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
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          date: this.notification.date,
          type: "DeleteNotification",
        })
      );
      this.isDeleted = true;
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
.delete {
  animation: callAnim;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
@keyframes callAnim {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
.containerMessage {
  width: 347px;
  height: 90px;
  background: #ffffff;
  z-index: 100;
  position: relative;
}
.addTofriendMessage {
  height: 140px !important;
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
</style>
