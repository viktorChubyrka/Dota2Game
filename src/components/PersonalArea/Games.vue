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
        'tutorial-selected-element': tutorialStep == 5 && user.tutorial,
      }"
    >
      {{ $ml.get("solo") }}
    </div>
    <div
      @click="Button(2)"
      :class="{
        t3: true,
        buttonSolo: true,
        second: true,
        activeBtn: button == 2,
        toHover1: button != 2,
        'tutorial-selected-element': tutorialStep == 6 && user.tutorial,
      }"
    >
      {{ $ml.get("party") }}
    </div>
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
          'tutorial-selected-element': tutorialStep == 7 && user.tutorial,
        }"
      >
        {{ $ml.get("match1") }}
      </div>
      <div
        :class="{ tabContent: true, tab1C: true, tabCSelected: selected == 1 }"
      >
        <table class="gamesTable">
          <thead>
            <tr>
              <th
                class="t5"
                style="color: #828282;width:80px;text-align: left;"
              >
                {{ $ml.get("matchNum").split(" ")[0] }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:140px;text-align: center;"
              >
                {{ $ml.get("result") }}
              </th>
              <th
                class="t5"
                style="width:100px;color: #828282;text-align: center;"
              >
                {{ $ml.get("matchType") }}
              </th>
              <th style="width:678px;"></th>
              <th
                class="t5"
                style="color: #828282;width:190px;text-align: left;"
              >
                {{ $ml.get("dateTime") }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:117px;text-align: right;"
              >
                {{ $ml.get("matchNum").split(" ")[0] }} Dotabuff
              </th>
            </tr>
          </thead>
          <tbody v-if="user && soloGames">
            <tr class="toHover" v-for="(match, i) in soloGames" :key="i">
              <td class="t4 players">№ {{ soloGames.length - i }}</td>
              <td class="t4" style="text-align:center">
                {{
                  match.status == "Техническое поражение"
                    ? "Technical defeat"
                    : match.status == "win"
                    ? "Victory"
                    : "Defeat"
                }}
              </td>
              <td class="t4" style="text-align:center">{{ match.gameType }}</td>
              <td>
                <router-link
                  v-if="i + 1 == 1"
                  class="t4 linkTable"
                  style="float:right;color:#35A7FF;margin-right:80px"
                  to="support1"
                  >{{ $ml.get("sendRep") }}</router-link
                >
              </td>
              <td class="t4">
                {{
                  `${match.creationDate.split("T")[0]} ${
                    match.creationDate.split("T")[1].split(".")[0]
                  }`
                }}
              </td>
              <td class="t4" style="padding-left:20px">
                {{ match.matchNumber }}
              </td>
            </tr>
          </tbody>
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
          'tutorial-selected-element': tutorialStep == 8 && user.tutorial,
        }"
      >
        {{ $ml.get("match2") }}
      </div>
      <div
        :class="{ tabContent: true, tab2C: true, tabCSelected: selected == 2 }"
      >
        <table class="gamesTable">
          <thead>
            <tr>
              <th
                class="t5"
                style="color: #828282;width:100px;text-align: left;"
              >
                {{ $ml.get("players") }}
              </th>
              <th style="width:304px;text-align: left;"></th>
              <th style="width:598px;"></th>
              <th
                class="t5"
                style="color: #828282;width:190px;text-align: left;"
              >
                {{ $ml.get("dateTime") }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:113px;item-align: left;"
              >
                {{ $ml.get("matchNum") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="toHover" v-for="el in UpcomingMatches" :key="el._id">
              <td class="players">
                {{ [...el.playersT1, ...el.playersT2].length }}/10
              </td>
              <td>
                <span
                  v-for="login in [...el.playersT1, ...el.playersT2]"
                  :key="login"
                  class="dot"
                >
                  <div class="arrow-up"></div>
                  <div class="t4 playerName">{{ login }}</div>
                </span>
              </td>
              <td>
                <button
                  @click="EnterMatch(el.matchNumber, 'Solo')"
                  class="enterMath t4"
                >
                  {{ $ml.get("enterMatch") }}
                </button>
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
          </tbody>
        </table>

        <div class="t3 slide-right" style="margin:36px 0 16px 0;">
          {{ $ml.get("playing") }}
        </div>
        <table class="gamesTable">
          <tbody>
            <tr class="toHover" v-for="(el, i) in PlayingMatches" :key="i">
              <td style="width:87px" class="players">
                {{ [...el.playersT1, ...el.playersT2].length }}/10
              </td>
              <td style="width:336px;text-align: left;">
                <span
                  class="dot"
                  v-for="i in [...el.playersT1, ...el.playersT2]"
                  :key="i"
                ></span>
              </td>
              <td style="width:562px;"></td>
              <td style="width:190px;text-align:left;" class="t4">
                {{
                  `${el.creationDate.split("T")[0]} ${
                    el.creationDate.split("T")[1].split(".")[0]
                  }`
                }}
              </td>
              <td class="t4" style="width:113px;padding-left:20px">
                {{ el.matchNumber }}
              </td>
            </tr>
          </tbody>
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
          'tutorial-selected-element': tutorialStep == 9 && user.tutorial,
        }"
      >
        {{ $ml.get("match3") }}
      </div>
      <div
        :class="{ tabContent: true, tab3C: true, tabCSelected: selected == 3 }"
      >
        <table class="gamesTable">
          <thead>
            <tr>
              <th
                class="t5"
                style="color: #828282;width:100px;text-align: left;"
              >
                {{ $ml.get("matchType") }}
              </th>
              <th
                class="t5"
                style="width:180px;text-align: left;color: #828282;"
              >
                {{ $ml.get("regEnd") }}
              </th>
              <th style="width:400px;"></th>
              <th style="width:230px"></th>
              <th
                class="t5"
                style="color: #828282;width:190px;text-align: left;"
              >
                {{ $ml.get("gameStart") }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:113px;item-align: left;"
              >
                {{ $ml.get("matchNum") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="toHover" v-for="el in ActiveMatches" :key="el._id">
              <td class="t4 players">
                {{ button == 1 ? $ml.get("solo") : $ml.get("party") }}
              </td>
              <td class="t4">
                <Timer
                  :date="el.creationDate"
                  :matchNum="el.matchNumber"
                  :matchType="el.gameType"
                  :partyLeader="el.creatorLogin"
                />
                {{ $ml.get("minut") }}
              </td>
              <td>
                <span
                  v-for="(player, index) in [...el.playersT1, ...el.playersT2]"
                  :key="index"
                  class="dot"
                >
                  <div class="arrow-up"></div>
                  <div class="t4 playerName">{{ player }}</div>
                </span>
              </td>
              <td>
                <button
                  id="enterMath"
                  @click="LeaveGame(el.matchNumber, el.gameType)"
                  class="enterMath t4"
                >
                  {{ $ml.get("cancel") }}
                </button>
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
          </tbody>
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
      >
        {{ $ml.get("match1") }}
      </div>
      <div
        :class="{ tabContent: true, tab1C: true, tabCSelected: selected == 1 }"
      >
        <table class="gamesTable">
          <thead>
            <tr>
              <th
                class="t5"
                style="color: #828282;width:100px;text-align: left;"
              >
                {{ $ml.get("matchNum").split(" ")[0] }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:110px;text-align: left;"
              >
                {{ $ml.get("result") }}
              </th>
              <th
                class="t5"
                style="width:100px;color: #828282;text-align: left;"
              >
                {{ $ml.get("matchType") }}
              </th>
              <th style="width:680px;"></th>
              <th
                class="t5"
                style="color: #828282;width:190px;text-align: left;"
              >
                {{ $ml.get("dateTime") }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:117px;text-align: right;"
              >
                {{ $ml.get("matchNum").split(" ")[0] }} Dotabuff
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="toHover" v-for="(el, i) in partyGames" :key="i">
              <td class="t4 players">№ {{ partyGames.length - i }}</td>
              <td class="t4">{{ $ml.get("win") }}</td>
              <td class="t4">
                {{ button == 1 ? $ml.get("solo") : $ml.get("party") }}
              </td>
              <td>
                <router-link
                  v-if="i == 1"
                  class="t4 linkTable"
                  style="float:right;color:#35A7FF;margin-right:80px"
                  to="support1"
                  >{{ $ml.get("sendRep") }}</router-link
                >
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
          </tbody>
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
      >
        {{ $ml.get("match2") }}
      </div>
      <div
        :class="{ tabContent: true, tab2C: true, tabCSelected: selected == 2 }"
      >
        <table class="gamesTable">
          <thead>
            <tr>
              <th
                class="t5"
                style="color: #828282;width:100px;text-align: left;"
              >
                {{ $ml.get("players") }}
              </th>
              <th style="width:304px;text-align: left;"></th>
              <th style="width:598px;"></th>
              <th
                class="t5"
                style="color: #828282;width:190px;text-align: left;"
              >
                {{ $ml.get("dateTime") }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:113px;item-align: left;"
              >
                {{ $ml.get("matchNum") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="toHover"
              v-for="el in UpcomingMatchesParty"
              :key="el._id"
            >
              <td class="players">
                {{ [...el.playersT1, ...el.playersT2].length }}/10
              </td>
              <td>
                <span
                  v-for="login in [...el.playersT1, ...el.playersT2]"
                  :key="login.login"
                  class="dot"
                >
                  <div class="arrow-up"></div>
                  <div class="t4 playerName">{{ login.login }}</div>
                </span>
              </td>
              <td>
                <button
                  @click="EnterMatch(el.matchNumber, 'Party')"
                  class="enterMath t4"
                >
                  {{ $ml.get("enterMatch") }}
                </button>
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
          </tbody>
        </table>

        <div class="t3 slide-right" style="margin:36px 0 16px 0">
          {{ $ml.get("playing") }}
        </div>
        <table class="gamesTable">
          <tbody>
            <tr class="toHover" v-for="i in PlayingMatchesParty" :key="i">
              <td style="width:87px" class="players">
                {{ [...i.playersT1, ...i.playersT2].length }}/10
              </td>
              <td style="width:336px;text-align: left;">
                <span
                  class="dot"
                  v-for="j in [...i.playersT1, ...i.playersT2]"
                  :key="j"
                ></span>
              </td>
              <td style="width:562px;"></td>
              <td style="width:190px;text-align:left;" class="t4">
                {{
                  `${i.creationDate.split("T")[0]} ${
                    i.creationDate.split("T")[1].split(".")[0]
                  }`
                }}
              </td>
              <td class="t4" style="width:113px;padding-left:20px">
                {{ i.matchNumber }}
              </td>
            </tr>
          </tbody>
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
      >
        {{ $ml.get("match3") }}
      </div>
      <div
        :class="{ tabContent: true, tab3C: true, tabCSelected: selected == 3 }"
      >
        <table class="gamesTable">
          <thead>
            <tr>
              <th
                class="t5"
                style="color: #828282;width:100px;text-align: left;"
              >
                {{ $ml.get("matchType") }}
              </th>
              <th
                class="t5"
                style="width:180px;text-align: left;color: #828282;"
              >
                {{ $ml.get("regEnd") }}
              </th>
              <th style="width:400px;"></th>
              <th style="width:230px"></th>
              <th
                class="t5"
                style="color: #828282;width:190px;text-align: left;"
              >
                {{ $ml.get("gameStart") }}
              </th>
              <th
                class="t5"
                style="color: #828282;width:113px;item-align: left;"
              >
                {{ $ml.get("matchNum") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="toHover" v-for="el in ActiveMatchesParty" :key="el._id">
              <td class="t4 players">
                {{ button == 1 ? $ml.get("solo") : $ml.get("party") }}
              </td>
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
                  <div class="t4 playerName">{{ i.login }}</div>
                </span>
              </td>
              <td>
                <button
                  id="enterMath"
                  @click="LeaveGame(el.matchNumber, el.gameType)"
                  class="enterMath t4"
                >
                  {{ $ml.get("cancel") }}
                </button>
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
          </tbody>
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
      if (this.user.steamID && this.user.purse >= 1)
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
    partyGames() {
      if (this.user.matches)
        return this.user.matches.filter((el) => el.gameType == "Party");
      else return [];
    },
    soloGames() {
      if (this.user.matches)
        return this.user.matches.filter((el) => el.gameType == "Solo");
      else return [];
    },
    tutorialStep() {
      return this.$store.getters.tutorialStep;
    },
    selected() {
      return this.$store.getters.selectedTab;
    },
    ActiveMatches() {
      return this.$store.getters.activeMatches;
    },
    UpcomingMatches() {
      return this.$store.getters.upcomingMatches;
    },
    PlayingMatches() {
      return this.$store.getters.playingMatches;
    },
    ActiveMatchesParty() {
      return this.$store.getters.activeMatchesParty;
    },
    UpcomingMatchesParty() {
      return this.$store.getters.upcomingMatchesParty;
    },
    PlayingMatchesParty() {
      return this.$store.getters.playingMatchesParty;
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
.gamesTable tbody {
  max-height: 3.7037037037037033vh;
}
.gamesTable thead {
  position: sticky;
  top: 0;
}
.gamesTable tbody::-webkit-scrollbar {
  width: 0.18518518518518517vh;
}

.gamesTable tbody::-webkit-scrollbar-track {
  background: white;
  border-radius: 0.27777777777777773vh;
}

.gamesTable tbody::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 0.27777777777777773vh;
}
.linkTable:hover {
  color: #bf0603 !important;
  cursor: pointer;
}
.content {
  position: absolute;
  left: 0.9259259259259258vh;
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
.slide-right {
  color: rgb(101, 100, 100);
  transition: color 0.5s;
}
.slide-right:hover {
  color: #1f2430;
}
.toHover {
  z-index: 1;
  transition: box-shadow 0.3s;
  margin-bottom: 0.4629629629629629vh !important;
}
.toHover:hover {
  background-color: white !important;
  z-index: 10;
  box-shadow: 0 0 0.9259259259259258vh 0.37037037037037035vh #cbcaca;
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
  padding: 0.37037037037037035vh 3.4259259259259256vh;
  background: #ffffff;
  border: 1px solid #35a7ff;
  box-sizing: border-box;
  border-radius: 0.7407407407407407vh;
  float: right;
  margin-right: 5.648148148148148vh;
  transition: background 0.5s;
}
.enterMath:hover {
  background: #f3f4f7;
}
.players {
  padding-left: 1.111111111111111vh;
}
.buttonSolo {
  padding: 1.4814814814814814vh 4.444444444444444vh;
  position: absolute;
  color: black;
  top: 3.888888888888889vh;
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
  margin: 0 1.4814814814814814vh 0 0;
  float: left;
  width: 1.4814814814814814vh;
  height: 1.4814814814814814vh;
  background: #1f2430;
  border-radius: 0.7407407407407407vh;
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
  top: 1.4814814814814814vh;
  width: 0;
  height: 0;
  border-left: 0.7407407407407407vh solid transparent;
  border-right: 0.7407407407407407vh solid transparent;
  border-bottom: 1.4814814814814814vh solid #f2f2f2;
}
.playerName {
  opacity: 0;
  position: fixed;
  top: 2.962962962962963vh;
  left: -8.425925925925926vh;
  text-align: center;
  background-color: #f2f2f2;
  padding: 0px 6px;
  position: absolute;
  width: 16.85185185185185vh;
  height: 4.259259259259259vh;
}
.first {
  left: 44.25925925925926vh;
}
.second {
  left: 64.35185185185185vh;
}
.smVretLine {
  position: absolute;
  width: 0.18518518518518517vh;
  height: 6.481481481481481vh;
  left: 61.388888888888886vh;
  top: 3.888888888888889vh;
  background: #1f2430;
}
.activeBtn {
  background: #1f2430;
  color: white;
}
.tabTitle {
  text-align: center;
  padding: 0.7407407407407407vh 2.962962962962963vh;
  position: absolute;
  width: 20vh;
  height: 3.333333333333333vh;
  border-left: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  top: 15.37037037037037vh;
  transition: top 0.5s, height 0.5s, border-bottom 0.25s;
}
.tabTitleSelected {
  top: 14.444444444444443vh !important;
  height: 4.259259259259259vh;
  border-bottom: 3px solid white;
}
.tab1T {
  left: 23.61111111111111vh;
  z-index: 2;
}
.tab2T {
  left: 51vh;
  z-index: 2;
}
.tab3T {
  left: 78.51851851851852vh;
  z-index: 2;
}
.tabContent {
  position: absolute;
  width: 69.21875vw;
  height: 0px;
  left: 0;
  top: 20.277777777777775vh;
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
