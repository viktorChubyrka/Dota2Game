<template>
  <div>
    <div class="first-div">
      <Header headerColor="#000000" class="header4" />
      <div class="logo4"></div>
      <div
        style="position: absolute;
                
                left: 200px;
                top: 202px;"
        class="t3 slide-right"
      >{{ $ml.get("header5") }}</div>
      <div
        style="position: absolute;
                left: 970px;
                top: 202px;"
        class="t3 slide-right"
      >{{ $ml.get("ask") }}</div>
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
          style="position:absolute; padding:4px 18px; width: 750px; height: 40px; left: 970px;
        top: 275px; border: 1px solid #BDBDBD; box-sizing: border-box;
        border-radius: 4px;"
          type="text"
        />
        <textarea
          class="t5"
          v-model="reportDiscription"
          :placeholder="yq()"
          style="position: absolute;
          padding:4px 18px;
                width: 750px;
                height: 169px;
                left: 970px;
                top: 331px;
                border: 1px solid #BDBDBD;
                box-sizing: border-box;
                border-radius: 4px;"
          type="textarea"
        />
        <button
          @click="SendReport()"
          class="t5"
          style="position: absolute;
                width: 316px;
                height: 40px;
                left: 1404px;
                top: 516px;
                color:white;
                border-size:0px;
                background: #1F2430;
                border-radius: 4px;"
        >{{ $ml.get("ask") }}</button>
      </div>
    </div>
    <div class="second-div">
      <div class="futerLogo"></div>
      <div
        style="position: absolute;
                left: 200px;
                bottom:58px;
                color:#e0e0e0"
        class="t6"
      >Darewin’s club, 2020. All rights reserved.</div>
      <div
        style="position: absolute;
                left: 612px;
                bottom:288px;
                color:#f2f2f2"
        class="t3 slide-right"
      >{{ $ml.get("map") }}</div>
      <ul class="t6" id="pageMap">
        <li>
          <a @click="SetCurentPage(1)" href="#page1">
            {{
            $ml.get("header1")
            }}
          </a>
        </li>
        <li>
          <a @click="SetCurentPage(2)" href="#page2">
            {{
            $ml.get("header2")
            }}
          </a>
        </li>
        <li>
          <a @click="SetCurentPage(3)" href="#page3">
            {{
            $ml.get("header3")
            }}
          </a>
        </li>
        <li>
          <a @click="SetCurentPage(4)" href="#page4">
            {{
            $ml.get("header4")
            }}
          </a>
        </li>
        <li>
          <a href="/personalArea">{{ $ml.get("userCab") }}</a>
        </li>
        <li>
          <a @click="SetCurentPage(5)" href="#page5">
            {{
            $ml.get("header5")
            }}
          </a>
        </li>
      </ul>
      <div
        style="position: absolute;
                left: 920px;
                bottom:288px;
                color:#f2f2f2"
        class="t3 slide-right"
      >{{ $ml.get("pp") }}</div>
      <ul style="left:920px;bottom:166px" class="t6" id="pageMap">
        <li>{{ $ml.get("usePol") }}</li>
        <li>{{ $ml.get("confPol") }}</li>
        <li>{{ $ml.get("AMLPol") }}</li>
      </ul>
      <ul class="t4" id="fotterLogInUl">
        <li>
          <router-link class="link" to="/login">
            {{
            $ml.get("logIn")
            }}
          </router-link>
        </li>
        <li>
          <router-link class="link" to="/registration">
            {{
            $ml.get("register")
            }}
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
  left: 200px;
  top: 60px;
  width: 174px;
  height: 36px;
}
.header4 {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
}
#contactTable tr td {
  padding: 8px 28px 8px 0px;
}
#contactTable {
  position: absolute;
  left: 200px;
  top: 268px;
}
.futerLogo {
  background: url(../assets/Darewin.svg);
  position: absolute;
  bottom: 120px;
  left: 200px;
  width: 241.24px;
  height: 196px;
}
#pageMap {
  position: absolute;
  left: 612px;
  bottom: 58px;
  list-style-type: none;
  color: #e0e0e0;
  padding: 0;
}
#pageMap li {
  padding-top: 12px;
}
#pageMap li a {
  text-decoration: none;
  color: #f2f2f2;
}
#fotterLogInUl {
  padding: 0;
  position: absolute;
  bottom: 268px;
  right: 200px;
}
#fotterLogInUl li {
  display: inline;
  padding-left: 32px;
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
  padding-left: 25px;
}
#socialSites {
  list-style-type: none;
  position: absolute;
  padding: 0;
  right: 200px;
  bottom: 180px;
  color: #f2f2f2;
}
</style>
