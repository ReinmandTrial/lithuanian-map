<template>
  <!-- <div class="map" v-on:mousedown="mousedownMap"> -->
  <div class="map">
    <div class="map__wrap">
      <img src="@/assets/images/map.png" alt="map" />
      <v-mark :marks="marks" />
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
  </div>
</template>

<script>
import Mark from './mark.vue'
import MarkBtn from './mark-btn.vue'
export default {
  name: 'mapSvg',
  data() {
    return {
      marks: [
        {
          id: 1,
          type: 'games',
          markAxysX: 21.169801,
          markAxysY: 55.720985,
          title: 'Kvėdarnos apžvalgos bokštas',
          descr:
            'Kvėdarna is a town in Šilalė district municipality, Tauragė County, Lithuania. According to the 2011 census, the town has a population of 1,597 people.',
        },
        {
          id: 2,
          type: 'food',
          markAxysX: 21.996693,
          markAxysY: 55.396987,
          title: 'Town',
          descr: ' Lorem ipsum dolor sit amet.',
        },
        {
          id: 3,
          type: 'buildings',
          markAxysX: 22.996693,
          markAxysY: 54.99,
          title: 'Town',
          descr: ' Lorem ipsum dolor sit amet.',
        },
        {
          id: 4,
          type: 'nature',
          markAxysX: 22.2,
          markAxysY: 55.1,
          title: 'Town',
          descr: ' Lorem ipsum dolor sit amet.',
        },
        {
          id: 5,
          type: 'food',
          markAxysX: 22.996693,
          markAxysY: 55.6987,
          title: 'Town',
          descr: ' Lorem ipsum dolor sit amet.',
        },
        {
          id: 6,
          type: 'books',
          markAxysX: 20.996693,
          markAxysY: 55.7,
          title: 'Town',
          descr: ' Lorem ipsum dolor sit amet.',
        },
      ],
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

    // translateMap: function (e, posXStart, posYStart) {
    //   // console.log('move')
    //   // e.preventDefault()
    //   // console.log(e.clientX)
    //   console.log(posXStart)
    //   var diffX = e.clientX - posXStart
    //   var diffY = e.clientY - posYStart
    //   console.log(diffX)
    //   // const mapBlock = document.querySelector('.map')
    //   document.querySelector('.map').style.transform = `translate(${
    //     diffX + 'px'
    //   }, ${diffY + 'px'})`
    // },
    // mousedownMap: function (e) {
    //   // console.log('down')
    //   // console.log(posXStart)
    //   var posXStart = e.clientX
    //   var posYStart = e.clientY
    //   console.log(posXStart)
    //   document
    //     .querySelector('.map')
    //     .addEventListener('mousemove', function mousemoveMap(e) {
    //       // console.log('move')
    //       e.preventDefault()
    //       // console.log(e.clientX)
    //       console.log(posXStart)
    //       var diffX = e.clientX - posXStart
    //       var diffY = e.clientY - posYStart
    //       console.log(diffX)
    //       // const mapBlock = document.querySelector('.map')
    //       document.querySelector('.map').style.transform = `translate(${
    //         diffX + 'px'
    //       }, ${diffY + 'px'})`
    //     })
    //   document.querySelector('.map').addEventListener('mouseup', function () {
    //     console.log('up')
    //     document
    //       .querySelector('.map')
    //       .removeEventListener('mousemove', mousemoveMap(e))
    //   })
    // },
  },
  computed: {},
  mounted: function () {
    //  this.zoomIn
  },
}
</script>
<style lang="scss" scoped>
.map {
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrap {
    // 			3.74				8193
    //     	20,36   		0
    // 	 		24,10				8193

    width: 100%;
    flex: none;
    // width: 8193px;
    // height: 4993px;
    padding-bottom: 60.94%;
    height: 0;
    position: relative;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
</style>
