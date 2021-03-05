<template>
  <div>
    <div class="first-div">
      <Header headerColor="#000000" class="header4" />
      <div class="logo4"></div>
      <div
        style="position: absolute;
                
                left: 18.51851851851852vh;
                top: 18.703703703703702vh;"
        class="t3 slide-right"
      >
        {{ $ml.get("header5") }}
      </div>
      <div
        style="position: absolute;
                left: 89.81481481481481vh;
                top: 18.703703703703702vh;"
        class="t3 slide-right"
      >
        {{ $ml.get("ask") }}
      </div>
      <table class="t4" id="contactTable">
        <tr>
          <td>{{ $ml.get("phone") }}</td>
          <td>+38 (097) 347-91-43</td>
        </tr>
        <tr>
          <td>{{ $ml.get("post") }}</td>
          <td>question@dclub.com</td>
        </tr>
        <tr>
          <td>{{ $ml.get("adres") }}</td>
          <td>Ужгород, улица Собранецкая 19, этаж 2</td>
        </tr>
      </table>

      <div>
        <input
          :placeholder="ea()"
          v-model="email"
          class="t5"
          style="position:absolute; padding:0.37037037037037035vh 1.6666666666666665vh; width: 69.44444444444444vh; height: 3.7037037037037033vh; left: 89.81481481481481vh;
        top: 25.462962962962962vh; border: 1px solid #BDBDBD; box-sizing: border-box;
        border-radius: 0.37037037037037035vh;"
          type="text"
        />
        <textarea
          class="t5"
          v-model="reportDiscription"
          :placeholder="yq()"
          style="position: absolute;
          padding:0.37037037037037035vh 1.6666666666666665vh;
                width: 69.44444444444444vh;
                height: 15.648148148148147vh;
                left: 89.81481481481481vh;
                top: 30.648148148148145vh;
                border: 1px solid #BDBDBD;
                box-sizing: border-box;
                border-radius: 0.37037037037037035vh;
                resize:none"
          type="textarea"
        />
        <button
          @click="SendReport()"
          class="t5"
          style="position: absolute;
                width: 29.259259259259256vh;
                height: 3.7037037037037033vh;
                left: 89.81481481481481vh;
                top: 47.77777777777777vh;
                color:white;
                border:none;
                background: #1F2430;
                border-radius: 0.37037037037037035vh;"
        >
          {{ $ml.get("ask") }}
        </button>
      </div>
    </div>
    <div class="second-div">
      <div class="futerLogo"></div>
      <div
        style="position: absolute;
                left: 18.51851851851852vh;
                bottom:5.37037037037037vh;
                color:#e0e0e0"
        class="t6"
      >
        Darewin’s club, 2020. All rights reserved.
      </div>
      <div
        style="position: absolute;
                left: 56.666666666666664vh;
                bottom:26.666666666666664vh;
                color:#f2f2f2"
        class="t3 slide-right"
      >
        {{ $ml.get("map") }}
      </div>
      <ul class="t6" id="pageMap">
        <li>
          <a @click="SetCurentPage(1)" href="#page1">
            {{ $ml.get("header1") }}
          </a>
        </li>
        <li>
          <a @click="SetCurentPage(2)" href="#page2">
            {{ $ml.get("header2") }}
          </a>
        </li>
        <li>
          <a @click="SetCurentPage(3)" href="#page3">
            {{ $ml.get("header3") }}
          </a>
        </li>
        <li>
          <a @click="SetCurentPage(4)" href="#page4">
            {{ $ml.get("header4") }}
          </a>
        </li>
        <li>
          <a href="/personalArea">{{ $ml.get("userCab") }}</a>
        </li>
        <li>
          <a @click="SetCurentPage(5)" href="#page5">
            {{ $ml.get("header5") }}
          </a>
        </li>
      </ul>
      <div
        style="position: absolute;
                left: 85.18518518518518vh;
                bottom:26.666666666666664vh;
                color:#f2f2f2"
        class="t3 slide-right"
      >
        {{ $ml.get("pp") }}
      </div>
      <ul
        style="left:85.18518518518518vh;bottom:15.37037037037037vh"
        class="t6"
        id="pageMap"
      >
        <li>{{ $ml.get("usePol") }}</li>
        <li>{{ $ml.get("confPol") }}</li>
        <li>{{ $ml.get("AMLPol") }}</li>
      </ul>
      <ul class="t4" id="fotterLogInUl">
        <li>
          <router-link class="link" to="/login">
            {{ $ml.get("logIn") }}
          </router-link>
        </li>
        <li>
          <router-link class="link" to="/registration">
            {{ $ml.get("register") }}
          </router-link>
        </li>
      </ul>
      <Lang />
      <ul id="socialSites">
        <li>
          <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-vk fa-2x" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-telegram fa-2x" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "./General/Header";
import Lang from "./General/Lang";

export default {
  components: { Header, Lang },
  data() {
    return {
      ea: () => {
        return this.$ml.get("emailAdres");
      },
      yq: () => {
        return this.$ml.get("youQ");
      },
      reportDiscription: "",
      email: "",
    };
  },
  methods: {
    SendReport() {
      if (this.email && this.reportDiscription)
        this.$store.dispatch("SendReport", {
          email: this.email,
          reportDescription: this.reportDiscription,
        });
      this.email = "";
      this.reportDiscription = "";
    },
    SetCurentPage(index) {
      this.$store.commit("SetCurrentPage", index);
      localStorage.setItem("currentPage", index);
      this.$router.push({ name: "Promo", params: { currentPage: index } });
      if (index == 3) {
        setTimeout(() => this.$store.commit("SetAnim2", 3), 1000);
        setTimeout(() => this.$store.commit("SetAnim3", 4), 2000);
      } else if (index == 2) {
        setTimeout(() => this.$store.commit("SetAnim1", index), 1000);
      }
    },
  },
};
</script>
<style>
.slide-right {
  color: rgb(101, 100, 100);
  transition: color 0.5s;
}
.slide-right:hover {
  color: #1f2430;
  cursor: default;
}
.first-div {
  width: 100%;
  height: 61vh;
  background: linear-gradient(242.49deg, #fefff3 0%, #ffffff 100%), #f2f2f2;
}
.second-div {
  width: 100%;
  height: 39vh;
  background: #1f2430;
}
.logo4 {
  background: url(../assets/DarewinLarge.svg);
  position: relative;
  left: 13.51851851851852vh;
  top: 5.555555555555555vh;
  width: 16.11111111111111vh;
  height: 3.333333333333333vh;
}
.header4 {
  float: right;
  margin-top: 5.555555555555555vh;
  margin-right: 15.185185185185183vh;
}
#contactTable tr td {
  padding: 0.7407407407407407vh 2.5925925925925926vh 0.7407407407407407vh 0px;
}
#contactTable {
  position: absolute;
  left: 18.51851851851852vh;
  top: 24.814814814814813vh;
}
.futerLogo {
  background: url(../assets/Darewin.svg);
  position: absolute;
  bottom: 11.11111111111111vh;
  left: 18.51851851851852vh;
  width: 22.37037037037037035vh;
  height: 18.148148148148145vh;
}
#pageMap {
  position: absolute;
  left: 56.666666666666664vh;
  bottom: 5.37037037037037vh;
  list-style-type: none;
  color: #e0e0e0;
  padding: 0;
}
#pageMap li {
  padding-top: 1.111111111111111vh;
}
#pageMap li a {
  text-decoration: none;
  color: #f2f2f2;
}
#fotterLogInUl {
  padding: 0;
  position: absolute;
  bottom: 24.814814814814813vh;
  right: 18.51851851851852vh;
}
#fotterLogInUl li {
  display: inline;
  padding-left: 2.962962962962963vh;
  color: #f2f2f2;
}
.link {
  color: #f2f2f2;
  text-decoration: none;
}
.link:hover {
  cursor: pointer;
}
#socialSites li {
  display: inline;
  padding-left: 2.314814814814815vh;
}
#socialSites {
  list-style-type: none;
  position: absolute;
  padding: 0;
  right: 18.51851851851852vh;
  bottom: 16.666666666666664vh;
  color: #f2f2f2;
}
</style>
