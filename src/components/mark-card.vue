<template>
  <div class="mark-card">
    <div class="mark-card__left">
      <img :src="mark.featured_image" alt="" />
    </div>
    <div class="mark-card__right">
      <h4 class="mark-card__title">{{ mark.title }}</h4>
      <p class="mark-card__description" v-html="mark.content"></p>
      <div class="mark-card__button">
        <button
          type="button"
          class="btn-red"
          v-on:click.stop="addCardToSelected"
        >
          Pasižymėti objektą
        </button>
        <a target="_blank" :href="mark.link" class="btn-border">Naviguoti</a>
      </div>
    </div>
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
  overflow: hidden;
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
    // max-height: 22px;
    // white-space: nowrap;
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
    // max-height: 57px;
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
