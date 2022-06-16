<template>
  <div
    class="map"
    v-hammer:pan="move"
    v-hammer:panend="moveEnd"
    @resize="setMapWidth"
  >
    <div v-if="showPreloader" class="preloader">
      <img ref="preloaderGif" src="@/assets/images/preloader.gif" alt="" />
    </div>
    <div
      class="map__scale"
      :style="{ transform: 'scale(' + zoomvalue + ')' }"
      @wheel="zoomOnScroll"
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
          <div class="map__wrap" :style="{ width: mapWidth + 'px' }">
            <picture>
              <source
                type="image/jpg"
                media="(max-width: 768px)"
                srcset="@/assets/images/Base_Map_SVG--mob.jpg"
              />
              <img
                src="@/assets/images/Base_Map_SVG.jpg"
                alt="map"
                @mousedown.prevent=""
              />
            </picture>

            <div class="map__jachts">
              <div class="map__jacht-1">
                <img
                  src="@/assets/images/anim-targets/Meridianas_SVG.png"
                  alt="Jacht"
                />
              </div>
              <div class="map__jacht-2">
                <img
                  src="@/assets/images/anim-targets/Jachta_SVG.png"
                  alt="Jacht"
                />
              </div>
              <div class="map__jacht-3">
                <img
                  src="@/assets/images/anim-targets/Jachta2_SVG.png"
                  alt="Jacht"
                />
              </div>
              <div class="map__jacht-4">
                <img
                  src="@/assets/images/anim-targets/Valtis_SVG.png"
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
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.png"
                  alt=""
                />
              </div>
              <div class="map__windmill-2">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.png"
                  alt=""
                />
              </div>
              <div class="map__windmill-3">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.png"
                  alt=""
                />
              </div>
              <div class="map__windmill-4">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.png"
                  alt=""
                />
              </div>
              <div class="map__windmill-5">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.png"
                  alt=""
                />
              </div>
              <div class="map__windmill-6">
                <img
                  src="@/assets/images/anim-targets/Vejo_Malunas_Propeleris_SVG.png"
                  alt=""
                />
              </div>
            </div>
            <div class="map__towns">
              <div class="map__klaipeda">
                <img
                  src="@/assets/images/buildings/Klaipeda_SVG.png"
                  alt="Jacht"
                />
                <p class="map__town-name">Klaipėda</p>
              </div>
              <div class="map__gargzdai">
                <img
                  src="@/assets/images/buildings/Gargzdai_SVG.png"
                  alt="Jacht"
                />
                <p class="map__town-name">Gargzdai</p>
              </div>
              <div class="map__jurbarkas">
                <img
                  src="@/assets/images/buildings/Jurbarkas_SVG.png"
                  alt="Jacht"
                />
                <p class="map__town-name">Jurbarkas</p>
              </div>
              <div class="map__nida">
                <img src="@/assets/images/buildings/Nida_SVG.png" alt="Jacht" />
                <p class="map__town-name">Nida</p>
              </div>
              <div class="map__pagegiai">
                <img
                  src="@/assets/images/buildings/Pagegiai_SVG.png"
                  alt="Jacht"
                />
                <p class="map__town-name">Pagegiai</p>
              </div>
              <div class="map__silute">
                <img
                  src="@/assets/images/buildings/Silute_SVG.png"
                  alt="Jacht"
                />
                <p class="map__town-name">Silute</p>
              </div>
              <div class="map__taurage">
                <img
                  src="@/assets/images/buildings/Taurage_SVG.png"
                  alt="Jacht"
                />
                <p class="map__town-name">Taurage</p>
              </div>
            </div>
            <div class="map__clouds">
              <div class="map__cloud-1">
                <img src="@/assets/images/anim-targets/Debesis1.png" alt="" />
              </div>
              <div class="map__cloud-2">
                <img src="@/assets/images/anim-targets/Debesis1.png" alt="" />
              </div>
              <div class="map__cloud-3">
                <img src="@/assets/images/anim-targets/Debesis2.png" alt="" />
              </div>
              <div class="map__cloud-4">
                <img src="@/assets/images/anim-targets/Debesis2.png" alt="" />
              </div>
            </div>
            <v-mark
              :marks="marks"
              @addCardToSelected="addCardToSelected"
              :zoomvalue="zoomvalue"
            />
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
        max="3"
        value="1"
        class="zoom-panel__slider"
        id="zoom"
        v-model="zoomvalue"
        step="0.01"
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
        <button
          type="button"
          class="marks-filter__cancel"
          @click="activeFilter"
        >
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
      showPreloader: true,
      countTags: 0,
      mapWidth: 2000,
      mapHeight: null,
      coefMapHeight: 0.6094,
      zoomvalue: 1,
      posXStart: 0,
      translateX: 0,
      diffX: 0,
      posYStart: 0,
      translateY: 0,
      diffY: 0,
      newTranslateX: 0,
      newTranslateY: 0,
      minTranslateX: null,
      minTranslateY: null,
      maxTranslateX: null,
      maxTranslateY: null,
      mapPosX: null,
      mapPosY: null,
      mapPosXMax: null,
      mapPosYMax: null,
      filter: [
        {
          id: 1,
          descr: 'Gamta',
          type: 'gamta',
          tags_all: [
            {
              slug: 'gamta',
            },
          ],
        },
        {
          id: 2,
          descr: 'Kult\u016bra',
          type: 'kultura',
          tags_all: [
            {
              slug: 'kultura',
            },
          ],
        },
        {
          id: 3,
          descr: 'Maitinimas',
          type: 'maitinimas',
          tags_all: [
            {
              slug: 'maitinimas',
            },
          ],
        },
        {
          id: 4,
          descr: 'Pramogos',
          type: 'pramogos',
          tags_all: [
            {
              slug: 'pramogos',
            },
          ],
        },
        {
          id: 5,
          descr: 'Istorija',
          type: 'istorija',
          tags_all: [
            {
              slug: 'istorija',
            },
          ],
        },
      ],
      // gifSrc: this.$refs.preloaderGif,
    }
  },
  props: {
    selectedObjects: {
      type: Array,
      default() {
        return []
      },
    },
    marks: null,
    regionCount: {
      type: Number,
      default() {
        return null
      },
    },
  },
  components: {
    'v-mark': Mark,
    'mark-btn': MarkBtn,
  },
  methods: {
    move: function (e) {
      // console.log('move')

      if (this.minTranslateX < e.deltaX + this.translateX) {
        var overXMin = e.deltaX + this.translateX - this.minTranslateX
        this.translateX -= overXMin
        this.newTranslateX = this.minTranslateX
      } else if (this.maxTranslateX > e.deltaX + this.translateX) {
        var overXMax = e.deltaX + this.translateX - this.maxTranslateX
        this.translateX -= overXMax
        this.newTranslateX = this.maxTranslateX
      } else {
        this.newTranslateX = e.deltaX + this.translateX
      }

      if (this.minTranslateY < e.deltaY + this.translateY) {
        var overYMin = e.deltaY + this.translateY - this.minTranslateY
        this.translateY -= overYMin
        this.newTranslateY = this.minTranslateY
      } else if (this.maxTranslateY > e.deltaY + this.translateY) {
        var overYMax = e.deltaY + this.translateY - this.maxTranslateY
        this.translateY -= overYMax
        this.newTranslateY = this.maxTranslateY
      } else {
        this.newTranslateY = e.deltaY + this.translateY
      }
    },
    moveEnd: function (e) {
      this.translateX += e.deltaX
      this.translateY += e.deltaY
    },

    minMaxPos: function () {
      this.$nextTick(function () {
        this.mapPosX = this.mapX.getBoundingClientRect().left
        this.minTranslateX = (this.mapPosX - this.newTranslateX) * -1

        this.mapPosXMax = this.mapX.getBoundingClientRect().right
        this.maxTranslateX =
          (this.mapPosXMax - this.newTranslateX - window.innerWidth) * -1

        this.mapPosY = this.mapY.getBoundingClientRect().top
        this.minTranslateY = (this.mapPosY - this.newTranslateY) * -1

        this.mapPosYMax = this.mapX.getBoundingClientRect().bottom
        this.maxTranslateY = (this.mapPosYMax - window.innerHeight) * -1

        if (this.minTranslateX < this.newTranslateX) {
          this.translateX =
            this.translateX + this.minTranslateX - this.newTranslateX
          this.newTranslateX = this.minTranslateX
        }

        if (this.maxTranslateX > this.newTranslateX) {
          this.translateX =
            this.translateX + this.maxTranslateX - this.newTranslateX
          this.newTranslateX = this.maxTranslateX
        }

        if (this.minTranslateY < this.newTranslateY) {
          this.translateY =
            this.translateY + this.minTranslateY - this.newTranslateY
          this.newTranslateY = this.minTranslateY
        }

        if (this.maxTranslateY > this.newTranslateY) {
          this.translateY =
            this.translateY + this.maxTranslateY - this.newTranslateY
          this.newTranslateY = this.maxTranslateY
        }
      })
    },
    zoomPlus: function () {
      if (this.zoomvalue < 2.9) {
        this.zoomvalue += 0.2
      }
    },
    zoomMinus: function () {
      if (this.zoomvalue > 1) {
        this.zoomvalue -= 0.2
      }
    },

    zoomOnScroll: function (e) {
      if (e.deltaY > 0 && this.zoomvalue > 1) {
        this.zoomvalue -= 0.2
      } else if (e.deltaY < 0 && this.zoomvalue < 2.9) {
        this.zoomvalue += 0.2
      }

      // this.move(e)
    },
    currectZoom: function () {
      if (this.zoomvalue < 1) {
        this.zoomvalue = 1
      } else if (this.zoomvalue > 3) {
        this.zoomvalue = 3
      }
    },
    activeFilter: function (e) {
      const filterItems = document.querySelectorAll('.marks-filter__item')
      var thisElem = e.target.closest('.marks-filter__item')
      var thisElemType = thisElem
        .querySelector('.mark-btn')
        .getAttribute('data-tag')
      var markItems = document
        .querySelector('.marks-container')
        .querySelectorAll('.mark')

      if (!thisElem.classList.contains('active-t')) {
        thisElem.classList.remove('not-active-t')
        thisElem.classList.add('active-t')
        markItems.forEach((markItem) => {
          markItem.querySelector('.mark-btn').classList.add('not-active-t')
          markItem.style.pointerEvents = 'none'
          if (
            thisElemType ==
            markItem.querySelector('.mark-btn').getAttribute('data-tag')
          ) {
            markItem.querySelector('.mark-btn').classList.remove('not-active-t')
            markItem.querySelector('.mark-btn').classList.add('active-t')
            markItem.style.pointerEvents = 'visible'
          }
        })
        this.countTags++
      } else {
        thisElem.classList.add('not-active-t')
        thisElem.classList.remove('active-t')
        markItems.forEach((markItem) => {
          if (
            thisElemType ==
            markItem.querySelector('.mark-btn').getAttribute('data-tag')
          ) {
            markItem.querySelector('.mark-btn').classList.add('not-active-t')
            markItem.querySelector('.mark-btn').classList.remove('active-t')
            markItem.style.pointerEvents = 'none'
          }
        })
        this.countTags--
      }

      filterItems.forEach((filterItem) => {
        if (!filterItem.classList.contains('active-t')) {
          filterItem.classList.add('not-active-t')
        }
      })

      if (this.countTags == 0) {
        filterItems.forEach((filterItem) => {
          filterItem.classList.remove('not-active-t')
        })
        markItems.forEach((markItem) => {
          markItem.querySelector('.mark-btn').classList.remove('not-active-t')
          markItem.querySelector('.mark-btn').classList.remove('active-t')
          markItem.style.pointerEvents = 'visible'
        })
      }
      this.$emit('tagsCount', this.countTags)
      // const filterItems = document.querySelectorAll('.marks-filter__item')
      // var thisElem = e.target.closest('.marks-filter__item')
      // var thisElemType = thisElem
      //   .querySelector('.mark-btn')
      //   .getAttribute('data-tag')
      // var markItems = document
      //   .querySelector('.marks-container')
      //   .querySelectorAll('.mark-btn')

      // if (!thisElem.classList.contains('active-t')) {
      //   thisElem.classList.remove('not-active-t')
      //   thisElem.classList.add('active-t')
      //   markItems.forEach((markItem) => {
      //     markItem.classList.add('not-active-t')
      //     if (thisElemType == markItem.getAttribute('data-tag')) {
      //       markItem.classList.remove('not-active-t')
      //       markItem.classList.add('active-t')
      //     }
      //   })
      //   this.countTags++
      // } else {
      //   thisElem.classList.add('not-active-t')
      //   thisElem.classList.remove('active-t')
      //   markItems.forEach((markItem) => {
      //     if (thisElemType == markItem.getAttribute('data-tag')) {
      //       markItem.classList.add('not-active-t')
      //       markItem.classList.remove('active-t')
      //     }
      //   })
      //   this.countTags--
      // }

      // filterItems.forEach((filterItem) => {
      //   if (!filterItem.classList.contains('active-t')) {
      //     filterItem.classList.add('not-active-t')
      //   }
      // })

      // if (
      //   this.countTags == 0
      //   // && this.regionCount == 0
      // ) {
      //   filterItems.forEach((filterItem) => {
      //     filterItem.classList.remove('not-active-t')
      //   })
      //   markItems.forEach((markItem) => {
      //     markItem.classList.remove('not-active-t')
      //     markItem.classList.remove('active-t')
      //   })
      // }
      // this.$emit('tagsCount', this.countTags)
    },
    hoverFilter: function (e) {
      if (this.countTags == 0) {
        var thisElem = e.target.closest('.marks-filter__item')
        var markItems = document
          .querySelector('.marks-container')
          .querySelectorAll('.mark-btn')
        var thisElemType = thisElem
          .querySelector('.mark-btn')
          .getAttribute('data-tag')

        markItems.forEach((markItem) => {
          markItem.classList.add('not-hover')
          if (thisElemType == markItem.getAttribute('data-tag')) {
            markItem.classList.remove('not-hover')
          }
        })
      }
    },
    hoverFilterEnd: function () {
      if (this.countTags == 0) {
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
    setMapWidth: function () {
      if (window.innerHeight <= window.innerWidth * this.coefMapHeight) {
        this.mapWidth = window.innerWidth
      } else {
        this.mapWidth = window.innerHeight / this.coefMapHeight
      }
    },
    hidePreloader: function () {
      this.showPreloader = false
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
  watch: {
    zoomvalue: ['currectZoom', 'minMaxPos'],
  },
  created: function () {
    this.$emit('tagsCount', this.countTags)
  },
  mounted: function () {
    this.setMapWidth()
    window.addEventListener('resize', this.setMapWidth)
    this.minMaxPos()

    const gifSrc = this.$refs.preloaderGif.getAttribute('src')
    this.$refs.preloaderGif.setAttribute('src', gifSrc)
    setTimeout(() => {
      this.hidePreloader()
    }, 3000)
  },
  destroyed: function () {
    window.removeEventListener('resize', this.setMapWidth)

    // this.$el.removeEventListener('load', this.hidePreloader())
    this.showPreloader = true
  },
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f7f5f7;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
  }
}
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
    flex: none;
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

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  &__roads {
    img {
      pointer-events: none;
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
    left: 26.8%;
    width: 61.5%;
  }
  &__road-gr {
    position: absolute;
    top: 28%;
    left: 17.8%;
    width: 54.7%;
  }

  &__windmills {
    img {
      pointer-events: none;
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
  @keyframes cloudX1 {
    71% {
      left: -13%;
    }
    71.001% {
      left: 100%;
    }
    100% {
    }
  }
  @keyframes cloudX2 {
    14% {
      left: -13%;
    }
    14.001% {
      left: 100%;
    }
    100% {
    }
  }
  @keyframes cloudX3 {
    30% {
      left: -18%;
    }
    30.001% {
      left: 100%;
    }
    100% {
    }
  }
  @keyframes cloudX4 {
    68% {
      left: -11%;
    }
    68.001% {
      left: 100%;
    }
    100% {
    }
  }
  &__clouds {
    img {
      pointer-events: none;
      width: 100%;
    }
  }
  &__cloud-1 {
    position: absolute;
    width: 13%;
    top: 45%;
    left: 71%;
    animation: cloudX1 50s linear infinite;
    z-index: 2;
  }
  &__cloud-2 {
    position: absolute;
    width: 11%;
    top: 65%;
    left: 1%;
    animation: cloudX2 90s linear infinite;
    z-index: 2;
  }
  &__cloud-3 {
    position: absolute;
    width: 18%;
    top: 26%;
    left: 10%;
    animation: cloudX3 130s linear infinite;
    z-index: 2;
  }
  &__cloud-4 {
    position: absolute;
    width: 11%;
    top: 16%;
    left: 55%;
    animation: cloudX4 66s linear infinite;
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
      pointer-events: none;
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
      pointer-events: none;
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
  @media (max-width: 991.98px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
  }
  @media (max-width: 575.98px) {
    padding: 10px 20px;
    column-gap: 18px;
  }
  &__item {
    position: relative;
    .mark-btn {
      width: 32px;
      height: 32px;
      @media (max-width: 767.98px) {
        width: 37px;
        height: 37px;
        transform: scale(1.15);
      }
    }
    &:hover .marks-filter__descr {
      opacity: 0.9;
      transform: translateX(-50%) scale(1);
      transition-delay: 0.1s;
    }
    &.active-t {
      .marks-filter__cancel {
        opacity: 1;
        top: calc(100% + 12px);
        transform: translateX(-50%) scale(1);
      }
    }
    &.not-active-t:not(:hover) {
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
    @media (max-width: 991.98px) {
      display: none;
    }
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
  @media (max-width: 1125px) {
    right: 25px;
  }
  @media (max-width: 575.98px) {
    right: 15px;
    padding: 4px 6px;
    background: rgba(255, 255, 255, 0.8);
  }
  &__plus {
    display: block;
    width: 32px;
    height: 32px;
    flex: none;
    @media (max-width: 575.98px) {
      width: 16px;
      height: 16px;
    }
  }

  &__slider {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    width: 115px;
    height: 2px;
    margin: 57.5px -57.5px;
    transform: rotate(-90deg);
    border-radius: 3px;
    background: #00404e;
    @media (max-width: 575.98px) {
      height: 1px;
      width: 109px;
      margin: 54.5px -54.5px;
    }
    &::-webkit-slider-thumb {
      width: 12px;
      height: 12px;
      background: #00404e;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 50%;
      cursor: pointer;
      @media (max-width: 575.98px) {
        width: 6px;
        height: 6px;
      }
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
      @media (max-width: 575.98px) {
        width: 6px;
        height: 6px;
      }
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
    @media (max-width: 575.98px) {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
