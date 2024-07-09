<script>

  import AppHeader from './components/AppHeader.vue';
  import AppNav from './components/AppNav.vue';
  import AppMain from './components/AppMain.vue';

  export default{
    components :{
      AppHeader,
      AppNav,
      AppMain,
    }
  }

</script>

<template>
  <AppHeader/>
  <AppNav/>
  <AppMain/>
</template>

<style lang="scss" scoped>
</style>
