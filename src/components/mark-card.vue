<template>
  <div class="mark-card" v-if="mark">
    <div class="mark-card__left" v-if="mark.featured_image">
      <img :src="mark.featured_image" alt="" />
    </div>
    <div class="mark-card__right">
      <h4 class="mark-card__title">{{ mark.title }}</h4>
      <p
        class="mark-card__description"
        v-html="mark.content"
        @click.stop=""
      ></p>
      <div class="mark-card__button">
        <button
          type="button"
          class="btn-red"
          v-on:click.stop="addCardToSelected"
        >
          <slot name="btn">Pasirinkti objektą</slot>
        </button>
        <a target="_blank" :href="mark.link" class="btn-border">Naviguoti</a>
      </div>
    </div>
    <button
      v-if="!not_to_close"
      type="button"
      class="mark-card__close"
      @click="$emit('closeCard')"
    >
      <svg
        width="22"
        height="22"
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
</template>

<script>
export default {
  name: 'mark-card',
  data() {
    return {}
  },
  props: {
    mark: null,
    not_to_close: {
      default() {
        return false
      },
    },
  },
  methods: {
    addCardToSelected: function (event) {
      this.$emit('addCardToSelected', {
        thisMark: this.mark,
        thisEvent: event,
        btn: this.$el,
        thisElem: this,
      })
    },
  },
}
</script>

<style lang="scss">
.mark-card {
  cursor: default;
  // overflow: hidden;
  min-height: 158px;
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
  max-height: 300px;
  &__left {
    width: 99px;
    align-self: stretch;
    flex: none;
    overflow: hidden;
    border-radius: 8.59016px 0 0 8.59016px;
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
    // max-height: 22px;
    // white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #212b36;
    flex: none;
  }
  &__description {
    flex: 1 1 auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    // max-height: 57px;
    color: #212b36;
    overflow-y: auto;
    word-wrap: break-word;
    &::-webkit-scrollbar {
      width: 0;
    }
    h6 {
      font-size: inherit;
    }
  }
  &__button {
    flex: none;
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
    display: flex;
    align-items: center;
  }
  .btn-border {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #db3831;
    background: #ffffff;
    border: 1px solid #db3831;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 6px 12px;
    display: flex;
    align-items: center;
  }
  &__close {
    position: absolute;
    transform: translate(50%, -50%);
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
