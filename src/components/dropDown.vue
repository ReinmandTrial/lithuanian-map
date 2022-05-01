<template>
  <div v-click-outside="hide" :class="{ openDropdown }" class="dropdown">
    <button
      type="button"
      @click="openDropdown = !openDropdown"
      class="dropdown__head"
    >
      Filtruoti pagal savivaldybes
      <span class="dropdown__icon">
        <img
          src="@/assets/images/svg-icons/triangle-down.svg"
          alt="Triangle down"
        />
      </span>
    </button>
    <div class="dropdown__body">
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
  }

  &__icon {
    width: 24px;
    height: 24px;
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(1px);
  }

  &__body {
    display: none;
    padding-bottom: 10px;
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
