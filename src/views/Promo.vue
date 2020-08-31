<template>
  <div>
    <div :class="{ preloader: true, hidePreloader: start }">
      <div :class="{ preloaderLogo: true, black: start2 }"></div>
      <div :class="{ loading: true, load: start }"></div>
    </div>
    <div :class="{ show: show, comp: true }" id="page1" style="position:relative">
      <Main />
    </div>
    <div :class="{ show: show, comp: true }" id="page2" style="position:relative">
      <Principes />
    </div>
    <div :class="{ show: show, comp: true }" id="page3" style="position:relative">
      <AboutUs />
    </div>
    <div :class="{ show: show, comp: true }" id="page4" style="position:relative">
      <FAQ />
    </div>
    <div :class="{ show: show, comp: true }" id="page5" style="position:relative">
      <ContactUs />
    </div>
    <RightDots style="opacity:0;transition:opacity .5s" :class="{ showDots: start3 }" />
  </div>
</template>
<script>
import Main from "../components/Main";
import Principes from "../components/Principes";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import RightDots from "../components/General/RightDots";

export default {
  components: { Main, Principes, FAQ, ContactUs, AboutUs, RightDots },
  data() {
    return {
      start: false,
      start2: false,
      start3: false,
      show: false,
    };
  },
  methods: {},
  mounted: function () {
    setTimeout(() => {
      this.start2 = true;
      setTimeout(() => {
        this.start = !this.start;
        this.show = true;
      }, 1000);
    }, 20);
    setTimeout(() => {
      this.start3 = true;
    }, 4000);

    if (this.$route.params.currentPage) {
      this.$store.commit("SetCurrentPage", +this.$route.params.currentPage);
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.$store.commit("SetCurrentPage", 1);
      }, 100);
    }
    window.addEventListener("keydown", (e) => {
      if ((e.keyCode == 38 || e.keyCode == 40) && e.target.nodeName == "BODY") {
        e.preventDefault();
        switch (this.$store.getters.GetCurrentPage) {
          case 1:
            if (e.keyCode == 40) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 2);
              setTimeout(() => this.$store.commit("SetAnim1"), 1000);
            }
            break;
          case 2:
            if (e.keyCode == 38) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);

              this.$store.commit("SetCurrentPage", 1);
            } else if (e.keyCode == 40) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 3);
              setTimeout(() => this.$store.commit("SetAnim2"), 1000);
              setTimeout(() => this.$store.commit("SetAnim3", 4), 2000);
            }
            break;
          case 3:
            if (e.keyCode == 38) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 2);
              setTimeout(() => this.$store.commit("SetAnim1"), 1000);
            } else if (e.keyCode == 40) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 4);
              setTimeout(() => this.$store.commit("SetAnim4"), 1000);
              setTimeout(() => this.$store.commit("SetAnim5", 4), 2000);
            }
            break;
          case 4:
            if (e.keyCode == 38) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 3);
              setTimeout(() => {
                this.$store.commit("SetAnim2", 3);
              }, 1000);
              setTimeout(() => this.$store.commit("SetAnim3", 4), 2000);
            } else if (e.keyCode == 40) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 5);
            }
            break;
          case 5:
            if (e.keyCode == 38) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 4);
              setTimeout(() => this.$store.commit("SetAnim4"), 1000);
              setTimeout(() => this.$store.commit("SetAnim5", 4), 2000);
            }
            break;
          default:
            break;
        }
      }
    });
    window.addEventListener(
      "mousewheel",
      (e) => {
        switch (this.$store.getters.GetCurrentPage) {
          case 1:
            if (e.deltaY > 0) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 2);
              setTimeout(() => this.$store.commit("SetAnim1"), 1000);
            }
            break;
          case 2:
            if (e.deltaY < 0) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);

              this.$store.commit("SetCurrentPage", 1);
            } else {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 3);
              setTimeout(() => this.$store.commit("SetAnim2"), 1000);
              setTimeout(() => this.$store.commit("SetAnim3", 4), 2000);
            }
            break;
          case 3:
            if (e.deltaY < 0) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 2);
              setTimeout(() => this.$store.commit("SetAnim1"), 1000);
            } else {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 4);
              setTimeout(() => this.$store.commit("SetAnim4"), 1000);
              setTimeout(() => this.$store.commit("SetAnim5", 4), 2000);
            }
            break;
          case 4:
            if (e.deltaY < 0) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 3);
              setTimeout(() => {
                this.$store.commit("SetAnim2");
              }, 1000);
              setTimeout(() => this.$store.commit("SetAnim3"), 2000);
            } else {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 5);
            }
            break;
          case 5:
            if (e.deltaY < 0) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 4);
              setTimeout(() => this.$store.commit("SetAnim4"), 1000);
              setTimeout(() => this.$store.commit("SetAnim5", 4), 2000);
            }
            break;
          default:
            break;
        }
      },
      { passive: false }
    );
  },
};
</script>
<style>
.comp {
  opacity: 0;
  transition: opacity 3s;
}
.show {
  opacity: 1;
}
.loading {
  position: absolute;
  width: 0px;
  height: 4px;
  left: 754px;
  top: 607px;
  background-color: black;
  transition: background-color 2.75s, width 2.75s;
  z-index: 101;
}
.load {
  width: 411px;
  background-color: white;
}
.showDots {
  opacity: 1 !important;
}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: white;
  transition: opacity 3.75s, z-index 4.25s;
}
.hidePreloader {
  opacity: 0;
  z-index: 0;
}
.preloaderLogo {
  background-image: url(../assets/DarewinBlack.svg);
  position: absolute;
  width: 411px;
  height: 345px;
  left: 754px;
  top: 262px;
  opacity: 0;
  transition: background-image 3.75s;
  transition: opacity 1s;
}
.black {
  opacity: 1 !important;
}
</style>
