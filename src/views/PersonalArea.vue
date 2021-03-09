<template>
  <div>
    <ul
      @mouseleave="notification = false"
      :class="{ notificationUl: notification, notificationContainer: true }"
      :style="{ top: !notification ? `-${notificationHeight}px` : '96px' }"
    >
      <li v-for="(not, i) in notifications" :key="i" style="margin-bottom:10px">
        <Message :notification="not" />
      </li>
    </ul>
    <div :class="{ headerPA: true, headerPAShow: show }">
      <router-link style="width: 30%;" to="/">
        <div class="logoPA"></div>
      </router-link>
      <div id="inform">
        <div class="onlineDot"></div>
        <div class="onlineText t5">{{ online }} {{ $ml.get("online") }}</div>
        <div class="readyDot"></div>
        <div class="readyText t5">{{ ready }} {{ $ml.get("redy") }}</div>
        <div class="cash t5">
          ${{ user.purse }} — {{ user.purse }} Darewin’s dollar
        </div>
      </div>
      <div class="header-actions">
        <div @click="StartTutorial()" class="tutorial-start-icon-container">
          <img src="/icons/question.svg" class="tutorial-start-icon" />
        </div>
        <div class="notification">
          <i
            @click="ShowNotifications()"
            :style="
              `${
                notification
                  ? 'transition:color 0.5s'
                  : 'transition:color 0.5s;color:grey'
              } ;`
            "
            class="fa fa-bell fa-lg notif"
          >
            <div class="indicator" v-if="newNotifications"></div>
          </i>
        </div>
        <div v-if="!user.photo" class="profileSmallImage"></div>
        <img
          v-if="user.photo"
          class="user-profile-photo-small"
          :src="user.photo"
          alt
        />

        <router-link style="text-decoration:none" to="profile">
          <div style="color:black;" class="nickname t5">
            {{ login }}
          </div>
        </router-link>
        <div @click="LogOut()" class="logOut t4">{{ $ml.get("LogOut") }}</div>
      </div>
    </div>
    <div :class="{ actions: true, show: show2 }">
      <div>
        <div
          @click="SetActive()"
          :class="{
            readyIcon1: true,
            show: show,
            'tutorial-selected-element':
              tutorialStep == 1 && show3 && user.tutorial,
          }"
        >
          <div>
            <svg
              :class="{ icon: true }"
              width="28"
              height="44"
              viewBox="0 0 28 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  :class="{ activeML: user.ready, hoverIcon: !user.ready }"
                  d="M27.8779 16.9429C27.7961 16.8011 27.6773 16.6832 27.5339 16.6012C27.3904 16.5192 27.2273 16.476 27.0612 16.476H14.7633L16.8251 1.02283C16.8472 0.816019 16.7977 0.607917 16.6846 0.432035C16.5715 0.256154 16.4013 0.122728 16.2015 0.0532393C16.0017 -0.0162492 15.7839 -0.0177562 15.5831 0.048961C15.3823 0.115678 15.2103 0.246737 15.0947 0.421036L0.139058 26.1234C0.0516024 26.2629 0.00366986 26.4228 0.00020247 26.5866C-0.00326492 26.7504 0.0378583 26.9121 0.119333 27.055C0.200807 27.198 0.319684 27.3171 0.463705 27.4C0.607726 27.4829 0.771679 27.5266 0.938659 27.5266H13.0528L11.4189 43.003C11.4028 43.2091 11.4575 43.4146 11.5742 43.5867C11.6909 43.7588 11.8629 43.8876 12.0629 43.9528C12.2629 44.0179 12.4794 44.0156 12.6778 43.9462C12.8763 43.8767 13.0454 43.7442 13.1582 43.5696L20.5124 30.7198L27.8667 17.87C27.952 17.7302 27.998 17.5708 27.9999 17.4079C28.0019 17.245 27.9598 17.0846 27.8779 16.9429Z"
                  fill="#BDBDBD"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="28" height="44" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            v-if="user.ready"
            :class="{ readyIconText1: true, show: show, t4: true }"
          >
            {{ $ml.get("redy") }}!
          </div>
          <div v-else :class="{ readyIconText12: true, show: show, t4: true }">
            {{ $ml.get("notReady") }}
          </div>
        </div>
      </div>
      <div
        @click="FindPartyGame()"
        :class="{
          readyIcon2: true,
          show: show,
          'tutorial-selected-element':
            tutorialStep == 2 && show3 && user.tutorial,
        }"
      >
        <div>
          <svg
            class="icon hoverIcon"
            width="64"
            height="44"
            viewBox="0 0 64 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.0209 34.3613L41.4826 33.823C41.4576 33.798 41.445 33.7854 41.42 33.7604C38.4408 35.5254 35.0109 36.4768 31.4934 36.4768C27.0746 36.4768 22.8686 35.0122 19.4513 32.3083C18.525 32.9468 17.5736 33.6603 16.6473 34.4239C15.9088 35.0247 15.4832 35.9385 15.4832 36.8899V41.4088H31.5435H47.5913V39.9192L42.8721 35.2L42.0209 34.3613Z"
              fill="#BDBDBD"
            />
            <path
              d="M32.257 6.75964H31.5435H30.83C27.5503 6.75964 24.884 9.42593 24.884 12.7056V19.3025C24.884 20.3414 25.4098 21.2427 26.2109 21.781V27.414C27.8257 28.2402 29.6283 28.6908 31.5059 28.6908C33.4086 28.6908 35.2362 28.2402 36.8636 27.3889V21.7935C37.6647 21.2552 38.1904 20.354 38.1904 19.315V12.7181C38.203 9.41341 35.5367 6.75964 32.257 6.75964Z"
              fill="#BDBDBD"
            />
            <path
              d="M61.1228 29.9676C57.6929 27.1511 54.0002 25.286 53.2491 24.9104C53.1615 24.8729 53.1114 24.7852 53.1114 24.6851V19.3525C53.7874 18.9019 54.2255 18.1383 54.2255 17.2746V11.7417C54.2255 8.98781 51.9973 6.75964 49.2434 6.75964H48.6426H48.0918C49.8443 9.60118 50.8582 12.8558 50.9834 16.2481C51.1336 20.0285 50.1823 23.7337 48.2796 26.9383C48.3046 26.9633 48.3171 26.9759 48.3422 27.0009L48.5925 27.2512L48.8804 27.5392L49.7316 28.3904L57.1922 35.851H62.0992V32.0581C62.0992 31.2444 61.7362 30.4808 61.1228 29.9676Z"
              fill="#BDBDBD"
            />
            <path
              d="M57.8182 39.9818L47.9667 30.1303L47.1155 29.2791L46.8276 28.9912L46.5772 28.7408L45.9138 29.4043L44.4868 27.9772C50.1448 21.3053 49.8319 11.291 43.5229 4.98208C40.2057 1.66486 35.8495 0 31.5058 0C27.1622 0 22.806 1.66486 19.4888 4.98208C12.8543 11.6165 12.8543 22.3818 19.4888 29.0162C22.806 32.3334 27.1622 33.9983 31.5058 33.9983C35.4114 33.9983 39.3169 32.6589 42.4839 29.9801L43.9109 31.4071L43.2475 32.0706L43.7858 32.6088L44.637 33.46L54.4885 43.3115C54.9516 43.7747 55.5525 44 56.1533 44C56.7542 44 57.355 43.7747 57.8182 43.3115C58.732 42.3977 58.732 40.9081 57.8182 39.9818C57.8182 39.9943 57.8182 39.9818 57.8182 39.9818ZM41.5201 27.0259C38.7536 29.7923 35.1235 31.1693 31.5058 31.1693C27.8757 31.1693 24.258 29.7923 21.4916 27.0259C15.9587 21.493 15.9587 12.5303 21.4916 6.99744C24.258 4.23101 27.8882 2.85405 31.5058 2.85405C35.136 2.85405 38.7536 4.23101 41.5201 6.99744C47.0529 12.5178 47.0529 21.493 41.5201 27.0259Z"
              fill="#BDBDBD"
            />
            <path
              d="M14.9448 6.75964H14.4566H13.8558C11.1018 6.75964 8.87368 8.98781 8.87368 11.7417V17.2746C8.87368 18.1383 9.31181 18.9019 9.98777 19.3525V24.6851C9.98777 24.7852 9.93769 24.8604 9.85007 24.9104C9.099 25.2734 5.40626 27.1511 1.97639 29.9676C1.36302 30.4808 1 31.2444 1 32.0456V35.8384H13.1673C13.4176 34.5491 14.0936 33.385 15.1201 32.5463C15.9462 31.8703 16.7849 31.2319 17.6111 30.6436C11.2145 24.1343 10.3257 14.2202 14.9448 6.75964Z"
              fill="#BDBDBD"
            />
          </svg>
        </div>
        <div
          :class="{
            readyIconText2: true,
            t4: true,
            readyIconText2Eng: this.$store.getters.lang == 2,
            show: show,
          }"
        >
          {{ $ml.get("getComand") }}
        </div>
      </div>

      <div
        style="cursor:pointer"
        :class="{
          readyIcon3: true,
          show: show,
          'tutorial-selected-element':
            tutorialStep == 3 && show3 && user.tutorial,
        }"
        @click="SearchGame()"
      >
        <div>
          <svg
            class="icon"
            width="48"
            height="44"
            viewBox="0 0 48 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="hoverIcon"
              d="M43.7084 11.4823C37.3685 1.32636 27.8179 8.39197 27.8179 8.39197C27.1985 8.84841 26.0564 9.22368 25.2803 9.22542L22.7222 9.22717C21.9461 9.22804 20.804 8.85277 20.1855 8.39633C20.1855 8.39633 10.634 1.32898 4.29323 11.4849C-2.04578 21.6374 0.508799 32.694 0.508799 32.694C0.956343 35.4012 2.43145 37.2077 5.21517 36.9808C7.99083 36.7548 14.0157 29.69 14.0157 29.69C14.5133 29.1079 15.5561 28.6323 16.3304 28.6323L31.6668 28.6297C32.4419 28.6297 33.4838 29.1053 33.9806 29.6874C33.9806 29.6874 40.0063 36.7522 42.7865 36.9782C45.5666 37.2051 47.0453 35.3968 47.4901 32.6914C47.4892 32.6914 50.0483 21.6365 43.7084 11.4823ZM18.2369 19.7488H14.9483V22.8391C14.9483 22.8391 14.252 23.3575 13.1743 23.3444C12.0984 23.3287 11.6115 22.7789 11.6115 22.7789V19.7497H8.50551C8.50551 19.7497 8.11794 19.3622 8.01411 18.3419C7.91207 17.3217 8.44285 16.497 8.44285 16.497H11.7323V13.2906C11.7323 13.2906 12.409 12.9371 13.3819 12.9642C14.3558 12.9939 15.0692 13.3508 15.0692 13.3508L15.0558 16.4961H18.1617C18.1617 16.4961 18.7041 17.1751 18.7489 17.9955C18.7936 18.8167 18.2369 19.7488 18.2369 19.7488ZM33.3209 23.2711C31.8807 23.2711 30.7198 22.1357 30.7198 20.7332C30.7198 19.3281 31.8807 18.1953 33.3209 18.1953C34.7548 18.1953 35.9247 19.3281 35.9247 20.7332C35.9247 22.1366 34.7548 23.2711 33.3209 23.2711ZM33.3209 16.2884C31.8807 16.2884 30.7198 15.1539 30.7198 13.7514C30.7198 12.3463 31.8807 11.2135 33.3209 11.2135C34.7548 11.2135 35.9247 12.3463 35.9247 13.7514C35.9247 15.1547 34.7548 16.2884 33.3209 16.2884ZM39.8031 20.0368C38.3629 20.0368 37.202 18.9022 37.202 17.4989C37.202 16.0947 38.3629 14.961 39.8031 14.961C41.2371 14.961 42.4069 16.0947 42.4069 17.4989C42.4069 18.9022 41.2371 20.0368 39.8031 20.0368Z"
              fill="#BDBDBD"
            />
          </svg>
        </div>
        <div :class="{ readyIconText3: true, show: show, t4: true }">
          {{ $ml.get("findG") }}
        </div>
      </div>
    </div>
    <div class="main-content-container">
      <div :class="{ sideNavigation: true, sideNavigationShow: show }">
        <ul class="sideNavUl">
          <router-link class="RL " to="games">
            <li
              @click="ChangePage(1)"
              :class="{
                t5: true,
                iconFocused: windowLocation == 'Games',
                'tutorial-selected-element':
                  tutorialStep == 4 && show3 && user.tutorial,
              }"
            >
              <div style="display:flex">
                <img
                  :class="{ icon: true }"
                  src="../assets/iconsPA/gamesIcon.svg"
                />
                <div>{{ $ml.get("game") }}</div>
              </div>
            </li>
          </router-link>
          <router-link class="RL" to="rules">
            <li
              @click="ChangePage(2)"
              :class="{
                t5: true,
                iconFocused: windowLocation == 'Rules',
                'tutorial-selected-element':
                  tutorialStep == 10 && show3 && user.tutorial,
              }"
            >
              <div style="display:flex">
                <img
                  :class="{ icon: true }"
                  src="../assets/iconsPA/rulesIcon.svg"
                />
                <div>{{ $ml.get("pravil") }}</div>
              </div>
            </li>
          </router-link>
          <router-link class="RL" to="profile">
            <li
              @click="ChangePage(3)"
              :class="{
                t5: true,
                iconFocused: windowLocation == 'Profile',
                'tutorial-selected-element': tutorialStep == 11 && show3,
              }"
            >
              <div style="display:flex">
                <img
                  :class="{ icon: true }"
                  src="../assets/iconsPA/profileIcon.svg"
                />
                <div>{{ $ml.get("prof") }}</div>
              </div>
            </li>
          </router-link>
          <router-link class="RL" to="friends">
            <li
              @click="ChangePage(4)"
              :class="{
                t5: true,
                iconFocused: windowLocation == 'Friends',
                'tutorial-selected-element':
                  tutorialStep == 12 && show3 && user.tutorial,
              }"
            >
              <div style="display:flex">
                <img
                  :class="{ icon: true }"
                  src="../assets/iconsPA/friendsIcon.svg"
                />
                <div>{{ $ml.get("frend") }}</div>
              </div>
            </li>
          </router-link>
          <router-link class="RL" to="money">
            <li
              @click="ChangePage(5)"
              :class="{
                t5: true,
                iconFocused: windowLocation == 'Money',
                'tutorial-selected-element':
                  tutorialStep == 13 && show3 && user.tutorial,
              }"
            >
              <div style="display:flex">
                <img
                  :class="{ icon: true }"
                  src="../assets/iconsPA/moneyIcon.svg"
                />
                <div>{{ $ml.get("money") }}</div>
              </div>
            </li>
          </router-link>
          <router-link class="RL" to="loyalityProgram">
            <li
              @click="ChangePage(6)"
              :class="{
                t5: true,
                iconFocused: windowLocation == 'LoyalityProgram',
                'tutorial-selected-element':
                  tutorialStep == 14 && show3 && user.tutorial,
              }"
            >
              <div style="display:flex">
                <img
                  :class="{ icon: true }"
                  src="../assets/iconsPA/familyIcon.svg"
                />
                <div>Darewin’s family</div>
              </div>
            </li>
          </router-link>
          <router-link style="margin:0" :class="{ RL: true }" to="support0">
            <li
              @click="ChangePage(7)"
              :class="{
                t5: true,
                iconFocused: windowLocation == 'Support',
                'tutorial-selected-element':
                  tutorialStep == 15 && show3 && user.tutorial,
              }"
            >
              <div style="display:flex">
                <img
                  :class="{ icon: true }"
                  src="../assets/iconsPA/infoIcon.svg"
                />
                <div>{{ $ml.get("sup") }}</div>
              </div>
            </li>
          </router-link>
        </ul>
      </div>

      <div
        @scroll="setScroll()"
        id="router"
        style="overflow-y:scroll;scroll-behavior:smooth"
        :class="{ pages: true, show: show3 }"
      >
        <router-view></router-view>
      </div>
    </div>

    <div
      @click="isPrivate = false"
      v-if="isPrivate"
      class="isPrivateAccountModal"
    >
      <div class="messageContainer">
        <p>
          Для того чтобы начать игру нужно сделать свой стим профиль публичным
        </p>
      </div>
    </div>
    <Tutorial
      v-if="tutorialStep == 1 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(2)"
      :top="21.59259259259259"
      :left="23.148148148148145"
    >
      {{ $ml.get("t1") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 2 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(3)"
      :top="21.59259259259259"
      :left="55.55555555555555"
    >
      {{ $ml.get("t2") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 3 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(4)"
      :top="21.59259259259259"
      :left="92.59259259259258"
    >
      {{ $ml.get("t3") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 4 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(5)"
      :top="35.48148148148148"
      :left="3.7037037037037033"
    >
      {{ $ml.get("t4") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 5 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(6)"
      :top="35.25925925925926"
      :left="50.925925925925924"
    >
      {{ $ml.get("t5") }}</Tutorial
    ><Tutorial
      v-if="tutorialStep == 6 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(7)"
      :top="35.25925925925926"
      :left="81.48148148148148"
    >
      {{ $ml.get("t6") }}</Tutorial
    ><Tutorial
      v-if="tutorialStep == 7 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(8)"
      :top="44.44444444444444"
      :left="37.03703703703704"
    >
      {{ $ml.get("t7") }}</Tutorial
    ><Tutorial
      v-if="tutorialStep == 8 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(9)"
      :top="44.44444444444444"
      :left="62.03703703703703"
    >
      {{ $ml.get("t8") }}</Tutorial
    ><Tutorial
      v-if="tutorialStep == 9 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(10)"
      :top="44.44444444444444"
      :left="88.88888888888889"
    >
      {{ $ml.get("t9") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 10 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(11)"
      :top="43.5"
      :left="3.7037037037037033"
    >
      {{ $ml.get("t10") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 11 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(12)"
      :top="50.51851851851852"
      :left="3.7037037037037033"
    >
      {{ $ml.get("t11") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 12 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(13)"
      :top="58.53703703703703"
      :left="3.7037037037037033"
    >
      {{ $ml.get("t12") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 13 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(14)"
      :top="65.55555555555555"
      :left="3.7037037037037033"
    >
      {{ $ml.get("t13") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 14 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(15)"
      :top="72.57407407407407"
      :left="3.7037037037037033"
    >
      {{ $ml.get("t14") }}</Tutorial
    >
    <Tutorial
      v-if="tutorialStep == 15 && show3 && user.tutorial"
      @skip="SkipTutorial()"
      @submit="SetTutorialStep(0)"
      :top="80.5925925925926"
      :left="3.7037037037037033"
    >
      {{ $ml.get("t15") }}</Tutorial
    >
    <div class="no-money-pop-up"></div>
  </div>
</template>
<script>
import Message from "../components/General/Message";
import Tutorial from "../components/General/Tutorial.vue";
import Axios from "axios";
export default {
  components: { Message, Tutorial },

  data() {
    return {
      focus: 3,
      show: false,
      show2: false,
      show3: false,
      socket: null,
      online: 0,
      scroll: 0,
      notification: false,
      isPrivate: false,
    };
  },
  watch: {
    notifications() {
      if (this.user.ready && this.notifications.length) {
        this.notification = true;
        this.PlayNotificationSound();
      }
    },
    changeLang() {
      this.show = false;
      this.show2 = false;
      this.show3 = false;
      setTimeout(() => {
        setTimeout(() => {
          this.show2 = true;
          this.show = true;
          setTimeout(() => (this.show3 = true), 1000);
        }, 2000);
      }, 1);
    },
  },
  computed: {
    tutorialStep() {
      return this.$store.getters.tutorialStep;
    },
    changeLang() {
      return this.$store.getters.changeLang;
    },
    lang() {
      return this.$store.getters.lang;
    },
    windowLocation() {
      return this.$route.name;
    },
    scrollTop() {
      if (this.scroll) {
        if (this.scroll >= 750 && this.$route.name == "Support") return true;
        else return false;
      } else return false;
    },
    ready() {
      return this.$store.getters.ready;
    },
    login() {
      return localStorage.getItem("login") || "";
    },
    user() {
      return this.$store.getters.userData;
    },
    notifications() {
      let not = this.user.notifications;
      if (not) {
        if (this.user.notifications.length <= 8) {
          return this.user.notifications;
        } else {
          not.splice(0, this.user.notifications.length - 8);
          return not;
        }
      }
    },
    notificationHeight() {
      try {
        return this.notifications.length * 150;
      } catch {}
    },
    newNotifications() {
      if (this.user.notifications)
        for (let i = 0; i < this.user.notifications.length; i++) {
          if (this.user.notifications[i].new) {
            return true;
          }
        }
      return false;
    },
    setupWebSocket() {
      this.$store.commit(
        "SetSocket",
        //new WebSocket("ws://localhost:3000")
        new WebSocket("wss://darewins.club/api")
      );
      this.socket = this.$store.getters.socket;
      this.socket.onmessage = (event) => {
        let date = new Date();
        let user = this.$store.getters.userData;
        let message = JSON.parse(event.data);
        console.log(message.type);
        switch (message.type) {
          case "PrivateAccount":
            this.isPrivate = true;
            break;
          case "LobbyUpdate":
            this.$store.dispatch("GetUserData", { context: this });
            this.$store.dispatch("GetAllMatches");
            if (message.Tab) {
              this.$store.commit("setSelectedTab", message.Tab);
              this.$router.push("games");
            }
            this.$store.dispatch("GetAllReadyUsers");
            break;
          case "Chat":
            let newDate = { min: date.getMinutes(), hour: date.getHours() };
            this.$store.commit("setChat", {
              chat: [
                {
                  newDate,
                  message: message.message,
                  login: message.login,
                },
              ],
            });
            break;
          case "LobbyUpdateParty":
            this.$store.dispatch("GetUserData", { context: this });
            this.$store.dispatch("GetAllMatches");
            this.$store.dispatch("GetAllReadyUsers");
            if (this.user.partyID)
              this.$store.dispatch("GetParty", this.user.partyID);
            this.$router.push("friends");
            break;
          case "ReadyUpdate":
            this.$store.dispatch("GetAllReadyUsers");
            this.$store.dispatch("GetUserData", { context: this });
            if (message.partyID)
              this.$store.dispatch("GetParty", message.partyID);
            break;
          case "LobbyDestroyed":
            this.$store.dispatch("GetAllMatches");
            this.$store.dispatch("GetUserData", { context: this });
            if (message.Tab) this.$store.commit("setSelectedTab", message.Tab);
            this.$store.dispatch("GetAllReadyUsers");
            break;
          case "NotificationUpdate":
            this.$store.dispatch("GetUserData", { context: this });
            this.$store.dispatch("GetAllReadyUsers");
            break;
          case "online":
            this.online = message.online;
            this.$store.dispatch("GetAllReadyUsers");
            break;
          case "PartyUpdate":
            this.$store.dispatch("GetAllMatches");
            this.$store.dispatch("GetUserData", { context: this });
            this.$store.dispatch("GetParty", message.party);
            this.$store.dispatch("GetAllReadyUsers");
            if (message.matchID) this.$store.dispatch("GetAllMatches");
            break;
          default:
            this.$store.dispatch("GetUserData", { context: this });
            this.$store.dispatch("GetAllReadyUsers");
            break;
        }
      };
      this.socket.onclose = function() {
        setTimeout(setupWebSocket, 1000);
      };
    },
  },
  created() {
    if (localStorage.getItem("PersonalAreaPage"))
      this.focus = localStorage.getItem("PersonalAreaPage");
    this.$store.dispatch("GetAllMatches");
    this.setupWebSocket;
    setTimeout(() => {
      this.show2 = true;
      setTimeout(() => {
        this.show = true;
        setTimeout(() => (this.show3 = true), 1000);
      }, 2000);
    }, 1);
    setTimeout(() => {
      this.$store.dispatch("GetUserData", { context: this });
    }, 20);
  },
  methods: {
    async SkipTutorial() {
      this.$router.push("profile");
      this.$store.commit("setTutorialStep", 0);
      let a = await Axios.post(
        "https://darewins.club/api/user/actions/tutorial",
        { login: this.user.login, val: false }
      );
    },
    async StartTutorial() {
      this.$store.commit("setTutorialStep", 1);
      this.user.tutorial = true;
      console.log({ login: this.user.login, val: true });
      let a = await Axios.post(
        "https://darewins.club/api/user/actions/tutorial",
        { login: this.user.login, val: true }
      );
    },
    async SetTutorialStep(val) {
      if (this.tutorialStep == 3) {
        this.$router.push("games");
      }
      if (this.tutorialStep == 9) {
        this.$router.push("rules");
      }
      if (this.tutorialStep == 10) {
        this.$router.push("profile");
      }
      if (this.tutorialStep == 11) {
        this.$router.push("friends");
      }
      if (this.tutorialStep == 12) {
        this.$router.push("money");
      }
      if (this.tutorialStep == 13) {
        this.$router.push("loyalityProgram");
      }
      if (this.tutorialStep == 14) {
        this.$router.push("support0");
      }
      if (this.tutorialStep == 15) {
        this.$router.push("profile");
        this.$store.commit("setTutorialStep", val);
        let a = await Axios.post(
          "https://darewins.club/api/user/actions/tutorial",
          { login: this.user.login, val: false }
        );
      }
      this.$store.commit("setTutorialStep", val);
    },
    PlayNotificationSound() {
      let audio = new Audio("/audio/message.mp3");
      audio.play();
    },
    ShowNotifications() {
      this.notification = !this.notification;
    },
    setScroll() {
      this.scroll = document.getElementById("router").scrollTop;
    },
    scrollUp() {
      let router = document.getElementById("router");

      router.scrollTop = 0;
    },
    SetActive() {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          type: "SetActive",
        })
      );
    },
    SearchGame() {
      if (this.user.steamID.id && this.user.purse >= 1) {
        this.socket.send(
          JSON.stringify({
            login: localStorage.getItem("login"),
            type: "SearchGame",
          })
        );
      } else if (!this.user.steamID.id) {
        this.$router.push("profile");
      } else if (this.user.purse <= 1) {
        this.$router.push("money");
      }
    },
    FindPartyGame() {
      if (this.user.steamID.id && this.user.purse >= 1)
        // this.socket.send(
        //   JSON.stringify({
        //     login: localStorage.getItem("login"),
        //     type: "SearchPartyGame",
        //   })
        // );
        this.$router.push("friends");
      else this.$router.push("profile");
    },
    ChangePage(i) {
      this.focus = i;
      localStorage.setItem("PersonalAreaPage", i);
    },
    LogOut() {
      this.$store.dispatch("LogOut", { context: this });
    },
  },
};
</script>
<style>
.tutorial-start-icon {
  width: 1.574074074074074vh;
}
.tutorial-start-icon-container {
  border: 0.27777777777777773vh solid black;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.5s ease 0s;
  cursor: pointer;
  width: 2.77777777777777777777vh;
  height: 2.77777777777777777777vh;
  box-sizing: border-box;
}
.tutorial-start-icon-container:hover {
  opacity: 1;
}
.tutorial-selected-element {
  box-shadow: 0 0 10px 10px #ccc;
  animation: selected 2s ease infinite;
  z-index: 100 !important;
  position: relative;
}
.isPrivateAccountModal {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  backdrop-filter: blur(5px);
}
.messageContainer {
  width: 500px;
  font-size: 30px;
  background: #1f2430;
  color: white;
  border-radius: 30px;
  box-shadow: 0 0px 20px black;
  padding: 10px 20px;
  text-align: center;
  margin: 400px auto;
}
.notificationContainer {
  position: fixed;
  padding: 0 100px;
  right: 100px;
  z-index: 100;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  transition: top 1s;
  width: 500px;
}
.scrollTopBtn {
  position: fixed;
  right: 31%;
  bottom: 10%;
  width: 4vh;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f2f2f2;
  color: #1f2430;
  transition: background 0.5s, color 0.5s;
  cursor: pointer;
}

.scrollTopBtn:hover {
  color: #f2f2f2;
  background: #1f2430;
}
.scrollTopBtn .fa {
  font-size: 2vh;
}
.notification .indicator {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 0.9259259259259258vh;
  height: 0.9259259259259258vh;
  border-radius: 50%;
  background-color: red;
}
.profileSmallImage {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  left: 1699px;
  top: 25px;
  background: url(../assets/userEmpty.svg);
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
html {
  scroll-behavior: smooth;
}

.RL li {
  font-weight: bold;
  opacity: 0.6;
  transition: opacity 0.5s, margin-left 0.5s;
}
.RL li:hover {
  margin-left: 15px;
  opacity: 1;
}
.RL {
  text-decoration: none;
}
li div .icon {
  margin-right: 1vh;
}
.iconFocused {
  opacity: 1 !important;
  color: black;
  margin-left: 15px;
  opacity: 1;
  font-weight: bold;
}
.pages {
  position: relative;
  width: 80vw;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s;
}
.pages::-webkit-scrollbar {
  width: 0px;
}
.headerPA {
  width: 100vw;
  height: 7.962962962962963vh;
  background: white;
  transition: transform 1s;
  transform: translateY(-100%);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.7037037037037033vh;
  box-sizing: border-box;
}
.headerPAShow {
  transform: translateY(0);
}
.logoPA {
  background: url("../assets/DarewinLarge.svg");

  width: 16.3vh;
  height: 3.4vh;
}
.onlineDot {
  width: 1.2962962962962963vh;
  height: 1.2962962962962963vh;
  background: #baff29;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}
path {
  transition: fill 0.3s;
}
#inform {
  display: flex;
  align-items: center;
}
.hoverIcon:hover {
  fill: #ffffff !important;
}
.hoverIcon:hover path {
  fill: #ffffff !important;
}
.activeML {
  fill: gold !important;
}
.readyDot {
  width: 1.2962962962962963vh;
  height: 1.2962962962962963vh;
  margin-left: 2.962962962962963vh;
  background: #35a7ff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}
.header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
}
.onlineText {
  margin-left: 1.4814814814814814vh;
}
.readyText {
  margin-left: 1.4814814814814814vh;
}
.cash {
  margin-left: 5.925925925925926vh;
}
.notificationUl {
  display: inline !important;
}
.user-profile-photo-small {
  width: 2.7777777777777777vh;
  height: 2.7777777777777777vh;
  border-radius: 50%;
  margin-left: 1.5vh;
}
.notification {
  z-index: 10;
  margin-left: 1.5vh;
}
.notification:hover i.fa.fa-bell.fa-lg.notif {
  color: #1f2430 !important;
}
.nickname {
  margin-left: 1.5vh;
  width: 10vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nickname {
  cursor: pointer;
}
.logOut {
  color: #dc493a;
  cursor: pointer;
  margin-left: 1.5vh;
}
.actions {
  width: 100vw;
  height: 14.814814814814813vh;
  opacity: 0;
  background-color: transparent;
  background-color: #1f2430;
  transition: opacity 3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28.177083333333336vw;
  box-sizing: border-box;
}
.show {
  opacity: 1;
}
.readyIcon1 {
  color: #bdbdbd;
  opacity: 0;
  cursor: pointer;
  transition: opacity 1.5s;
  padding: 0.7407407407407407vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.readyIcon1 svg {
  width: 5.555555555555555vh;
  height: 4.62962962962963vh;
}
div.readyIcon1:hover svg g path.hoverIcon {
  fill: #ffffff !important;
}
.readyIcon2 {
  color: #bdbdbd;
  opacity: 0;
  cursor: pointer;
  padding: 0.7407407407407407vh;
  transition: opacity 1.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.readyIcon2 svg {
  width: 8.333333333333332vh;
  height: 4.62962962962963vh;
}
div.readyIcon2:hover svg path.hoverIcon {
  fill: #ffffff !important;
}
.readyIcon3 {
  padding: 0.7407407407407407vh;
  color: #bdbdbd;
  opacity: 0;
  transition: opacity 1.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.readyIcon3 svg {
  width: 7.4074074074074066vh;
  height: 4.62962962962963vh;
}

div.readyIcon3:hover svg path.hoverIcon {
  fill: #ffffff !important;
}
.readyIcon:hover {
  color: black !important;
}
.readyIcon4 {
  position: absolute;
  left: 918px;
  top: 45px;
  color: #bdbdbd;
  text-shadow: black 3px 2px;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIconText1 {
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIconText2 {
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIconText3 {
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIconText12 {
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1.5s;
}
.main-content-container {
  width: 100vw;
  height: 77.2vh;
  display: flex;
  padding: 0 3vw 0;
  box-sizing: border-box;
}
.readyIconText2Eng {
  left: 865px;
}
.sideNavigation {
  padding-top: 3.888888888888889vh;
  transition: transform 1s;
  transform: translateX(-100%);
  width: 14vw;
}
.sideNavigationShow {
  transform: translateX(0);
}
.sideNavUl {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.sideNavUl li {
  padding: 16px 0 16px 10px;
  width: calc(100% - 15px);
  color: black;
  background: #ffffff;
  box-sizing: border-box;
}
.sideNavUl li:hover {
  cursor: pointer;
}
.sideNavUl li i {
  margin-right: 15px;
}
.focusedLi {
  color: black !important;
}
</style>
