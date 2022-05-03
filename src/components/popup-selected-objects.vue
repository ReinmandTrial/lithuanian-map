<template>
  <div class="popup-selected-objects">
    <div class="popup-selected-objects__body">
      <div class="popup-selected-objects__content" v-click-outside="hidePopup">
        <div class="popup-selected-objects__head">
          <h3 class="popup-selected-objects__title">Pažymėti objektai:</h3>
          <button
            type="button"
            class="popup-selected-objects__close"
            @click="hidePopup"
          >
            <svg
              width="32"
              height="32"
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
        <button
          v-if="selectedObjects.length > 0"
          type="button"
          class="popup-selected-objects__download"
        >
          Atsisiųsti PDF formatu
        </button>
        <ul
          v-if="selectedObjects.length > 0"
          class="popup-selected-objects__list"
        >
          <li
            class="popup-selected-objects__item"
            v-for="mark in selectedObjects"
            :key="mark.id"
          >
            <mark-card :mark="mark" @addCardToSelected="addCardToSelected" />
          </li>
        </ul>
        <p v-else class="popup-selected-objects__empty">
          Čia tuščia
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MarkCard from './mark-card.vue'
import ClickOutside from 'vue-click-outside'
export default {
  name: 'PopupSelectedObjects',
  components: {
    'mark-card': MarkCard,
  },
  data() {
    return {
      // openPopup: false,
    }
  },
  props: {
    selectedObjects: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    hidePopup: function (e) {
      if (!e.target.closest('.selected-marks')) {
        document
          .querySelector('.popup-selected-objects')
          .classList.remove('active')
      }
    },
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
.popup-selected-objects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 50;
  display: none;
  &.active {
    display: block;
  }
  &__body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.5);
  }

  &__content {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    width: 100%;
    max-width: 450px;
    min-height: 300px;
    padding: 24px 24px 32px;
    display: flex;
    flex-direction: column;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
    margin-bottom: 7px;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
  }

  &__close {
    background: #f8f8f8;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 32px;
      height: 32px;
    }
  }

  &__download {
    background: #f8f8f8;
    border-radius: 30px;
    padding: 11px 15px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
    width: fit-content;
  }

  &__list {
    max-height: 350px;
    overflow-y: auto;
    margin-right: -10px;
    padding-right: 30px;
  }
  &__item {
    &:not(:last-child) {
      padding-bottom: 15px;
      margin-bottom: 16px;
      border-bottom: 1px solid #ced4d1;
    }
  }
  &__empty {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    font-size: 20px;
  }
}
.mark-card {
  position: static;
  width: 100%;
  filter: none;
}
</style>
