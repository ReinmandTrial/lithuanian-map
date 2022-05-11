<template>
  <!-- <div class="map" v-on:mousedown="mousedownMap"> -->
  <div class="map" @mousemove="mousemoveMap" @mouseup="mouseupMap">
    <div
      class="map__scale"
      :style="{ transform: 'scale(' + zoomvalue + ')' }"
      @wheel="zoomOOnScroll"
    >
      <div
        class="map__translateX"
        :style="{
          transform: 'translateX(' + newTranslateX / zoomvalue + 'px)',
        }"
      >
        <div
          class="map__translateY"
          :style="{
            transform: 'translateY(' + newTranslateY / zoomvalue + 'px)',
          }"
        >
          <div class="map__wrap" @mousedown.prevent="mousedownMap">
            <!-- <img src="@/assets/images/Base_Map_SVG.svg" alt="map" /> -->
            <img src="@/assets/images/Base_Map_SVG.jpg" alt="map" />
            <div class="map__jacht-1">
              <img
                src="@/assets/images/anim-targets/Meridianas_SVG.svg"
                alt="Jacht"
              />
            </div>

            <div class="map__jachts">
              <div class="map__jacht-2">
                <img
                  src="@/assets/images/anim-targets/Jachta_SVG.svg"
                  alt="Jacht"
                />
              </div>
              <div class="map__jacht-3">
                <img
                  src="@/assets/images/anim-targets/Jachta2_SVG.svg"
                  alt="Jacht"
                />
              </div>
              <div class="map__jacht-4">
                <img
                  src="@/assets/images/anim-targets/Valtis_SVG.svg"
                  alt="Jacht"
                />
              </div>
            </div>
            <div class="map__roads">
              <div class="map__road-A1">
                <img src="@/assets/images/roads/a1--.svg" alt="" />
              </div>
              <div class="map__road-e272">
                <img src="@/assets/images/roads/E272-t.svg" alt="" />
              </div>
              <div class="map__road-e77">
                <img src="@/assets/images/roads/E77.svg" alt="" />
              </div>
              <div class="map__road-gr">
                <img src="@/assets/images/roads/gr.svg" alt="" />
              </div>
            </div>
            <div class="map__windmills">
              <div class="map__windmill-1">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.svg"
                  alt=""
                />
              </div>
              <div class="map__windmill-2">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.svg"
                  alt=""
                />
              </div>
              <div class="map__windmill-3">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.svg"
                  alt=""
                />
              </div>
              <div class="map__windmill-4">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.svg"
                  alt=""
                />
              </div>
              <div class="map__windmill-5">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.svg"
                  alt=""
                />
              </div>
              <div class="map__windmill-6">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="map__towns">
              <div class="map__klaipeda">
                <img
                  src="@/assets/images/buildings/Klaipeda_SVG.svg"
                  alt="Jacht"
                />
                <p class="map__town-name">Klaipėda</p>
              </div>
              <div class="map__gargzdai">
                <img
                  src="@/assets/images/buildings/Gargzdai_SVG.svg"
                  alt="Jacht"
                />
                <p class="map__town-name">Gargzdai</p>
              </div>
              <div class="map__jurbarkas">
                <img
                  src="@/assets/images/buildings/Jurbarkas_SVG.svg"
                  alt="Jacht"
                />
                <p class="map__town-name">Jurbarkas</p>
              </div>
              <div class="map__nida">
                <img src="@/assets/images/buildings/Nida_SVG.svg" alt="Jacht" />
                <p class="map__town-name">Nida</p>
              </div>
              <div class="map__pagegiai">
                <img
                  src="@/assets/images/buildings/Pagegiai_SVG.svg"
                  alt="Jacht"
                />
                <p class="map__town-name">Pagegiai</p>
              </div>
              <div class="map__silute">
                <img
                  src="@/assets/images/buildings/Silute_SVG.svg"
                  alt="Jacht"
                />
                <p class="map__town-name">Silute</p>
              </div>
              <div class="map__taurage">
                <img
                  src="@/assets/images/buildings/Taurage_SVG.svg"
                  alt="Jacht"
                />
                <p class="map__town-name">Taurage</p>
              </div>
            </div>
            <div class="map__clouds">
              <div class="map__cloud-1">
                <img src="@/assets/images/anim-targets/Debesis1.svg" alt="" />
              </div>
              <div class="map__cloud-2">
                <img src="@/assets/images/anim-targets/Debesis1.svg" alt="" />
              </div>
              <div class="map__cloud-3">
                <img src="@/assets/images/anim-targets/Debesis2.svg" alt="" />
              </div>
              <div class="map__cloud-4">
                <img src="@/assets/images/anim-targets/Debesis2.svg" alt="" />
              </div>
            </div>
            <v-mark :marks="marks" @addCardToSelected="addCardToSelected" />
          </div>
        </div>
      </div>
    </div>
    <div class="zoom-panel">
      <button type="button" class="zoom-panel__plus" @click="zoomPlus">
        <img src="@/assets/images/svg-icons/plus.svg" alt="" />
      </button>

      <input
        type="range"
        min="1"
        max="2"
        value="1"
        class="zoom-panel__slider"
        id="zoom"
        v-model="zoomvalue"
        step="0.01"
        @change="currectTranslate"
      />
      <button type="button" class="zoom-panel__minus" @click="zoomMinus">
        <img src="@/assets/images/svg-icons/minus.svg" alt="" />
      </button>
    </div>
    <div class="marks-filter">
      <div
        class="marks-filter__item"
        v-for="filterItem in filter"
        :key="filterItem.id"
      >
        <div class="marks-filter__descr">{{ filterItem.descr }}</div>
        <mark-btn
          :mark="filterItem"
          @click.native="activeFilter"
          @mouseenter.native="hoverFilter"
          @mouseleave.native="hoverFilterEnd"
        />
        <button type="button" class="marks-filter__cancel">
          <svg
            width="12"
            height="12"
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
      </div>
    </div>
  </div>
</template>

<script>
import Mark from './mark.vue'
import MarkBtn from './mark-btn.vue'
export default {
  name: 'mapSvg',
  data() {
    return {
      zoomvalue: 1,
      swipeMap: false,
      posXStart: 0,
      translateX: 0,
      diffX: 0,
      posYStart: 0,
      translateY: 0,
      diffY: 0,
      newTranslateX: 0,
      newTranslateY: 0,
      filter: [
        {
          id: 1,
          descr: 'Nature',
          type: 'nature',
        },
        {
          id: 2,
          descr: 'Buildings',
          type: 'buildings',
        },
        {
          id: 3,
          descr: 'Food',
          type: 'food',
        },
        {
          id: 4,
          descr: 'Pramogos',
          type: 'games',
        },
        {
          id: 5,
          descr: 'Books',
          type: 'books',
        },
      ],
    }
  },
  props: {
    selectedObjects: {
      type: Array,
      default() {
        return []
      },
    },
    marks: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    'v-mark': Mark,
    'mark-btn': MarkBtn,
  },
  methods: {
    activeFilter: function (e) {
      const filterItems = document.querySelectorAll('.marks-filter__item')
      var thisElem = e.target.closest('.marks-filter__item')
      var markItems = document
        .querySelector('.marks-container')
        .querySelectorAll('.mark-btn')
      var count = 0
      var thisElemType = thisElem.querySelector('.mark-btn').classList[1]

      document.querySelector('.marks-filter').classList.add('work')

      if (!thisElem.classList.contains('active')) {
        thisElem.classList.remove('not-active')
        thisElem.classList.add('active')
        markItems.forEach((markItem) => {
          markItem.classList.add('not-active')
          if (thisElemType == markItem.classList[1]) {
            markItem.classList.remove('not-active')
            markItem.classList.add('active')
          }
        })
      } else {
        thisElem.classList.add('not-active')
        thisElem.classList.remove('active')
        markItems.forEach((markItem) => {
          if (thisElemType == markItem.classList[1]) {
            markItem.classList.add('not-active')
            markItem.classList.remove('active')
          }
        })
      }

      filterItems.forEach((filterItem) => {
        if (!filterItem.classList.contains('active')) {
          filterItem.classList.add('not-active')
        } else {
          count++
        }
      })
      if (count == 0) {
        document.querySelector('.marks-filter').classList.remove('work')
        filterItems.forEach((filterItem) => {
          filterItem.classList.remove('not-active')
        })
        markItems.forEach((markItem) => {
          markItem.classList.remove('not-active')
          markItem.classList.remove('active')
        })
      }
    },
    hoverFilter: function (e) {
      if (!document.querySelector('.marks-filter').classList.contains('work')) {
        var thisElem = e.target.closest('.marks-filter__item')
        var markItems = document
          .querySelector('.marks-container')
          .querySelectorAll('.mark-btn')
        var thisElemType = thisElem.querySelector('.mark-btn').classList[1]

        markItems.forEach((markItem) => {
          markItem.classList.add('not-hover')
          if (thisElemType == markItem.classList[1]) {
            markItem.classList.remove('not-hover')
          }
        })
      }
    },
    hoverFilterEnd: function () {
      if (!document.querySelector('.marks-filter').classList.contains('work')) {
        var markItems = document
          .querySelector('.marks-container')
          .querySelectorAll('.mark-btn')

        markItems.forEach((markItem) => {
          markItem.classList.remove('not-hover')
        })
      }
    },
    addCardToSelected: function (data) {
      this.$emit('addCardToSelected', data)
    },

    mousedownMap: function (e) {
      this.posXStart = e.clientX
      this.posYStart = e.clientY

      this.swipeMap = true
    },
    mousemoveMap: function (e) {
      if (this.swipeMap == true) {
        var posXNew = e.clientX
        this.diffX = posXNew - this.posXStart

        var posYNew = e.clientY
        this.diffY = posYNew - this.posYStart

        var mapPosX = this.mapX.getBoundingClientRect().left
        var mapPosXMax = this.mapX.getBoundingClientRect().right
        if (mapPosX >= 0) {
          this.translateX -= mapPosX
        }
        if (mapPosXMax <= window.innerWidth) {
          var mapPosXDiff = window.innerWidth - mapPosXMax
          this.translateX += mapPosXDiff
        }
        this.newTranslateX = this.translateX + this.diffX

        var mapPosY = this.mapY.getBoundingClientRect().top
        var mapPosYMax = this.mapY.getBoundingClientRect().bottom
        if (mapPosY >= 0) {
          this.translateY -= mapPosY
        }
        if (mapPosYMax <= window.innerHeight) {
          var mapPosYDiff = window.innerHeight - mapPosYMax
          this.translateY += mapPosYDiff
        }
        this.newTranslateY = this.translateY + this.diffY
      }
    },
    mouseupMap: function () {
      this.translateX += this.diffX
      this.translateY += this.diffY

      this.swipeMap = false
      // this.$emit('mouseUp', this.swipeMap)
    },
    zoomPlus: function () {
      if (this.zoomvalue < 2) {
        this.zoomvalue += 0.2
        this.currectTranslate()
      }
    },
    zoomMinus: function () {
      if (this.zoomvalue > 1) {
        this.zoomvalue -= 0.2
        this.currectTranslate()
      }
    },
    currectTranslate: function () {
      console.log('currect')

      // setTimeout(function () {
      var mapPosX = this.mapX.getBoundingClientRect().left
      var mapPosXMax = this.mapX.getBoundingClientRect().right
      if (mapPosX >= 0) {
        this.newTranslateX -= mapPosX
      }
      if (mapPosXMax <= window.innerWidth) {
        var mapPosXDiff = window.innerWidth - mapPosXMax
        this.newTranslateX += mapPosXDiff
      }
      // this.newTranslateX = this.translateX + this.diffX

      var mapPosY = this.mapY.getBoundingClientRect().top
      var mapPosYMax = this.mapY.getBoundingClientRect().bottom
      if (mapPosY >= 0) {
        this.newTranslateY -= mapPosY
      }
      if (mapPosYMax <= window.innerHeight) {
        var mapPosYDiff = window.innerHeight - mapPosYMax
        this.newTranslateY += mapPosYDiff
      }
      // this.newTranslateY = this.translateY + this.diffY
      // }, 100)
    },
    zoomOOnScroll: function (e) {
      if (e.deltaY > 0 && this.zoomvalue > 1) {
        this.zoomvalue -= 0.2
      } else if (e.deltaY < 0 && this.zoomvalue < 2) {
        this.zoomvalue += 0.2
      }
    },
  },
  computed: {
    mapX: function () {
      return document.querySelector('.map__translateX')
    },
    mapY: function () {
      return document.querySelector('.map__translateY')
    },
  },
  mounted: function () {},
}
</script>
<style lang="scss" scoped>
.map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &__translateX,
  &__translateY {
  }
  &__wrap {
    // 			3.74				8193
    //     	20,36   		0
    // 	 		24,10				8193

    // width: 100vmax;
    width: 2000px;
    flex: none;
    // width: 8193px;
    // height: 4993px;
    padding-bottom: 60.94%;
    height: 0;
    position: relative;
    overflow: hidden;
  }

  &__wrap > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__town-name {
    font-size: 8px;
    padding: 1px;
    text-transform: uppercase;
    line-height: 1;
    background: #bb6351;
    width: fit-content;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 95%;
    color: #ffffff;
    cursor: default;
  }
  @keyframes cloudX {
    50% {
      transform: translateX(-100vw);
    }
    50.001% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  &__roads {
    img {
      width: 100%;
    }
  }
  &__road-A1 {
    position: absolute;
    top: 21.4%;
    left: 21.6%;
    width: 74.7%;
    height: 30%;
  }
  &__road-e272 {
    position: absolute;
    top: 2.1%;
    left: 15.4%;
    width: 85.7%;
    height: 30%;
  }
  &__road-e77 {
    position: absolute;
    top: -2.5%;
    left: 35.2%;
    width: 52.7%;
  }
  &__road-gr {
    position: absolute;
    top: 28%;
    left: 17.8%;
    width: 54.7%;
  }

  &__windmills {
    img {
      width: 100%;
    }
  }
  &__windmill-1 {
    position: absolute;
    width: 5%;
    transform: translate(-50%, -50%) rotate(40deg);
    left: 30.4%;
    top: 12.2%;
    img {
      animation: rotate 3s linear infinite;
    }
  }
  &__windmill-2 {
    position: absolute;
    width: 6%;
    transform: translate(-50%, -50%) rotate(410deg);
    left: 32%;
    top: 10.7%;
    img {
      animation: rotate 3s linear infinite;
    }
  }
  &__windmill-3 {
    position: absolute;
    width: 5%;
    transform: translate(-50%, -50%) rotate(80deg);
    left: 33.8%;
    top: 12.4%;
    img {
      animation: rotate 3s linear infinite;
    }
  }
  &__windmill-4 {
    position: absolute;
    width: 7%;
    transform: translate(-50%, -50%) rotate(210deg);
    left: 52.1%;
    top: 41.3%;
    img {
      animation: rotate 3s linear infinite;
    }
  }
  &__windmill-5 {
    position: absolute;
    width: 9.7%;
    transform: translate(-50%, -50%) rotate(62deg);
    left: 54.5%;
    top: 38.3%;
    img {
      animation: rotate 3s linear infinite;
    }
  }
  &__windmill-6 {
    position: absolute;
    width: 7%;
    transform: translate(-50%, -50%) rotate(23deg);
    left: 57.15%;
    top: 41.4%;
    img {
      animation: rotate 3s linear infinite;
    }
  }

  &__clouds {
    img {
      width: 100%;
    }
  }
  &__cloud-1 {
    position: absolute;
    width: 13%;
    top: 45%;
    left: 71%;
    animation: cloudX 50s linear infinite;
    z-index: 2;
  }
  &__cloud-2 {
    position: absolute;
    width: 11%;
    top: 65%;
    left: 1%;
    animation: cloudX 90s linear infinite;
    z-index: 2;
  }
  &__cloud-3 {
    position: absolute;
    width: 18%;
    top: 26%;
    left: 10%;

    animation: cloudX 130s linear infinite;
    z-index: 2;
  }
  &__cloud-4 {
    position: absolute;
    width: 11%;
    top: 16%;
    left: 55%;
    animation: cloudX 66s linear infinite;
    z-index: 2;
  }

  @keyframes jacht-rotate {
    25% {
      transform: rotate(5deg);
    }
    75% {
      transform: rotate(-5deg);
    }
  }
  @keyframes yacht-to-left {
    5% {
      transform: translate(-60%, -60%) scaleX(1);
    }

    49% {
      transform: translate(-240%, -120%) scaleX(1);
    }
    50% {
      transform: translate(-250%, -130%) scaleX(0);
    }
    51% {
      transform: translate(-250%, -120%) scaleX(-1);
    }
    95% {
      transform: translate(-60%, -60%) scaleX(-1);
    }
  }
  @keyframes yacht-to-circle {
  }

  &__jachts {
    img {
      width: 100%;
    }
  }
  &__jacht-1 {
    position: absolute;
    top: 34.33%;
    left: 15.29%;
    width: 9.09%;
    transform: translate(-50%, -50%);
    transform-origin: center bottom;
    animation: yacht-to-left 40s linear infinite;
    img {
      animation: jacht-rotate 4s linear infinite;
    }
  }
  &__jacht-2 {
    position: absolute;
    top: 51.33%;
    left: 7.29%;
    width: 11.29%;
    transform: translate(-50%, -50%);
    transform-origin: center bottom;
    img {
      animation: jacht-rotate 4s linear infinite;
    }
  }
  &__jacht-3 {
    position: absolute;
    top: 66.73%;
    left: 21.69%;
    width: 8.69%;
    transform: translate(-50%, -50%);
    transform-origin: center bottom;
    img {
      animation: jacht-rotate 4s linear infinite;
    }
  }
  &__jacht-4 {
    position: absolute;
    top: 77.73%;
    left: 15.29%;
    width: 5.69%;
    transform: translate(-50%, -50%);
    transform-origin: center bottom;
    img {
      animation: jacht-rotate 3s linear infinite;
    }
  }

  &__towns {
    img {
      width: 100%;
    }
  }
  &__klaipeda {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 31.3%;
    left: 20.6%;
    width: 11.7%;
  }
  &__gargzdai {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 31.6%;
    left: 28%;
    width: 11.7%;
    .map__town-name {
      top: 85%;
    }
  }
  &__jurbarkas {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 84.6%;
    left: 65.6%;
    width: 11.8%;
    .map__town-name {
      top: 85%;
      transform: translateX(-60%);
    }
  }
  &__nida {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 64.6%;
    left: 16.3%;
    width: 13.8%;
    .map__town-name {
      top: 95%;
    }
  }
  &__pagegiai {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 79%;
    left: 43.3%;
    width: 11.5%;
    .map__town-name {
      top: 99%;
    }
  }
  &__silute {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 62.8%;
    left: 32.6%;
    width: 11.5%;
    .map__town-name {
      top: 81%;
      transform: translateX(-110%);
    }
  }
  &__taurage {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 72%;
    left: 54.7%;
    width: 13.5%;
    .map__town-name {
      top: 78%;
    }
  }
}
.marks-filter {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 100px;
  padding: 8px 16px;
  display: flex;
  column-gap: 16px;
  position: fixed;
  left: 65px;
  bottom: 80px;
  z-index: 10;
  &__item {
    position: relative;
    .mark-btn {
      width: 32px;
      height: 32px;
    }
    &:hover .marks-filter__descr {
      opacity: 0.9;
      transform: translateX(-50%) scale(1);
      transition-delay: 0.1s;
    }
    &.active {
      .marks-filter__cancel {
        opacity: 1;
        top: calc(100% + 12px);
        transform: translateX(-50%) scale(1);
      }
    }
    &.not-active:not(:hover) {
      .mark-btn {
        background: #ced4d1 !important;
      }
    }
  }

  &__descr {
    pointer-events: none;
    position: absolute;
    bottom: calc(100% + 17px);
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    padding: 12px 24px;
    border-radius: 8px;
    background: #ffffff;
    filter: drop-shadow(0px 0px 18px rgba(0, 6, 36, 0.12))
      drop-shadow(0px 6px 6px rgba(0, 6, 36, 0.06));
    opacity: 0;
    transform: translateX(-50%) scale(0);
    transform-origin: center bottom;
    transition: 0.2s;
    transition-delay: 0s;
    &::before {
      content: '';
      position: absolute;
      transform: translateX(-50%);
      top: 100%;
      left: 50%;
      width: 12px;
      height: 12px;
      border: 6px solid transparent;
      border-top: 6px solid #ffffff;
    }
  }

  &__cancel {
    position: absolute;
    top: 100%;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%) scale(0);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    transition: 0.15s;
  }
}
.zoom-panel {
  position: fixed;
  transform: translateY(-50%);
  top: 50%;
  right: 43px;
  padding: 8px 11px;
  border-radius: 40px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  z-index: 15;
  &__plus {
    display: block;
    width: 32px;
    height: 32px;
    flex: none;
  }

  &__slider {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    width: 115px;
    height: 2px;
    margin: 56.5px -56.5px;
    transform: rotate(-90deg);
    border-radius: 3px;
    background: #00404e;
    &::-webkit-slider-thumb {
      width: 12px;
      height: 12px;
      background: #00404e;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background: #00404e;
        -webkit-appearance: none;
        appearance: none;
      }
    }
    &::-moz-range-thumb {
      width: 12px;
      height: 12px;
      background: #00404e;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      &:hover {
        background: #00404e;
        -webkit-appearance: none;
        appearance: none;
      }
    }
  }

  &__minus {
    display: block;
    width: 32px;
    height: 32px;
    flex: none;
  }
}
</style>
