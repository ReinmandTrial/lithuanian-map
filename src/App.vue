<template>
  <div id="app">
    <all-pages
      v-if="pagesIsOpen"
      :homeIsOpen="homeIsOpen"
      :contactsIsOpen="contactsIsOpen"
      :littleLithuaniaIsOpen="littleLithuaniaIsOpen"
      :vaneRoadIsOpen="vaneRoadIsOpen"
      @openMap="closePages"
      @openHomeFromHeader="
        {
          closePages()
        }
        {
          pagesIsOpen = true
        }
        {
          homeIsOpen = true
        }
      "
      @OpenBurgerFromHome="openBurger = !openBurger"
      @openContactsFromHome="
        {
          homeIsOpen = false
        }
        {
          contactsIsOpen = true
        }
      "
    />
    <div v-if="!pagesIsOpen" class="map-main">
      <button
        type="button"
        @click="
          {
            pagesIsOpen = true
          }
          {
            homeIsOpen = true
          }
        "
        class="logo"
      >
        <img src="@/assets/images/logo.svg" alt="Logo" />
      </button>
      <div class="options">
        <v-dropdown
          :data_marks="data_marks"
          @regionCount="returnRegionCount"
          :tagsCount="tagsCount"
        />
        <marks-selected
          :selectedObjects="selectedObjects"
          @click.native="openPopup"
        />
        <button
          type="button"
          class="burger-btn"
          @click="openBurger = !openBurger"
        >
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="2.25" rx="1.125" fill="#00404E" />
            <rect y="7.5" width="24" height="2.25" rx="1.125" fill="#00404E" />
            <rect y="15" width="24" height="2.25" rx="1.125" fill="#00404E" />
          </svg>
        </button>
      </div>
      <map-svg
        :marks="data_marks"
        @addCardToSelected="addCardToSelected"
        :regionCount="regionCount"
        @tagsCount="returnTagsCount"
      />

      <popup-selected-objects
        :selectedObjects="selectedObjects"
        @addCardToSelected="addCardToSelected"
      />
    </div>
    <div class="burger" :class="{ openBurger }">
      <div class="burger__content">
        <button
          type="button"
          class="burger__btn-close"
          @click="openBurger = !openBurger"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 8L8 24"
              stroke="#00404E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#00404E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul class="burger__list">
          <li class="burger__item">
            <a
              href="#"
              class="burger__link"
              @click="
                {
                  closePages()
                }
                {
                  pagesIsOpen = true
                }
                {
                  homeIsOpen = true
                }
                {
                  openBurger = !openBurger
                }
              "
            >
              Pagrindinis
            </a>
          </li>
          <li class="burger__item">
            <a
              href="#"
              class="burger__link"
              @click="
                {
                  closePages()
                }
                {
                  pagesIsOpen = true
                }
                {
                  vaneRoadIsOpen = true
                }
                {
                  openBurger = !openBurger
                }
              "
            >
              Vėtrungių kelias
            </a>
          </li>
          <li class="burger__item">
            <a
              href="#"
              class="burger__link"
              @click="
                {
                  closePages()
                }
                {
                  pagesIsOpen = true
                }
                {
                  littleLithuaniaIsOpen = true
                }
                {
                  openBurger = !openBurger
                }
              "
            >
              Mažoji Lietuva
            </a>
          </li>
          <li class="burger__item">
            <a
              href="#"
              class="burger__link"
              @click="
                {
                  closePages()
                }
                {
                  pagesIsOpen = true
                }
                {
                  contactsIsOpen = true
                }
                {
                  openBurger = !openBurger
                }
              "
            >
              Kontaktai
            </a>
          </li>
        </ul>
        <div class="burger__socials">
          <a
            href="https://www.facebook.com/vetrungiukelias"
            target="_blank"
            class="burger__social-link"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5479 0H2.4521C1.09778 0 0 1.09778 0 2.4521V31.5479C0 32.9022 1.09778 34 2.4521 34H18.1621V20.8516H13.7461V15.7051H18.1621V11.9176C18.1621 7.52544 20.8435 5.13481 24.7615 5.13481C26.638 5.13481 28.2507 5.27463 28.7207 5.33714V9.92773H26.0191C23.8873 9.92773 23.4746 10.9407 23.4746 12.4273V15.7051H28.5713L27.9072 20.8516H23.4746V34H31.5479C32.9022 34 34 32.9022 34 31.5479V2.4521C34 1.09778 32.9022 0 31.5479 0Z"
                fill="#00404E"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/watch?v=Eij3CNpQxmQ&ab_channel=%C5%A0ilut%C4%97skult%C5%ABrosirpramog%C5%B3centras"
            target="_blank"
            class="burger__social-link"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.6613 10.1998C33.6613 10.1998 33.3293 7.85566 32.3066 6.82637C31.0117 5.47168 29.5641 5.46504 28.9 5.38535C24.1453 5.04004 17.0066 5.04004 17.0066 5.04004H16.9934C16.9934 5.04004 9.85469 5.04004 5.1 5.38535C4.43594 5.46504 2.98828 5.47168 1.69336 6.82637C0.670703 7.85566 0.345312 10.1998 0.345312 10.1998C0.345312 10.1998 0 12.9557 0 15.7049V18.2814C0 21.0307 0.338672 23.7865 0.338672 23.7865C0.338672 23.7865 0.670703 26.1307 1.68672 27.16C2.98164 28.5146 4.68164 28.4682 5.43867 28.6143C8.16133 28.8732 17 28.9529 17 28.9529C17 28.9529 24.1453 28.9396 28.9 28.601C29.5641 28.5213 31.0117 28.5146 32.3066 27.16C33.3293 26.1307 33.6613 23.7865 33.6613 23.7865C33.6613 23.7865 34 21.0373 34 18.2814V15.7049C34 12.9557 33.6613 10.1998 33.6613 10.1998ZM13.4871 21.4092V11.8533L22.6711 16.6479L13.4871 21.4092Z"
                fill="#00404E"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="burger__cloud burger__cloud-top-left">
        <img src="@/assets/images/cloud-top-left.svg" alt="cloud" />
      </div>
      <div class="burger__cloud burger__cloud-bottom-left">
        <img src="@/assets/images/cloud-bottom-left.svg" alt="cloud" />
      </div>
      <div class="burger__cloud burger__cloud-right-center">
        <img src="@/assets/images/cloud-right-center.svg" alt="cloud" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '@/assets/scss/style.scss'
import allPages from './components/homePage.vue'
import mapSvg from './components/map-svg.vue'
import dropDown from './components/dropDown.vue'
import marksSelected from './components/marksSelected.vue'
import PopupSelectedObjects from './components/popup-selected-objects.vue'
export default {
  name: 'App',
  data() {
    return {
      selectedObjects: [],
      popupIsOpen: false,
      openBurger: false,
      pagesIsOpen: true,
      homeIsOpen: true,
      contactsIsOpen: false,
      littleLithuaniaIsOpen: false,
      vaneRoadIsOpen: false,
      data_marks: null,
      regionCount: null,
      tagsCount: null,
    }
  },
  beforeCreate: function () {
    axios
      .get('https://vetrungiukelias.lt/api/wp-json/vk/v1/posts')
      .then((response) => (this.data_marks = response.data))
      .catch((error) => console.log(error))
  },
  components: {
    'all-pages': allPages,
    'map-svg': mapSvg,
    'v-dropdown': dropDown,
    'marks-selected': marksSelected,
    'popup-selected-objects': PopupSelectedObjects,
  },
  methods: {
    openPopup: function () {
      document.querySelector('.popup-selected-objects').classList.add('active')
    },
    closePages() {
      this.homeIsOpen = false
      this.contactsIsOpen = false
      this.littleLithuaniaIsOpen = false
      this.vaneRoadIsOpen = false

      this.pagesIsOpen = false
    },
    closeBurger() {
      if (this.openBurger == true) {
        this.openBurger = false
      }
      // console.log(this.openBurger)
    },
    addCardToSelected: function (data) {
      let myArray = this.selectedObjects
      let myIndex = myArray.indexOf(data.thisMark)

      if (myIndex !== -1) {
        myArray.splice(myIndex, 1)
        data.thisEvent.target.closest('.btn-red').innerHTML =
          'Pasirinkti objektą'
      } else {
        myArray.push(data.thisMark)
        data.thisEvent.target.closest('.btn-red').innerHTML = 'Ištrinti objektą'

        let card = data.thisEvent.target.closest('.mark-card')
        let counter = document.querySelector('.selected-marks__counter')
        const oldValueLeft = getComputedStyle(card).left
        const oldValueBottom = getComputedStyle(card).bottom
        const oldValueTop = getComputedStyle(card).top

        let cardX = card.getBoundingClientRect().left

        let cardYBottom = card.getBoundingClientRect().bottom
        let cardYTop = card.getBoundingClientRect().top
        let cardHeight = card.getBoundingClientRect().height
        let counterX = counter.getBoundingClientRect().left
        let counterY = counter.getBoundingClientRect().bottom
        let markBtn = document.querySelector('.mark-btn')
        let markBtnHeight = markBtn.getBoundingClientRect().height
        let oldCardX = card.offsetTop

        // let distanceFromMark = oldCardX + cardHeight

        let newCardX = counterX - cardX + 'px'
        let newCardY

        if (card.closest('.mark').classList.contains('from-top-origin')) {
          newCardY = -cardYTop + counterY + oldCardX + markBtnHeight + 'px'
          card.style.top = newCardY
        } else {
          newCardY =
            cardYBottom -
            counterY -
            (oldCardX + cardHeight) +
            markBtnHeight +
            'px'
          card.style.bottom = newCardY
        }

        // card.closest('.mark').classList.remove('from-top-origin')
        card.style.left = newCardX
        // card.closest('.mark').classList.remove('active')

        // console.log(oldValueX)

        setTimeout(function () {
          card.style.left = oldValueLeft
          card.style.bottom = oldValueBottom
          card.style.top = oldValueTop
        }, 300)
      }
    },
    returnRegionCount: function (data) {
      this.regionCount = data
    },
    returnTagsCount: function (data) {
      this.tagsCount = data
    },
  },
  mounted: function () {
    // console.log(this.returnTagsCount())
  },
  computed: {},
}
</script>

<style lang="scss">
.logo {
  position: fixed;
  top: 18px;
  z-index: 60;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  left: calc((100vw - 1125px) / 2);
  @media (max-width: 1125px) {
    left: 0px;
  }
  @media (max-width: 575.98px) {
    width: 60px;
    height: 60px;
    top: 15px;
    margin-left: 20px;
    img {
      width: 40px;
      height: 35px;
    }
  }
}
.options {
  position: fixed;
  top: 43px;
  z-index: 65;
  display: flex;
  column-gap: 10px;
  padding-right: 25px;
  right: calc((100vw - 1125px) / 2);
  @media (max-width: 1125px) {
    right: 0px;
  }
  @media (max-width: 575.98px) {
    column-gap: 6px;
    top: 25px;
  }
}
.burger-btn {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 575.98px) {
    width: 40px;
    height: 40px;
    svg {
      width: 19px;
      height: 14px;
    }
  }
}
.burger {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px 130px;
  top: 100vh;
  transition: 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  @media (max-width: 991.98px) {
    padding: 30px 50px;
  }
  @media (max-width: 575.98px) {
    padding: 30px 15px;
  }
  &.openBurger {
    top: 0vh;
    .burger__content {
      // transform: translateY(0vh);
    }
    .burger__cloud {
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .burger__cloud-top-left {
      left: -704px;
      transition-delay: 0.3s;

      @media (max-width: 575.98px) {
        left: -400px;
      }
    }
    .burger__cloud-bottom-left {
      left: -133px;
      transition-delay: 0.5s;
      @media (max-width: 1125px) {
        left: -185px;
      }
    }
    .burger__cloud-right-center {
      right: -193px;
      transition-delay: 0.4s;

      @media (max-width: 575.98px) {
        right: -175px;
      }
    }
  }
  &__content {
    // transform: translateY(100vh);
    // transition: 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.1);
    flex: none;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 13px 13px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    @media (max-width: 575.98px) {
      padding: 30px 12px 45px;
    }
  }

  &__btn-close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 43px;
    right: 62px;
    width: 52px;
    height: 52px;
    background: #f8f8f8;
    border-radius: 50%;
    @media (max-width: 575.98px) {
      @media (max-height: 600px) {
        right: 10px;
        top: 10px;
      }
    }
  }

  &__list {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
  }

  &__item {
    text-align: center;
  }

  &__link {
    font-size: 36px;
    font-weight: 700;
    position: relative;
    z-index: 20;
    @media (max-width: 575.98px) {
      font-size: 32px;
    }
  }

  &__socials {
    border-top: 1px solid rgba(0, 64, 78, 0.6);
    padding-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 47px;
  }

  &__social-link {
  }

  &__cloud {
    position: fixed;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    // pointer-events: none;
  }

  &__cloud-top-left {
    top: -100px;
    left: -1200px;
    pointer-events: none;
    @media (max-width: 991.98px) {
      width: 900px;
      top: -80px;
    }
    @media (max-width: 575.98px) {
      top: -17px;
      width: 617px;
    }

    @media (max-width: 374.98px) {
      width: 535px;
    }
  }

  &__cloud-bottom-left {
    bottom: 32px;
    left: -780px;
    pointer-events: none;
    // transition-delay: 0.15s;
    @media (max-width: 1125px) {
      width: 590px;
      bottom: 130px;
    }
    @media (max-width: 991.98px) {
      width: 405px;
    }
    @media (max-width: 374.98px) {
      width: 323px;
    }
  }

  &__cloud-right-center {
    top: 55%;
    right: -650px;
    pointer-events: none;
    // transition-delay: 0.2s;
    @media (max-width: 991.98px) {
      width: 410px;
    }
    @media (max-width: 575.98px) {
      width: 331px;
      top: 51%;
    }
    @media (max-width: 374.98px) {
      width: 270px;
    }
  }
}
</style>
