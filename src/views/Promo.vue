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
    if (this.$route.params.currentPage) {
      this.$store.commit("SetCurrentPage", +this.$route.params.currentPage);
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.$store.commit("SetCurrentPage", 1);
      }, 100);
    }
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
              setTimeout(
                () => this.$store.commit("SetCurrentAnimation", 2),
                1000
              );
            }
            break;
          case 2:
            if (e.deltaY < 0) {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage - 1}`
              ).offsetTop;
              window.scrollTo(0, top);

              this.$store.commit("SetCurrentPage", 1);
              this.$store.commit("SetCurrentAnimation", 1);
            } else {
              var top = document.getElementById(
                `page${this.$store.getters.GetCurrentPage + 1}`
              ).offsetTop;
              window.scrollTo(0, top);
              this.$store.commit("SetCurrentPage", 3);
              setTimeout(
                () => this.$store.commit("SetCurrentAnimation", 3),
                1000
              );
              setTimeout(
                () => this.$store.commit("SetCurrentAnimation", 4),
                2000
              );
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
<style></style>
