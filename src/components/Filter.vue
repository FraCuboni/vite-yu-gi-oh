<script>

    export default{
        name : 'Filter',
    }

</script>

<template><select
    @keyup.enter="$emit('filter')"
     name="type" id="">
        <option value="">Archetype</option>
        <option value="Alien">Alien</option>
        <option value="Toy">Toy</option>
        <option value="Archfiend">Archfiend</option>
    </select>
</template>

<style lang="scss" scoped>
// unisco i file scss per le variabili, mixins e le impostazioni generali
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

</style>

