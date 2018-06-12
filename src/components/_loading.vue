<template>
  <div class="loader" v-if="visible">
    <PulseLoader :color="red" />
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  props: ["visible"],
  data () {
    return {
      red: '#f5f6fa'
    }
  },
  components: {
    PulseLoader
  }
}
</script>

<style lang="sass" scoped>
.loader
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 999
  display: flex
  align-items: center
  justify-content: center
  background-color: #353b48
</style>

