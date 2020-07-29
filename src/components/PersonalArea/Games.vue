<template>
  <div :class="{ show: show, content: true }">
    <div
      @click="Button(1)"
      :class="{
        t3: true,
        buttonSolo: true,
        first: true,
        activeBtn: button == 1,
        toHover1: button != 1,
      }"
    >{{ $ml.get("solo") }}</div>
    <div
      @click="Button(2)"
      :class="{
        t3: true,
        buttonSolo: true,
        second: true,
        activeBtn: button == 2,
        toHover1: button != 2,
      }"
    >{{ $ml.get("party") }}</div>
    <div class="smVretLine"></div>
    <div v-if="button == 1">
      <div
        @click="Select(1)"
        :class="{
          t4: true,
          tabTitle: true,
          tab1T: true,
          tabTSelected: selected == 1,
          tabTitleSelected: selected == 1,
        }"
      >{{ $ml.get("match1") }}</div>
      <div :class="{ tabContent: true, tab1C: true, tabCSelected: selected == 1 }">
        <table class="gamesTable">
          <tr>
            <th
              class="t5"
              style="color: #828282;width:100px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("matchNum").split(" ")[0] }}</th>
            <th
              class="t5"
              style="color: #828282;width:110px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("result") }}</th>
            <th
              class="t5"
              style="width:100px;color: #828282;text-align: left;padding-bottom:20px"
            >{{ $ml.get("matchType") }}</th>
            <th style="width:628px;"></th>
            <th
              class="t5"
              style="color: #828282;width:190px;text-align: left;"
            >{{ $ml.get("dateTime") }}</th>
            <th
              class="t5"
              style="color: #828282;width:117px;text-align: right;"
            >{{ $ml.get("matchNum").split(" ")[0] }} Dotabuff</th>
          </tr>
          <tr class="toHover" v-for="i in 10" :key="i">
            <td class="t4 players">№ {{ i }}</td>
            <td class="t4">{{ $ml.get("win") }}</td>
            <td class="t4">{{ button == 1 ? $ml.get("solo") : $ml.get("party") }}</td>
            <td>
              <a
                v-if="i == 1"
                class="t4 linkTable"
                style="float:right;color:#35A7FF;margin-right:80px"
                href
              >{{ $ml.get("sendRep") }}</a>
            </td>
            <td class="t4">21/05/2020 11:31:32</td>
            <td class="t4" style="padding-left:20px">3522211212</td>
          </tr>
        </table>
      </div>
      <div
        @click="Select(2)"
        :class="{
          t4: true,
          tabTitle: true,
          tab2T: true,
          tabTSelected: selected == 2,
          tabTitleSelected: selected == 2,
        }"
      >{{ $ml.get("match2") }}</div>
      <div :class="{ tabContent: true, tab2C: true, tabCSelected: selected == 2 }">
        <table class="gamesTable">
          <tr>
            <th
              class="t5"
              style="color: #828282;width:100px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("players") }}</th>
            <th style="width:304px;text-align: left;"></th>
            <th style="width:598px;"></th>
            <th
              class="t5"
              style="color: #828282;width:190px;text-align: left;"
            >{{ $ml.get("dateTime") }}</th>
            <th
              class="t5"
              style="color: #828282;width:113px;item-align: left;"
            >{{ $ml.get("matchNum") }}</th>
          </tr>
          <tr class="toHover" v-for="el in UpcomingMatches" :key="el._id">
            <td class="players">{{ [...el.playersT1, ...el.playersT2].length }}/10</td>
            <td>
              <span v-for="login in [...el.playersT1, ...el.playersT2]" :key="login" class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">{{ login }}</div>
              </span>
            </td>
            <td>
              <button
                @click="EnterMatch(el.matchNumber,'Solo')"
                class="enterMath t4"
              >{{ $ml.get("enterMatch") }}</button>
            </td>
            <td class="t4">
              {{
              `${el.creationDate.split("T")[0]} ${
              el.creationDate.split("T")[1].split(".")[0]
              }`
              }}
            </td>
            <td class="t4" style="padding-left:20px">{{ el.matchNumber }}</td>
          </tr>
        </table>

        <div class="t3" style="margin:36px 0 16px 0">{{ $ml.get("playing") }}</div>
        <table class="gamesTable">
          <tr class="toHover" v-for="i in 5" :key="i">
            <td style="width:87px" class="players">10/10</td>
            <td style="width:336px;text-align: left;">
              <span class="dot" v-for="i in 10" :key="i"></span>
            </td>
            <td style="width:562px;"></td>
            <td style="width:190px;text-align:left;" class="t4">21/05/2020 11:31:32</td>
            <td class="t4" style="width:113px;padding-left:20px">3522211212</td>
          </tr>
        </table>
      </div>
      <div
        @click="Select(3)"
        :class="{
          t4: true,
          tabTitle: true,
          tab3T: true,
          tabTSelected: selected == 3,
          tabTitleSelected: selected == 3,
        }"
      >{{ $ml.get("match3") }}</div>
      <div :class="{ tabContent: true, tab3C: true, tabCSelected: selected == 3 }">
        <table class="gamesTable">
          <tr>
            <th
              class="t5"
              style="color: #828282;width:100px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("matchType") }}</th>
            <th
              class="t5"
              style="width:180px;text-align: left;;padding-bottom:20px;color: #828282;"
            >{{ $ml.get("regEnd") }}</th>
            <th style="width:400px;"></th>
            <th style="width:230px"></th>
            <th
              class="t5"
              style="color: #828282;width:190px;text-align: left;"
            >{{ $ml.get("gameStart") }}</th>
            <th
              class="t5"
              style="color: #828282;width:113px;item-align: left;"
            >{{ $ml.get("matchNum") }}</th>
          </tr>
          <tr class="toHover" v-for="el in ActiveMatches" :key="el._id">
            <td class="t4 players">{{ button == 1 ? $ml.get("solo") : $ml.get("party") }}</td>
            <td class="t4">
              <Timer :date="el.creationDate" :partyLeader="el.creatorLogin" />
              {{ $ml.get("minut") }}
            </td>
            <td>
              <span
                v-for="(player, index) in [...el.playersT1, ...el.playersT2]"
                :key="index"
                class="dot"
              >
                <div class="arrow-up"></div>
              </span>
            </td>
            <td>
              <button
                id="enterMath"
                @click="LeaveGame(el.matchNumber)"
                class="enterMath t4"
              >{{ $ml.get("cancel") }}</button>
            </td>
            <td class="t4">
              {{
              `${el.creationDate.split("T")[0]} ${
              el.creationDate.split("T")[1].split(".")[0]
              }`
              }}
            </td>
            <td class="t4" style="padding-left:20px">{{ el.matchNumber }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-else>
      <div
        @click="Select(1)"
        :class="{
          t4: true,
          tabTitle: true,
          tab1T: true,
          tabTSelected: selected == 1,
          tabTitleSelected: selected == 1,
        }"
      >{{ $ml.get("match1") }}</div>
      <div :class="{ tabContent: true, tab1C: true, tabCSelected: selected == 1 }">
        <table class="gamesTable">
          <tr>
            <th
              class="t5"
              style="color: #828282;width:100px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("matchNum").split(" ")[0] }}</th>
            <th
              class="t5"
              style="color: #828282;width:110px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("result") }}</th>
            <th
              class="t5"
              style="width:100px;color: #828282;text-align: left;padding-bottom:20px"
            >{{ $ml.get("matchType") }}</th>
            <th style="width:628px;"></th>
            <th
              class="t5"
              style="color: #828282;width:190px;text-align: left;"
            >{{ $ml.get("dateTime") }}</th>
            <th
              class="t5"
              style="color: #828282;width:117px;text-align: right;"
            >{{ $ml.get("matchNum").split(" ")[0] }} Dotabuff</th>
          </tr>
          <tr class="toHover" v-for="i in 4" :key="i">
            <td class="t4 players">№ {{ i }}</td>
            <td class="t4">{{ $ml.get("win") }}</td>
            <td class="t4">{{ button == 1 ? $ml.get("solo") : $ml.get("party") }}</td>
            <td>
              <a
                v-if="i == 1"
                class="t4 linkTable"
                style="float:right;color:#35A7FF;margin-right:80px"
                href
              >{{ $ml.get("sendRep") }}</a>
            </td>
            <td class="t4">21/05/2020 11:31:32</td>
            <td class="t4" style="padding-left:20px">3522211212</td>
          </tr>
        </table>
      </div>
      <div
        @click="Select(2)"
        :class="{
          t4: true,
          tabTitle: true,
          tab2T: true,
          tabTSelected: selected == 2,
          tabTitleSelected: selected == 2,
        }"
      >{{ $ml.get("match2") }}</div>
      <div :class="{ tabContent: true, tab2C: true, tabCSelected: selected == 2 }">
        <table class="gamesTable">
          <tr>
            <th
              class="t5"
              style="color: #828282;width:100px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("players") }}</th>
            <th style="width:304px;text-align: left;"></th>
            <th style="width:598px;"></th>
            <th
              class="t5"
              style="color: #828282;width:190px;text-align: left;"
            >{{ $ml.get("dateTime") }}</th>
            <th
              class="t5"
              style="color: #828282;width:113px;item-align: left;"
            >{{ $ml.get("matchNum") }}</th>
          </tr>
          <tr class="toHover" v-for="el in UpcomingMatchesParty" :key="el._id">
            <td class="players">{{ [...el.playersT1, ...el.playersT2].length }}/10</td>
            <td>
              <span
                v-for="login in [...el.playersT1, ...el.playersT2]"
                :key="login.login"
                class="dot"
              ></span>
            </td>
            <td>
              <button
                @click="EnterMatch(el.matchNumber,'Party')"
                class="enterMath t4"
              >{{ $ml.get("enterMatch") }}</button>
            </td>
            <td class="t4">
              {{
              `${el.creationDate.split("T")[0]} ${
              el.creationDate.split("T")[1].split(".")[0]
              }`
              }}
            </td>
            <td class="t4" style="padding-left:20px">{{ el.matchNumber }}</td>
          </tr>
        </table>

        <div class="t3" style="margin:36px 0 16px 0">{{ $ml.get("playing") }}</div>
        <table class="gamesTable">
          <tr class="toHover" v-for="i in 2" :key="i">
            <td style="width:87px" class="players">10/10</td>
            <td style="width:336px;text-align: left;">
              <span class="dot" v-for="i in 10" :key="i"></span>
            </td>
            <td style="width:562px;"></td>
            <td style="width:190px;text-align:left;" class="t4">21/05/2020 11:31:32</td>
            <td class="t4" style="width:113px;padding-left:20px">3522211212</td>
          </tr>
        </table>
      </div>
      <div
        @click="Select(3)"
        :class="{
          t4: true,
          tabTitle: true,
          tab3T: true,
          tabTSelected: selected == 3,
          tabTitleSelected: selected == 3,
        }"
      >{{ $ml.get("match3") }}</div>
      <div :class="{ tabContent: true, tab3C: true, tabCSelected: selected == 3 }">
        <table class="gamesTable">
          <tr>
            <th
              class="t5"
              style="color: #828282;width:100px;text-align: left;padding-bottom:20px"
            >{{ $ml.get("matchType") }}</th>
            <th
              class="t5"
              style="width:180px;text-align: left;;padding-bottom:20px;color: #828282;"
            >{{ $ml.get("regEnd") }}</th>
            <th style="width:400px;"></th>
            <th style="width:230px"></th>
            <th
              class="t5"
              style="color: #828282;width:190px;text-align: left;"
            >{{ $ml.get("gameStart") }}</th>
            <th
              class="t5"
              style="color: #828282;width:113px;item-align: left;"
            >{{ $ml.get("matchNum") }}</th>
          </tr>
          <tr class="toHover" v-for="el in ActiveMatchesParty" :key="el._id">
            <td class="t4 players">{{ button == 1 ? $ml.get("solo") : $ml.get("party") }}</td>
            <td class="t4">
              <Timer :date="el.creationDate" :partyLeader="el.creatorLogin" />
              {{ $ml.get("minut") }}
            </td>
            <td>
              <span
                v-for="(player, index) in [...el.playersT1, ...el.playersT2]"
                :key="index"
                class="dot"
              >
                <div class="arrow-up"></div>
              </span>
            </td>
            <td>
              <button
                id="enterMath"
                @click="LeaveGame(el.matchNumber,el.gameType)"
                class="enterMath t4"
              >{{ $ml.get("cancel") }}</button>
            </td>
            <td class="t4">
              {{
              `${el.creationDate.split("T")[0]} ${
              el.creationDate.split("T")[1].split(".")[0]
              }`
              }}
            </td>
            <td class="t4" style="padding-left:20px">{{ el.matchNumber }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Timer from "../General/Timer";
export default {
  components: { Timer },
  data() {
    return {
      button: 1,
      show: false,
      socket: null,
    };
  },
  methods: {
    Select(i) {
      this.$store.commit("setSelectedTab", i);
    },
    Button(i) {
      this.button = i;
    },
    EnterMatch(matchNumber, type) {
      let btn = document.getElementsByClassName("enterMath")[0];
      let style = btn.style;
      btn.style = "background: #E7E7E7;";
      setTimeout(() => {
        btn.style = style;
      }, 200);
      if (this.user.steamID)
        this.socket.send(
          JSON.stringify({
            matchNumber,
            login: localStorage.getItem("login"),
            type: type == "Solo" ? "EnterLobby" : "EnterPartyLobby",
          })
        );
      else this.$router.push("profile");
    },
    LeaveGame(matchNumber, type) {
      let btn = document.getElementById("enterMath");
      let style = btn.style;
      btn.style = "background: #E7E7E7;";
      setTimeout(() => {
        btn.style = style;
      }, 200);
      this.socket.send(
        JSON.stringify({
          matchNumber,
          login: localStorage.getItem("login"),
          type: type == "Solo" ? "LeaveLobby" : "LeavePartyLobby",
        })
      );
    },
  },
  computed: {
    selected() {
      return this.$store.getters.selectedTab;
    },
    ActiveMatches() {
      return this.$store.getters.activeMatches;
    },
    UpcomingMatches() {
      return this.$store.getters.upcomingMatches;
    },
    ActiveMatchesParty() {
      return this.$store.getters.activeMatchesParty;
    },
    UpcomingMatchesParty() {
      return this.$store.getters.upcomingMatchesParty;
    },
    user() {
      return this.$store.getters.userData;
    },
  },
  created() {
    this.socket = this.$store.getters.socket;
    setTimeout(() => (this.show = true), 10);
    this.$store.dispatch("GetAllMatches");
  },
};
</script>
<style scoped>
.linkTable:hover {
  color: #bf0603 !important;
  cursor: pointer;
}
.content {
  position: absolute;
  left: 10px;
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
.toHover {
  z-index: 1;
  transition: box-shadow 0.5s;
  margin-bottom: 5px !important;
}
.toHover:hover {
  background-color: white !important;
  z-index: 10;
  box-shadow: 0 0 10px 4px #cbcaca;
}
.buttonSolo:hover {
  cursor: pointer;
}
.tabTitle:hover {
  cursor: pointer;
}
.enterMath {
  display: flex;
  flex-direction: row;
  padding: 4px 37px;
  background: #ffffff;
  border: 1px solid #35a7ff;
  box-sizing: border-box;
  border-radius: 8px;
  float: right;
  margin-right: 61px;
  transition: background 0.5s;
}
.enterMath:hover {
  background: #f3f4f7;
}
.players {
  padding-left: 12px;
}
.buttonSolo {
  padding: 16px 48px;
  position: absolute;
  color: black;
  top: 42px;
  border: 1px solid #bdbdbd;
  transition: color 0.5s, background-color 0.5s;
}
.toHover1:hover {
  background: #f3f4f7;
}
.toHover1 {
  background: white;
}

.dot {
  position: relative;
  padding: 0;
  margin: 0 16px 0 0;
  float: left;
  width: 16px;
  height: 16px;
  background: #1f2430;
  border-radius: 8px;
}
.dot:hover .arrow-up {
  opacity: 1;
}
.dot:hover .playerName {
  opacity: 1;
}
.arrow-up {
  opacity: 0;
  position: absolute;
  top: 16px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid #f2f2f2;
}
.playerName {
  opacity: 0;
  position: fixed;
  top: 32px;
  left: -91px;
  text-align: center;
  background-color: #f2f2f2;
  padding: 0px 6px;
  position: absolute;
  width: 182px;
  height: 46px;
}
.first {
  left: 478px;
}
.second {
  left: 695px;
}
.smVretLine {
  position: absolute;
  width: 2px;
  height: 70px;
  left: 663px;
  top: 42px;
  background: #1f2430;
}
.activeBtn {
  background: #1f2430;
  color: white;
}
.tabTitle {
  text-align: center;
  padding: 8px 32px;
  position: absolute;
  width: 192px;
  height: 36px;
  border-left: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  top: 166px;
  transition: top 0.5s, height 0.5s, border-bottom 0.25s;
}
.tabTitleSelected {
  top: 156px !important;
  height: 46px;
  border-bottom: 3px solid white;
}
.tab1T {
  left: 255px;
  z-index: 2;
}
.tab2T {
  left: 544px;
  z-index: 2;
}
.tab3T {
  left: 848px;
  z-index: 2;
}
.tabContent {
  position: absolute;
  width: 1329.5px;
  height: 0px;
  left: 0;
  top: 219px;
  border: 1px solid #bdbdbd;
}
.tab1C {
  z-index: 2;
  opacity: 0;
  transition: z-index 2s, opacity 1s;
}
.tab2C {
  z-index: 2;
  opacity: 0;
  transition: z-index 2s, opacity 1s;
}
.tab3C {
  z-index: 2;
  opacity: 0;
  transition: z-index 2s, opacity 1s;
}
.tabTSelected {
  z-index: 4 !important;
  opacity: 1 !important;
}
.tabCSelected {
  z-index: 3 !important;
  opacity: 1 !important;
}
</style>
