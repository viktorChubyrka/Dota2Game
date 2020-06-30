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

  mounted: function() {
    var tope = document.getElementById(`page1`).offsetTop;
    window.scrollTo(0, tope);
    this.$store.commit("SetCurrentPage", 1);
    window.addEventListener("mousewheel", (e) => {
      switch (this.$store.getters.GetCurrentPage) {
        case 1:
          if (e.deltaY > 0) {
            var top = document.getElementById(
              `page${this.$store.getters.GetCurrentPage + 1}`
            ).offsetTop;
            window.scrollTo(0, top);
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
  },
};
</script>
<style></style>
