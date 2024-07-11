<script>

    
  import { store } from '../store';

    export default{
        name : 'Filter',

        data(){
            return {
                store,
            }
    },

    }

</script>

<template><select
    @change="$emit('filter')"
    v-model="store.aFilter"
    name="type" id="">
        <option value="">All</option>
        <option v-for="(archetype, index) in store.archetypeList" :key="index" :value="archetype.archetype_name">{{ archetype.archetype_name}}</option>
    </select>
</template>

<style lang="scss" scoped>
// unisco i file scss per le variabili, mixins e le impostazioni generali
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

</style>

