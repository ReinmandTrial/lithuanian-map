<template>
  <div class="marks-container">
    <v-mark-item
      v-for="mark in marks"
      :key="mark.id"
      :mark="mark"
      @addCardToSelected="addCardToSelected"
      :zoomvalue="zoomvalue"
      @openCardMobile="openCardMobile"
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
    openCardMobile(data) {
      this.$emit('openCardMobile', data)
    },
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
  &.active {
    z-index: 30;
  }
}
.mark-card {
  &.v-leave-active {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
