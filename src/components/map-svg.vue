<template>
  <!-- <div class="map" v-on:mousedown="mousedownMap"> -->
  <div class="map">
    <div class="map__wrap">
      <img src="@/assets/images/map.png" alt="map" />
      <v-mark :marks="marks" />
    </div>
  </div>
</template>

<script>
import Mark from './mark.vue'
export default {
  name: 'mapSvg',
  data() {
    return {
      marks: [
        { markAxysX: 21.169801, markAxysY: 55.720985 },
        { markAxysX: 21.996693, markAxysY: 55.396987 },
      ],
    }
  },
  components: {
    'v-mark': Mark,
  },
  methods: {
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
</style>
