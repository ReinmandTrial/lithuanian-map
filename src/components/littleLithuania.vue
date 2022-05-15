<template>
  <div class="little-lithuania">
    <header class="little-lithuania__header header">
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
    <title-line :title="littleLithuaniaData.title" />
    <div class="container">
      <div class="little-lithuania__content">
        <div class="little-lithuania__post">
          <div class="little-lithuania__image">
            <img src="@/assets/images/little-lithuania-map.jpg" alt="" />
          </div>
          <p
            class="little-lithuania__text"
            v-html="littleLithuaniaData.text"
          ></p>
        </div>
        <div class="little-lithuania__row">
          <p class="little-lithuania__descr">{{ littleLithuaniaData.descr }}</p>
          <button
            type="button"
            class="little-lithuania__btn"
            @click="$emit('openMap')"
          >
            {{ littleLithuaniaData.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleLine from './titleLine.vue'
export default {
  name: 'littleLithuania',
  components: {
    titleLine,
  },
  data() {
    return {
      littleLithuaniaData: {
        title: 'Mažoji Lietuva',
        image: '',
        text:
          'Lietuvoje skiriami 5 etnografiniai regionai – Aukštaitija, Žemaitija, Dzūkija, Suvalkija  ir Mažoji Lietuva. Mažoji Lietuva – tai Klaipėdos ir Tauragės apskričių dalis. Visi etnografiniai regionai išsiskiria savitumu, o šis unikalus kraštas neretai ir pirmaujantis. <br> Į Mažosios Lietuvos ribas sutelpa vienos įspūdingiausių ir unikaliausių Lietuvos vietų: Kuršių Nerija – puikuojasi UNESCO pasaulinio paveldo šedevrų sąraše, nemažiau įspūdinga Nemuno delta su daugybe salų ir senuoju Rusnės miesteliu, Minijos kaimas su upe vietoje centrinės gatvės, pamario   gyvenvietės:   Kintai,   Ventės   ragas   su   ornitologine   stotimi,   Uostadvario, Ventės rago švyturiai, iki šiol primena buvusias Baltijos jūros ribas, o dabar saugo Nemuno deltos regioninio parko krantus. <br> Mažosios Lietuvos regionas yra turtingos, unikalios daugiakultūrės istorijos kraštas, o vėtrungė yra šio kultūrinio kelio tapatumo simbolis.',
        descr: 'ATRASK IR PAJAUSK MAŽOSIOS LIETUVOS KRAŠTO UNIKALUMĄ!',
        buttonText: 'Susidaryti savo maršrutą',
      },
    }
  },
  computed: {},
}
</script>

<style lang="scss">
.little-lithuania {
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
    margin-bottom: 65px;
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

  &__row {
    display: flex;
    align-items: center;
    column-gap: 40px;
    justify-content: space-between;
    @media (max-width: 767.98px) {
      flex-direction: column;
      row-gap: 15px;
      align-items: flex-start;
    }
  }

  &__descr {
    max-width: 720px;
    font-weight: 600;
    font-size: 36px;
    @media (max-width: 575.98px) {
      font-size: 20px;
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
