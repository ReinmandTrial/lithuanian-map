<template>
  <div class="pages">
    <div v-if="homeIsOpen" class="home-page">
      <div class="home-page__banner">
        <header class="header">
          <div class="header__logo">
            <img src="@/assets/images/logo-white.png" alt="Logo" />
          </div>

          <button
            type="button"
            class="header__burger burger-btn"
            @click="$emit('OpenBurgerFromHome')"
          >
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="2.25" rx="1.125" fill="#00404E" />
              <rect
                y="7.5"
                width="24"
                height="2.25"
                rx="1.125"
                fill="#00404E"
              />
              <rect y="15" width="24" height="2.25" rx="1.125" fill="#00404E" />
            </svg>
          </button>
        </header>
        <div class="home-page__banner-content">
          <h1 class="home-page__title">{{ homePageData.title }}</h1>
          <p class="home-page__descr">{{ homePageData.descr }}</p>
          <div class="home-page__btns">
            <button type="button" class="home-page__btn-red">
              {{ homePageData.btns.create }}
            </button>
            <button
              type="button"
              class="home-page__btn-white"
              @click="$emit('openMap')"
            >
              {{ homePageData.btns.play }}
            </button>
          </div>
        </div>
      </div>
      <div class="home-page__partners">
        <h3 class="home-page__partners-title">
          {{ homePageData.partners.title }}
        </h3>
        <div class="home-page__partners-slider partners-slider">
          <div class="partners-slider__item">
            <img src="@/assets/images/gargzdu-logo.png" alt="" />
          </div>
          <div class="partners-slider__item">
            <img src="@/assets/images/aurage-logo.png" alt="" />
          </div>
          <div class="partners-slider__item">
            <img src="@/assets/images/biblioteka-logo.png" alt="" />
          </div>
          <div class="partners-slider__item">
            <img src="@/assets/images/rambuno-logo.png" alt="" />
          </div>
          <div class="partners-slider__item">
            <img src="@/assets/images/swiming-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <contacts-page
      v-if="contactsIsOpen"
      @OpenBurgerFromHome="$emit('OpenBurgerFromHome')"
      @openHomeFromHeader="$emit('openHomeFromHeader')"
    />
    <little-lithuania
      v-if="littleLithuaniaIsOpen"
      @OpenBurgerFromHome="$emit('OpenBurgerFromHome')"
      @openHomeFromHeader="$emit('openHomeFromHeader')"
    />
    <vane-road
      v-if="vaneRoadIsOpen"
      @OpenBurgerFromHome="$emit('OpenBurgerFromHome')"
      @openHomeFromHeader="$emit('openHomeFromHeader')"
      @openMap="$emit('openMap')"
    />
    <v-footer
      @openMap="$emit('openMap')"
      @openContacts="$emit('openContactsFromHome')"
    />
  </div>
</template>

<script>
import Vfooter from './footer.vue'
import contactsPage from './contactsPage.vue'
import littleLithuania from './littleLithuania.vue'
import vaneRoad from './vaneRoad.vue'
export default {
  name: 'allPages',
  data() {
    return {
      // openBurger: false,
      homePageData: {
        title: 'MAŽOJI LIETUVA',
        descr: 'KELIAUK ATRASK PAŽINK',
        btns: {
          create: 'Kurk Savo Vėtrungių kelią',
          play: 'Žaisk vėtrungių kelią',
        },
        partners: {
          title: 'Mūsų partneriai',
        },
      },
    }
  },
  props: {
    homeIsOpen: {
      type: Boolean,
      default() {
        return true
      },
    },
    contactsIsOpen: {
      type: Boolean,
      default() {
        return false
      },
    },
    littleLithuaniaIsOpen: {
      type: Boolean,
      default() {
        return false
      },
    },
    vaneRoadIsOpen: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  methods: {},
  components: {
    'contacts-page': contactsPage,
    'little-lithuania': littleLithuania,
    'vane-road': vaneRoad,
    'v-footer': Vfooter,
  },
}
</script>

<style lang="scss">
header {
  padding: 20px 25px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1125px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  &__logo {
    width: 87px;
    height: 89px;
    @media (max-width: 575.98px) {
      width: 44px;
      height: 45px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__burger {
  }
}
.home-page {
  position: relative;
  // overflow-x: hidden;
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 100vw;
  background: #ffffff;
  // z-index: 100;
  // height: 100vh;
  // overflow-y: auto;
  &__banner {
    background: url(@/assets/images/banner-bg.jpg) center/cover no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 991.98px) {
      min-height: unset;
    }
  }

  &__banner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1 1 auto;
    padding: 130px 15px;
    @media (max-width: 575.98px) {
      padding: 110px 15px 100px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 96px;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 991.98px) {
      font-size: 55px;
      margin-bottom: 10px;
    }
    @media (max-width: 575.98px) {
      font-size: 36px;
    }
  }

  &__descr {
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 32px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    @media (max-width: 991.98px) {
      font-size: 22px;
    }
    @media (max-width: 575.98px) {
      font-size: 14px;
      margin-bottom: 35px;
    }
  }

  &__btns {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    @media (max-width: 575.98px) {
      column-gap: 6px;
    }
  }

  &__btn-red {
    padding: 10px 27px;
    text-align: center;
    border-radius: 40px;
    background: #db3831;
    color: #ffffff;
    @media (max-width: 575.98px) {
      font-size: 14px;
      padding: 8px 10px;
    }
  }

  &__btn-white {
    padding: 10px 27px;
    text-align: center;
    border-radius: 40px;
    color: #db3831;
    background: #ffffff;
    @media (max-width: 575.98px) {
      font-size: 14px;
      padding: 8px 10px;
    }
  }
  &__partners {
    position: relative;
    padding: 50px 0 95px;
    @media (max-width: 575.98px) {
      padding: 40px 0 60px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: calc(100% - 25px);
      right: -1px;
      width: calc(100% + 2px);
      height: 0;
      padding-bottom: 7.8%;
      background: url(@/assets/images/wave.svg) top right/ 100% no-repeat;
      @media (max-width: 991.98px) {
        bottom: calc(100% - 2px);
      }
      @media (max-width: 767.98px) {
        width: calc(100% + 130px);
        right: -10px;
      }
    }
  }
  &__partners-title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 50px;
    padding: 0 15px;
    text-align: center;
    @media (max-width: 575.98px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  &__partners-slider {
  }
}
.partners-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  column-gap: 18px;
  @media (max-width: 575.98px) {
    column-gap: 13px;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &__item {
    flex: none;
    @media (max-width: 767.98px) {
      height: 85px;
    }
    img {
      max-height: 100%;
    }
  }
}
</style>
