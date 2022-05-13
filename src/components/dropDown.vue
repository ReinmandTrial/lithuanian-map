<template>
  <div v-click-outside="hide" :class="{ openDropdown }" class="dropdown">
    <button
      type="button"
      @click="openDropdown = !openDropdown"
      class="dropdown__head"
    >
      <span class="dropdown__text">
        Filtruoti pagal savivaldybes
      </span>
      <span class="dropdown__icon">
        <img
          src="@/assets/images/svg-icons/triangle-down.svg"
          alt="Triangle down"
        />
      </span>
      <span class="dropdown__icon--mobile">
        <img src="@/assets/images/svg-icons/filter.svg" alt="Triangle down" />
      </span>
    </button>
    <div class="dropdown__body">
      <div v-click-outside="hide" class="dropdown__list">
        <label class="dropdown__item">
          <span class="checkbox">
            <input type="checkbox" class="checkbox__none" />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">Šilutės r. sav.</span>
        </label>
        <label class="dropdown__item">
          <span class="checkbox">
            <input type="checkbox" class="checkbox__none" />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">Pagėgių sav.</span>
        </label>
        <label class="dropdown__item">
          <span class="checkbox">
            <input type="checkbox" class="checkbox__none" />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">Jurbarko sav.</span>
        </label>
        <label class="dropdown__item">
          <span class="checkbox">
            <input type="checkbox" class="checkbox__none" />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">Tauragės sav.</span>
        </label>
        <label class="dropdown__item">
          <span class="checkbox">
            <input type="checkbox" class="checkbox__none" />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">Klaipėdos r. sav.</span>
        </label>
        <label class="dropdown__item">
          <span class="checkbox">
            <input type="checkbox" class="checkbox__none" />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">Klaipėdos miestas</span>
        </label>
        <label class="dropdown__item">
          <span class="checkbox">
            <input type="checkbox" class="checkbox__none" />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">Neringa</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'dropDown',
  data() {
    return {
      openDropdown: false,
    }
  },
  methods: {
    hide() {
      this.openDropdown = false
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>
<style lang="scss">
.checkbox {
  position: relative;
  display: block;
  &__none {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  &__style {
    display: block;
    cursor: pointer;
    width: 25px;
    height: 25px;
    background: #fff;
    border: 1px solid #ebebeb;
  }
  .checkbox__none:checked + .checkbox__style {
    background: #fff url('../assets/images/svg-icons/check.svg') 8px 7px
      no-repeat;
  }
}
.dropdown {
  background: #ffffff;
  border-radius: 30px;
  color: #00404e;
  &.openDropdown {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    .dropdown__icon {
      img {
        transform: rotate(-180deg);
      }
    }
    .dropdown__body {
      display: block;
      @media (max-width: 991.98px) {
        display: flex;
        opacity: 1;
        pointer-events: visible;
        transition-delay: 0s;
      }
    }
    @media (max-width: 991.98px) {
      .dropdown__list {
        margin-bottom: 0%;
      }
    }
  }
  &__head {
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 14px 16px;
    background: #ffffff;
    border-radius: 30px;
    text-align: left;
    color: #00404e;
    font-weight: 600;
    @media (max-width: 991.98px) {
      width: 52px;
      height: 52px;
      padding: unset;
      justify-content: center;
    }
    @media (max-width: 575.98px) {
      width: 40px;
      height: 40px;
    }
  }
  &__text {
    @media (max-width: 991.98px) {
      display: none;
    }
  }
  &__icon {
    width: 24px;
    height: 24px;
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(1px);
    @media (max-width: 991.98px) {
      display: none;
    }
  }
  &__icon--mobile {
    img {
      width: 27px;
      height: 27px;
      @media (max-width: 575.98px) {
        width: 24px;
        height: 24px;
      }
    }
    @media (min-width: 992px) {
      display: none;
    }
  }

  &__body {
    padding-bottom: 10px;
    display: none;
    @media (max-width: 991.98px) {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      padding: 0;
      z-index: 100;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      opacity: 0;
      pointer-events: none;
      transition-delay: 0.3s;
    }
  }
  &__list {
    @media (max-width: 991.98px) {
      background: #ffffff;
      padding: 20px 0;
      margin-bottom: -100%;
      transition: 0.5s ease-out;
    }
  }

  &__item {
    padding: 10px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 8px;
    .checkbox {
      &__style {
        border-color: #00404e;
        width: 16px;
        height: 16px;
      }
    }
    .checkbox__none:checked + .checkbox__style {
      background: #fff url('../assets/images/svg-icons/check.svg') 3px 3px/9px
        9px no-repeat;
    }
  }

  &__item-text {
  }
}
</style>
