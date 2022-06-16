<template>
  <div class="marks-container">
    <v-mark-item
      v-for="mark in marks"
      :key="mark.id"
      :mark="mark"
      @addCardToSelected="addCardToSelected"
      :zoomvalue="zoomvalue"
    />
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import vMarkItem from './markItem.vue'

export default {
  name: 'v-mark',
  components: {
    'v-mark-item': vMarkItem,
  },
  data() {
    return {
      // cardOpen: false,
    }
  },
  props: {
    zoomvalue: null,
    selectedObjects: {
      type: Array,
      default() {
        return []
      },
    },
    marks: null,
  },
  methods: {
    // closeCard: function () {
    //   const marksItems = document.querySelectorAll('.mark')

    //   marksItems.forEach((markItem) => {
    //     if (markItem.classList.contains('active')) {
    //       markItem.classList.remove('active')
    //     }
    //   })
    // },
    // showCard: function (event) {
    //   const marksItems = document.querySelectorAll('.mark')

    //   marksItems.forEach((markItem) => {
    //     if (markItem.classList.contains('active')) {
    //       markItem.classList.remove('active')
    //     }
    //   })
    //   event.target.closest('.mark').classList.add('active')
    // },
    addCardToSelected: function (data) {
      this.$emit('addCardToSelected', data)
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
.mark {
  //   transform: translate(-50%, -50%);
  //   position: absolute;
  //   z-index: 10;
  //   cursor: pointer;
  &.active {
    z-index: 30;
    // .mark-card {
    //   // display: flex;
    //   opacity: 1;
    //   transform: scale(1);
    // }
  }
}
// .mark-btn {
//   transition-delay: 0.2s;
//   animation: zoomInBtn 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
//   @keyframes zoomInBtn {
//     from {
//       transform: scale(0);
//     }
//   }
//   &.active-t:not(&.not-active-r),
//   &.active-r:not(&.not-active-t) {
//     transition-delay: 0s;
//   }
//   &:hover {
//     background: #db3831;
//     transition-delay: 0s;
//   }
//   &.not-hover:not(.active-t):not(.active-r) {
//     background: #ced4d1 !important;
//     transition-delay: 0s;
//   }
//   &.not-active-t:not(&.active-t),
//   &.not-active-r:not(&.active-r) {
//     background: #ced4d1 !important;
//     transform: scale(0);
//     transition-delay: 0s;
//   }
// }
.mark-card {
  &.v-leave-active {
    opacity: 0;
    transform: scale(0);
  }
  // cursor: default;
  // overflow: hidden;
  // // height: 158px;
  // width: 365px;
  // border-radius: 8.59016px;
  // background: #ffffff;
  // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  // display: flex;
  // justify-content: space-between;
  // position: absolute;
  // left: 0;
  // bottom: calc(100% + 5px);
  // column-gap: 15px;
  // // display: none;
  // opacity: 0.5;
  // transform: scale(0);
  // transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  // transform-origin: left bottom;
  // &__left {
  //   width: 99px;
  //   align-self: stretch;
  //   flex: none;
  //   img {
  //     width: 100%;
  //     height: 100%;
  //     object-fit: cover;
  //   }
  // }
  // &__right {
  //   flex: 1 1 auto;
  //   padding: 11px 16px 20px 0px;
  //   display: flex;
  //   flex-direction: column;
  // }
  // &__title {
  //   font-size: 16px;
  //   line-height: 22px;
  //   font-weight: 700;
  //   margin-bottom: 6px;
  //   max-height: 22px;
  //   white-space: nowrap;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   color: #212b36;
  // }
  // &__description {
  //   font-size: 10px;
  //   font-weight: 400;
  //   line-height: 14px;
  //   margin-bottom: 16px;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   max-height: 57px;
  //   color: #212b36;
  // }
  // &__button {
  //   margin-bottom: 0px;
  //   margin-top: auto;
  //   display: flex;
  //   .btn-red {
  //     margin-right: 6px;
  //   }
  // }
  // .btn-red {
  //   color: #ffffff;
  //   background: #db3831;
  //   border-radius: 30px;
  //   padding: 6px 12px;
  //   font-weight: 700;
  //   font-size: 8.05328px;
  //   line-height: 14px;
  // }
  // .btn-border {
  //   font-weight: 700;
  //   font-size: 8.05328px;
  //   line-height: 14px;
  //   color: #db3831;
  //   background: #ffffff;
  //   border: 1px solid #db3831;
  //   box-sizing: border-box;
  //   border-radius: 30px;
  //   padding: 6px 12px;
  // }
}
</style>
