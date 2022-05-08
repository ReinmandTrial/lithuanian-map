<template>
  <div class="title-line">
    <div class="container">
      <div class="title-line__content">
        <h1 class="title-line__h">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'title-line',
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss">
.title-line {
  background: url(@/assets/images/title-line.jpg) center / cover no-repeat;
  &__content {
    padding: 15px 0;
    @media (max-width: 575.98px) {
      padding: 20px 0;
    }
  }

  &__h {
    font-family: 'Open Sans';
    font-weight: 700;
    text-transform: uppercase;
    font-size: 32px;
    color: #ffffff;
    @media (max-width: 575.98px) {
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>
