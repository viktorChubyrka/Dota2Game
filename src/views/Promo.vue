<template >
  <div>
    <div :class="{preloader:true,hidePreloader:start}">
      <div :class="{preloaderLogo:true, logoWhite:start}"></div>
      <div :class="{loading:true,load:start}"></div>
    </div>
    <div :class="{show:show,comp:true}" id="page1" style="position:relative">
      <Main />
    </div>
    <div :class="{show:show,comp:true}" id="page2" style="position:relative">
      <Principes />
    </div>
    <div :class="{show:show,comp:true}" id="page3" style="position:relative">
      <AboutUs />
    </div>
    <div :class="{show:show,comp:true}" id="page4" style="position:relative">
      <FAQ />
    </div>
    <div :class="{show:show,comp:true}" id="page5" style="position:relative">
      <ContactUs />
    </div>
    <RightDots />
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
      show: false
    };
  },
  methods: {},
  mounted: function() {
    setTimeout(() => {
      this.start = !this.start;
      this.show = true;
    }, 20);
    if (this.$route.params.currentPage) {
      this.$store.commit("SetCurrentPage", +this.$route.params.currentPage);
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.$store.commit("SetCurrentPage", 1);
      }, 100);
    }
    document.addEventListener("keydown", e => {
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
            setTimeout(
              () => this.$store.commit("SetCurrentAnimation", 2),
              1000
            );
          } else if (e.keyCode == 40) {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage + 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            this.$store.commit("SetCurrentPage", 4);
            this.$store.commit("SetCurrentAnimation", 5);
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
              this.$store.commit("SetCurrentAnimation", 3);
            }, 1000);
            setTimeout(
              () => this.$store.commit("SetCurrentAnimation", 4),
              2000
            );
          } else if (e.keyCode == 40) {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage + 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            this.$store.commit("SetCurrentPage", 5);
            this.$store.commit("SetCurrentAnimation", 6);
          }
          break;
        case 5:
          if (e.keyCode == 38) {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage - 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            this.$store.commit("SetCurrentPage", 4);
            this.$store.commit("SetCurrentAnimation", 5);
          }
          break;
        default:
          break;
      }
    });
    window.addEventListener(
      "mousewheel",
      e => {
        e.preventDefault();
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
              setTimeout(
                () => this.$store.commit("SetCurrentAnimation", 2),
                1000
              );
            } else {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 4);
              this.$store.commit("SetCurrentAnimation", 5);
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
                this.$store.commit("SetCurrentAnimation", 3);
              }, 1000);
              setTimeout(
                () => this.$store.commit("SetCurrentAnimation", 4),
                2000
              );
            } else {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 5);
              this.$store.commit("SetCurrentAnimation", 6);
            }
            break;
          case 5:
            if (e.deltaY < 0) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 4);
              this.$store.commit("SetCurrentAnimation", 5);
            }
            break;
          default:
            break;
        }
      },
      { passive: false }
    );
  }
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
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: white;
  transition: opacity 3.25s, z-index 3.25s;
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
  transition: background-image 2.75s;
}
.logoWhite {
  background-image: url(../assets/Darewin.svg);
}
</style>
