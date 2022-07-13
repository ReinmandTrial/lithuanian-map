<template>
  <div class="vane-road">
    <header class="vane-road__header header">
      <div class="header__logo" @click="$emit('openHomeFromHeader')">
        <img src="@/assets/images/logo-2.svg" alt="Logo" />
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
          <rect y="7.5" width="24" height="2.25" rx="1.125" fill="#00404E" />
          <rect y="15" width="24" height="2.25" rx="1.125" fill="#00404E" />
        </svg>
      </button>
    </header>
    <title-line :title="vaneRoadData.title" />
    <div class="container">
      <div class="vane-road__content">
        <div class="vane-road__post">
          <div class="vane-road__image">
            <img src="@/assets/images/weathercocks.jpg" alt="" />
          </div>
          <p class="vane-road__text" v-html="vaneRoadData.text"></p>
        </div>
        <div class="vane-road__video">
          <iframe
            src="https://www.youtube.com/embed/8ERGFT2E_Gk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p class="vane-road__descr">{{ vaneRoadData.descr }}</p>
        <div class="vane-road__row">
          <div class="vane-road__col">
            <p class="vane-road__sub-descr">{{ vaneRoadData.routeText }}</p>
            <button
              type="button"
              class="vane-road__btn"
              @click="$emit('openMap')"
            >
              {{ vaneRoadData.routeButtonText }}
            </button>
          </div>
          <div class="vane-road__col">
            <p class="vane-road__sub-descr">{{ vaneRoadData.playText }}</p>
            <button type="button" class="vane-road__btn">
              {{ vaneRoadData.playButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleLine from './titleLine.vue'
export default {
  name: 'vaneRoad',
  components: {
    titleLine,
  },
  data() {
    return {
      vaneRoadData: {
        title: 'Vėtrungių kelias',
        image: '',
        text:
          '<strong>VĖTRUNGIŲ KELIAS</strong> – tai žaidimas – kelionė norintiems ne tik įdomiai praleisti laiką, bet ir pažinti Mažąją Lietuvą! <br> Idėja kurti „Vėtrungių kelią“ kilo Šilutės kultūros bendruomenei, o dabar platus partnerių ratas iš 7-ių regiono savivaldybių, siūlo išradingai atrasti unikalų Mažosios Lietuvos kraštą. Šilutės kultūros centras nuo 2013 metų įgyvendina kultūrinio turizmo projektą „Vėtrungių kelias“, kuris kasmet tampa vis interaktyvesnis ir vis labiau įtraukiantis kiekvieną dalyvį. ',
        descr:
          'PRADĖK ĮSPŪDŽIŲ KUPINĄ KELIONĘ „VĖTRUNGIU KELIU“ PO MAŽĄJĄ LIETUVĄ!',
        routeText:
          'Tapk kelionės planuotoju ir susikurk SAVO „Vėtrungių kelio“ maršrutą.',
        routeButtonText: 'Kurk Savo Vėtrungių Kelią',
        playText:
          'Žaisk „Vėtrungių kelio“ interaktyvų žaidimą ir laimėk prizus.',
        playButtonText: 'Žaisk Vėtrungių Kelią',
      },
    }
  },
  computed: {},
}
</script>

<style lang="scss">
.vane-road {
  &__header {
    position: static;
    transform: none;
    .header__logo {
      width: 62px;
      @media (max-width: 575.98px) {
        width: 54px;
      }
    }
  }
  &__content {
    padding: 55px 0 85px;
    @media (max-width: 575.98px) {
      padding: 15px 0 35px;
    }
  }

  &__post {
    margin-bottom: 60px;
    min-height: 200px;
    @media (max-width: 575.98px) {
      flex-direction: column-reverse;
      display: flex;
      row-gap: 15px;
      margin-bottom: 30px;
    }
  }

  &__image {
    float: left;
    flex: none;
    margin-right: 20px;
    margin-bottom: 20px;
    width: 410px;
    @media (max-width: 991.98px) {
      width: 300px;
    }
    @media (max-width: 575.98px) {
      width: stretch;
      margin-right: -15px;
      margin-left: -15px;
      float: unset;
      margin-bottom: unset;
    }
    img {
      width: 100%;
    }
  }

  &__text {
    line-height: 1.75;
    color: #383838;
  }
  &__video {
    margin-bottom: 50px;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    @media (max-width: 575.98px) {
      margin-bottom: 20px;
    }
    iframe,
    video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &__descr {
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 30px;
    @media (max-width: 575.98px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  &__row {
    display: flex;
    column-gap: 130px;
    @media (max-width: 767.98px) {
      flex-direction: column;
      row-gap: 24px;
      align-items: flex-start;
    }
  }
  &__col {
    max-width: 446px;
  }
  &__sub-descr {
    font-size: 20px;
    margin-bottom: 24px;
    @media (max-width: 575.98px) {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  &__btn {
    flex: none;
    color: #ffffff;
    padding: 10px 27px;
    border-radius: 30px;
    background: #db3831;
    width: fit-content;
    @media (max-width: 575.98px) {
    }
  }
}
</style>
