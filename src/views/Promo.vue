<template>
  <div>
    <div id="page1" style="position:relative">
      <Main />
    </div>
    <div id="page2" style="position:relative">
      <Principes />
    </div>
    <div id="page3" style="position:relative">
      <AboutUs />
    </div>
    <div id="page4" style="position:relative">
      <FAQ />
    </div>
    <div id="page5" style="position:relative">
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
    return {};
  },
  beforeDestroy() {
    localStorage.setItem("currentPage", this.$store.getters.GetCurrentPage);
  },
  mounted: function() {
    window.addEventListener("scroll", () => {
      let pos = window.pageYOffset;
      if (pos == 0) this.$store.commit("SetCurrentAnimation", 1);
      else if (pos == 992) this.$store.commit("SetCurrentAnimation", 2);
      else if (pos == 1984) {
        this.$store.commit("SetCurrentAnimation", 3);
        setTimeout(() => this.$store.commit("SetCurrentAnimation", 4), 1000);
      } else if (pos == 2976) this.$store.commit("SetCurrentAnimation", 5);
      else if (pos == 3968) this.$store.commit("SetCurrentAnimation", 6);
    });
    if (localStorage.getItem("currentPage")) {
      var top = document.getElementById(`page1`).offsetTop;
      window.scrollTo(0, top);
      localStorage.setItem("currentPage", -1);
    }

    if (this.$route.params.currentPage) {
      this.$store.commit("SetCurrentPage", +this.$route.params.currentPage);
    } else this.$store.commit("SetCurrentPage", 1);
    window.addEventListener("mousewheel", e => {
      switch (this.$store.getters.GetCurrentPage) {
        case 1:
          if (e.deltaY > 0) {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage + 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            console.log(top);
            this.$store.commit("SetCurrentPage", 2);
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
            console.log(top);
            this.$store.commit("SetCurrentPage", 3);
          }
          break;
        case 3:
          if (e.deltaY < 0) {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage - 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            this.$store.commit("SetCurrentPage", 2);
          } else {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage + 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            console.log(top);
            this.$store.commit("SetCurrentPage", 4);
          }
          break;
        case 4:
          if (e.deltaY < 0) {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage - 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            this.$store.commit("SetCurrentPage", 3);
          } else {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage + 1}`
            ).offsetTop;
            window.scrollTo(0, top);
            console.log(top);
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
          }
          break;
        default:
          break;
      }
    });
  }
};
</script>
<style></style>
