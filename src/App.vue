<script>

  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default{
    components :{
      AppHeader,
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
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *; 
</style>
