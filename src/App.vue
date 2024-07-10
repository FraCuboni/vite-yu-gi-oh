<script>
  //importo Axios, store.js, Appheader e Appmain
  import axios from 'axios';
  import { store } from './store';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import Filter from './components/Filter.vue';

  // definisco Appheader e Appmain
  export default{
    components :{
      AppHeader,
      AppMain,
      Filter,
    },

    data(){
      return {
        store,
      }
    },
    // creo la funzione per estrarre i dati  dall'API usando axios
    methods : {
      GetCardInfo(){
        axios.
        // Se tutto va dritto ritorna l'array di oggetti data
        get(store.apiURL)
        .then(res => {
          console.log(res.data.data);
          store.cardList = res.data.data;
          console.log('store cards ' + store.cardList)
        })
        // se va storto logga in console l'errore
        .catch(err =>{
          console.log(err);
        })
      },

      GetArchetype(){
        axios.
        // Se tutto va dritto ritorna l'array di oggetti data
        get(store.archetypeAPI)
        .then(res => {
            console.log(res.data);
            store.archetypeList= res.data;
            console.log('store archetype ' + store.archetypeList)
          })
        // se va storto logga in console l'errore
        .catch(err =>{
          console.log(err);
        })
      }
    },
    created(){
      // attivo per estrarre i dati alla creazione della pagina
      this.GetCardInfo();
      this.GetArchetype();
    }
  }

</script>

<template>
  <AppHeader/>
  <Filter @filter="GetCardInfo" />
  <AppMain/>
</template>

<style lang="scss" scoped>
// unisco i file scss per le variabili, mixins e le impostazioni generali
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *; 
</style>
