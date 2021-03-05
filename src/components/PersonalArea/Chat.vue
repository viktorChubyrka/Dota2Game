<template>
  <div class="chat">
    <div class="t3 chatTitle">{{ $ml.get("chat") }}</div>
    <div id="chatBody" class="chatBody">
      <div
        class="message t5"
        :id="message.message"
        v-for="message in chat"
        :key="message.date"
      >
        {{
          message.newDate.hour +
            ":" +
            (message.newDate.min < 10
              ? "0" + message.newDate.min
              : message.newDate.min)
        }}
        <strong>{{ message.login }}:</strong>
        <span>{{ message.message }}</span>
      </div>
    </div>
    <div class="chatInputBody">
      <input
        :placeholder="chatPh()"
        type="text "
        v-model="message"
        class="t5 chatInput"
        @keydown.enter="WriteToChat()"
      />
      <button @click="WriteToChat()" class="t5 chatButton">
        {{ $ml.get("chatBtn") }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      socket: null,
      chatPh: () => this.$ml.get("chatPlaceholder"),
    };
  },
  methods: {
    WriteToChat() {
      this.socket.send(
        JSON.stringify({
          message: this.message,
          login: localStorage.getItem("login"),
        })
      );
      // var chat = document.getElementById("chatBody");

      // let height = chat.scrollHeight + 31;
      // console.log(height);
      // chat.scrollTop = height;
      this.message = "";
    },
  },
  created() {
    this.socket = this.$store.getters.socket;
  },
  computed: {
    chat() {
      return this.$store.getters.chat;
    },
  },
};
</script>
<style>
.chat {
  width: 42.03703703703703vh;
  height: 41.85185185185185vh;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}
.chatTitle {
  text-align: center;
  margin-top: 1.4814814814814814vh;
}
.chatBody {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  top: 5.7407407407407405vh;
  left: 1.6666666666666665vh;
  height: 34.25925925925926vh;
  width: 37.68518518518518vh;
  overflow: auto;
  z-index: 1;
}
.chatBody::-webkit-scrollbar {
  display: none;
}
.chatInputBody {
  position: relative;
  top: 35.37037037037037vh;
  left: -0.18518518518518517vh;
  width: 42.129629629629626vh;
  height: 6.481481481481481vh;
  background-color: #f2f2f2;

  z-index: 2;
}
.chatInput {
  position: absolute;
  top: 1.4814814814814814vh;
  left: 1.3888888888888888vh;
  width: 31.11111111111111vh;
  height: 2.7777777777777777vh;
  padding: 0.18518518518518517vh 0 0.18518518518518517vh 1.111111111111111vh;
}
.chatButton {
  position: absolute;
  top: 1.4814814814814814vh;
  right: 1.3888888888888888vh;
  width: 5.7407407407407405vh;
  height: 3.518518518518518vh;
  background: #1f2430;
  border-radius: 0.37037037037037035vh;
  border: 0px;
  color: #f2f2f2;
}
.message {
  width: 37.68518518518518vh;
  margin-bottom: 1px;
}
</style>
