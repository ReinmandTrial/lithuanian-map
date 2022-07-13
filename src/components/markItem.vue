<template>
  <div
    v-click-outside="closeCard"
    class="mark"
    v-bind:style="{
      top: calcAxysY(mark.ilguma),
      left: calcAxysX(mark.platuma),
      transform: 'scale(' + 1 / zoomvalue + ')',
    }"
    :data-region="mark.category_title"
  >
    <mark-btn :mark="mark" @click.native="showCard(mark)" />
    <transition>
      <mark-card
        v-if="cardOpen"
        :mark="mark"
        @addCardToSelected="addCardToSelected"
        @closeCard="closeCardBtn()"
        v-bind:style="{
          transform: 'scale(' + 1 + ')',
        }"
      />
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import MarkBtn from './mark-btn.vue'
import MarkCard from './mark-card.vue'

export default {
  name: 'v-mark-item',
  components: {
    'mark-btn': MarkBtn,
    'mark-card': MarkCard,
  },
  data() {
    return {
      cardOpen: false,
      isOpen: false,
    }
  },
  props: {
    zoomvalue: null,
    //  cardOpen: {
    //    default() {
    //      return false
    //    },
    //  },
    selectedObjects: {
      type: Array,
      default() {
        return []
      },
    },
    mark: null,
  },
  methods: {
    calcAxysX: function (pos) {
      const startMapX = 20.44
      const endMapX = 24.05
      const deffMapX = endMapX - startMapX
      return ((pos - startMapX) / deffMapX) * 100 + '%'
    },
    calcAxysY: function (pos) {
      const startMapY = 56.15
      const endMapY = 54.879788
      const deffMapY = endMapY - startMapY
      return ((pos - startMapY) / deffMapY) * 100 + '%'
    },
    closeCardBtn() {
      this.cardOpen = false
    },
    closeCard: function (event) {
      const marksItems = document.querySelectorAll('.mark')

      marksItems.forEach((markItem) => {
        if (event.target.closest('.mark')) {
          markItem.style.zIndex = null
          event.target.closest('.mark').style.zIndex = 30
          this.cardOpen = false
        }
      })

      // console.log(this.cardOpen)
    },
    showCard: function (data) {
      if (window.innerWidth >= 992) {
        this.cardOpen = true
      }
      const marksItems = document.querySelectorAll('.mark')

      marksItems.forEach((markItem) => {
        if (markItem.classList.contains('active')) {
          markItem.classList.remove('active')
        }
      })

      var thisMark = event.target.closest('.mark')

      if (window.innerWidth >= 992) {
        if (thisMark.getBoundingClientRect().top <= 450) {
          thisMark.classList.add('from-top')
          thisMark.classList.add('from-top-origin')
        } else {
          thisMark.classList.contains('from-top') &&
            thisMark.classList.remove('from-top')
          thisMark.classList.contains('from-top-origin') &&
            thisMark.classList.remove('from-top-origin')
        }
      }

      // event.target.closest('.mark').getBoundingClientRect().top
      event.target.closest('.mark').style.zIndex = 30
      // event.target.closest('.mark').classList.add('active')

      this.$emit('openCardMobile', {
        data: data,
        thisEvent: event,
      })

      // console.log(data)

      // if()
    },
    addCardToSelected: function (data) {
      this.$emit('addCardToSelected', data)
      const marksItems = document.querySelectorAll('.mark')

      marksItems.forEach((markItem) => {
        markItem.style.zIndex = null
      })
      this.cardOpen = false
    },
  },
  mounted() {},
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
.mark {
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 10;
  cursor: pointer;
  &.active {
    z-index: 30;
    .mark-card {
      // display: flex;
      opacity: 1;
      transform: scale(1);
    }
  }
  &.from-top .mark-card {
    bottom: 0;
    top: calc(100% + 5px);
  }
  &.from-top-origin .mark-card {
    transform-origin: left top;
  }
  &:hover {
    z-index: 30;
  }
}
.mark-btn {
  transition-delay: 0.2s;
  animation: zoomInBtn 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  @keyframes zoomInBtn {
    from {
      transform: scale(0);
    }
  }
  &.active-t:not(&.not-active-r),
  &.active-r:not(&.not-active-t) {
    transition-delay: 0s;
  }
  &:hover {
    background: #db3831;
    transition-delay: 0s;
  }
  &.not-hover:not(.active-t):not(.active-r) {
    background: #ced4d1 !important;
    transition-delay: 0s;
  }
  &.not-active-t:not(&.active-t),
  &.not-active-r:not(&.active-r) {
    background: #ced4d1 !important;
    transform: scale(0);
    transition-delay: 0s;
  }
}
@keyframes showCard {
  from {
    opacity: 0;
    transform: scale(0);
  }
}
.mark-card {
  &.v-enter-active {
    animation: showCard 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  }
  &.v-leave-active {
    opacity: 0.2;
    transform: scale(0) !important;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  height: fit-content;
  cursor: default;
  // overflow: hidden;
  // height: 158px;
  width: 400px;
  border-radius: 8.59016px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: calc(100% + 5px);
  column-gap: 15px;
  // display: none;
  //   opacity: 0.5;
  //   transform: scale(0);
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: left bottom;
  // @media (max-width: 991.98px) {
  //   position: fixed;
  // }
  &__left {
    width: 99px;
    align-self: stretch;
    flex: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__right {
    flex: 1 1 auto;
    padding: 11px 16px 20px 0px;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 17px;
    line-height: 22px;
    font-weight: 700;
    margin-bottom: 6px;
    max-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #212b36;
  }
  &__description {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-bottom: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 57px;
    color: #212b36;
  }
  &__button {
    margin-bottom: 0px;
    margin-top: auto;
    display: flex;
    .btn-red {
      margin-right: 6px;
    }
  }
  .btn-red {
    color: #ffffff;
    background: #db3831;
    border-radius: 30px;
    padding: 6px 12px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }
  .btn-border {
    font-weight: 700;
    font-size: 8.05328px;
    line-height: 14px;
    color: #db3831;
    background: #ffffff;
    border: 1px solid #db3831;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 6px 12px;
  }
}
</style>
