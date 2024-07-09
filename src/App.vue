<script>
  import axios from 'axios';
  import { store } from './store';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default{
    components :{
      AppHeader,
      AppMain,
    },

    data(){
      return {
        store,
      }
    },
    methods : {
      GetCardInfo(){
        axios.
        get(store.apiURL)
        .then(res => {
          console.log(res);
        })
        .catch(err =>{
          console.log(err);
        })
      }
    },
    created(){
      this.GetCardInfo();
    }
  }

</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *; 
</style>
