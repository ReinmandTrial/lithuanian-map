<template>
  <div :class="{ openDropdown }" class="dropdown">
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
        <label
          v-for="(dropdownItem, idx) in testA()"
          :key="idx"
          class="dropdown__item"
        >
          <span class="checkbox">
            <input
              type="checkbox"
              class="checkbox__none"
              v-model="dropdownItem.checked"
              @change="hideMarks(dropdownItem)"
            />
            <span class="checkbox__style"></span>
          </span>
          <span class="dropdown__item-text">{{ dropdownItem.text }}</span>
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
      countChecked: 0,
      openDropdown: false,
      dropdownItems: [
        {
          checked: false,
          text: '\u0160ilut\u0117s r. sav.',
        },
        {
          checked: false,
          text: 'Pag\u0117gi\u0173 sav.',
        },
        {
          checked: false,
          text: 'Jurbarko r. sav.',
        },
        {
          checked: false,
          text: 'Taurag\u0117s r. sav.',
        },
        {
          checked: false,
          text: 'Klaip\u0117dos r. sav.',
        },
        {
          checked: false,
          text: 'Klaip\u0117dos m. sav.',
        },
        {
          checked: false,
          text: 'Neringos sav.',
        },
      ],
    }
  },
  props: {
    data_marks: {
      type: Array,
      default() {
        return []
      },
    },
    tagsCount: null,
  },
  methods: {
    hide(e) {
      if (
        !e.target.closest('.dropdown__list') &&
        !e.target.closest('.dropdown__head')
      ) {
        this.openDropdown = false
      }
    },
    hideMarks: function (item) {
      let thisRegion = item.text
      const marksDOM = document.querySelectorAll('.mark')
      if (this.tagsCount != 0) {
        if (item.checked === true) {
          marksDOM.forEach((mark) => {
            if (
              mark.querySelector('.mark-btn').classList.contains('active-t')
            ) {
              if (mark.getAttribute('data-region') == thisRegion) {
                mark.querySelector('.mark-btn').classList.remove('not-active-r')
                mark.querySelector('.mark-btn').classList.add('active-r')
                mark.style.pointerEvents = 'visible'
              } else {
                mark.querySelector('.mark-btn').classList.add('not-active-r')
                mark.style.pointerEvents = 'none'
              }
            }
          })
          this.countChecked++
        } else if (item.checked === false) {
          marksDOM.forEach((mark) => {
            if (
              mark.querySelector('.mark-btn').classList.contains('active-t')
            ) {
              if (mark.getAttribute('data-region') == thisRegion) {
                mark.querySelector('.mark-btn').classList.remove('active-r')
                mark.querySelector('.mark-btn').classList.add('not-active-r')
                mark.style.pointerEvents = 'none'
              }
            }
          })
          this.countChecked--
          this.$emit('regionCount', this.countChecked)
          if (
            this.countChecked == 0
            //  && this.tagsCount == 0
          ) {
            marksDOM.forEach((mark) => {
              mark.querySelector('.mark-btn').classList.remove('not-active-r')
              mark.style.pointerEvents = 'visible'
            })
          }
        }
      } else {
        if (item.checked === true) {
          marksDOM.forEach((mark) => {
            if (mark.getAttribute('data-region') == thisRegion) {
              mark.querySelector('.mark-btn').classList.remove('not-active-r')
              mark.querySelector('.mark-btn').classList.add('active-r')
              mark.style.pointerEvents = 'visible'
            } else if (
              !mark.querySelector('.mark-btn').classList.contains('active-r')
            ) {
              mark.querySelector('.mark-btn').classList.add('not-active-r')
              mark.style.pointerEvents = 'none'
              // console.log('find')
            }
          })
          this.countChecked++
        } else if (item.checked === false) {
          marksDOM.forEach((mark) => {
            if (mark.getAttribute('data-region') == thisRegion) {
              mark.querySelector('.mark-btn').classList.remove('active-r')
              mark.querySelector('.mark-btn').classList.add('not-active-r')
              mark.style.pointerEvents = 'none'
            }
          })
          this.countChecked--
          this.$emit('regionCount', this.countChecked)
          if (
            this.countChecked == 0
            //  && this.tagsCount == 0
          ) {
            marksDOM.forEach((mark) => {
              mark.querySelector('.mark-btn').classList.remove('not-active-r')
              mark.style.pointerEvents = 'visible'
            })
          }
        }
      }
    },
    testA: function () {
      if (this.data_marks != null) {
        var newArr = []
        this.data_marks.forEach((mark) => {
          newArr.push(mark.category_title)
        })
        const uniqueSet = new Set(newArr)
        var testArr = [...uniqueSet]
        var testArr2 = []
        testArr.forEach((el) => {
          let newObj = {
            checked: false,
            text: el,
          }
          testArr2.push(newObj)
        })

        return testArr2
      }
    },
  },
  watch: {},
  computed: {},
  directives: {
    ClickOutside,
  },
  beforeMount() {
    // console.log(this.marks)
    // var newArr = []
    // this.marks.forEach((mark) => {
    //   newArr.push(mark.category_title)
    // })
    // const uniqueSet = new Set(newArr)
    // this.testArr = [...uniqueSet]
    // console.log(this.testArr)
  },
  mounted: function () {
    this.$emit('regionCount', this.countChecked)

    // console.log(this.marks)
    // console.log(this.tagsCount)
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
