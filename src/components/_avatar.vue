<template>
  <div class="user-box__avatar">
    <img :src="avatar" class="c-avatar" />
  </div>
</template>

<script>
export default {
  props: ['avatar']
}
</script>

<style lang="sass" scoped>
.c-avatar
  width: 128px
  height: 128px
  border-radius: 100%
  border: 4px solid #2c3e50
</style>
