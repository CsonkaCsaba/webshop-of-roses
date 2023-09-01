<script setup>
import Navigation from "../components/Navigation.vue"
</script>

<template >
    <Navigation/>
    <div class="under-header">
      <p>Vásároljon rózsát<br> közvetlen termelőtől!</p>
      <hr>
      <button type="button" class="btn btn-vasarlas">Vásárlás</button>
    </div>
  
</template>

<style lang="sass" scoped>
.under-header
  margin: 190px 0px 0px 0px
  background-image: url('../assets/kepek/kezdokep.jpg')
  background-size: auto
  min-height: 600px

  p
    padding: 180px 100px 0px 120px
    color: #787878
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    font-family: Inria Serif
    font-size: 30px
    font-style: normal
    font-weight: 700
    line-height: normal
  
  .btn-vasarlas
    border-radius: 18px
    background: #E4A0B7
    margin-left: 120px
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
    color: #fff
    &:hover
      background: #d95f88
      transition: .5s ease all

  hr
    width: 150px
    height: 1px
    color: #E4A0B7
    margin-left: 120px
    border-top: 3px #E4A0B7 solid

</style>
