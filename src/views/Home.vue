<script setup>
import Navigation from "../components/Navigation.vue"
</script>

<template >
    <Navigation/>
    <div class="under-header">
      <p>Vásároljon rózsát<br> közvetlen termelőtől!</p>
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

</style>
