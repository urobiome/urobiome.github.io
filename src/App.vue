<template>
  <div id="app">
    <div class="">
      <router-view></router-view>
    </div>
    <FixedMenu />
  </div>
</template>

<script>
import FixedMenu from './components/layout/FixedMenu.vue'

export default {
  name: 'App',
  components: {
    FixedMenu
  }
}
</script>

<style>

</style>
