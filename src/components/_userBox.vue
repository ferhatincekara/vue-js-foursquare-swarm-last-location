<template>
  <div class="user-box__body">
    <h1 class="user-box__fullname">{{ fullname }}</h1>
    <span class="user-box__username">@{{ userid }}</span>
    <p class="user-box__bio">
      <b>Bio:</b>
      {{ bio }}
    </p>
    <span class="user-box__homecity">{{ homecity }}</span>
  </div>
</template>

<script>
export default {
  props: ['fullname', 'userid', 'homecity', 'bio']
}
</script>

<style lang="sass" scoped>
.user-box
  &__body
    margin-top: 10px
    margin-bottom: 10px

    span
      display: block
      padding: 10px

  &__fullname
    font-size: 24px
    color: #2c3e50
    font-weight: 700
    margin: 0
    padding: 0

  &__username,
  &__homecity
    font-size: 14px
    font-weight: 400
    color: #7f8c8d

  &__bio
    font-size: 18px
</style>
