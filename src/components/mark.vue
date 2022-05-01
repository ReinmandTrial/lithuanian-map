<template>
  <div class="marks-container" v-click-outside="closeCard">
    <div
      class="mark"
      v-for="mark in marks"
      :key="mark.id"
      v-bind:style="{
        top: calcAxysY(mark.markAxysY),
        left: calcAxysX(mark.markAxysX),
      }"
    >
      <mark-btn :mark="mark" @click.native="showCard" />

      <div class="mark-card">
        <div class="mark-card__left">
          <img src="@/assets/images/card-img.jpg" alt="" />
        </div>
        <div class="mark-card__right">
          <h4 class="mark-card__title">{{ mark.title }}</h4>
          <p class="mark-card__description">
            {{ mark.descr }}
          </p>
          <div class="mark-card__button">
            <button class="btn-red">Pasižymėti objektą</button>
            <button class="btn-border">Naviguoti</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import MarkBtn from './mark-btn.vue'

export default {
  name: 'v-mark',
  components: {
    'mark-btn': MarkBtn,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    marks: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    calcAxysX: function (pos) {
      const startMapX = 20.36
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
    closeCard: function () {
      const marksItems = document.querySelectorAll('.mark')

      marksItems.forEach((markItem) => {
        if (markItem.classList.contains('active')) {
          markItem.classList.remove('active')
        }
      })
    },
    showCard: function (event) {
      const marksItems = document.querySelectorAll('.mark')

      marksItems.forEach((markItem) => {
        if (markItem.classList.contains('active')) {
          markItem.classList.remove('active')
        }
      })
      event.target.closest('.mark').classList.add('active')
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
.mark {
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 20;
  cursor: pointer;
  &.active {
    .mark-card {
      display: flex;
    }
  }
}
.mark-btn {
  &:hover {
    background: #db3831;
  }
  &.not-hover:not(&.active) {
    background: #ced4d1 !important;
  }
  &.not-active:not(&.active) {
    background: #ced4d1 !important;
    transform: scale(0);
  }
}
.mark-card {
  cursor: default;
  overflow: hidden;
  // height: 158px;
  width: 365px;
  border-radius: 8.59016px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: calc(100% + 5px);
  column-gap: 15px;
  display: none;
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
    font-size: 16px;
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
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
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
    font-size: 8.05328px;
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
