<script>

    export default{
        name : 'AppHeader',
    }

</script>

<template>
    <div class="container">
        <div class="logo">logo</div>
        <div>yu gi oh bla bla</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container{
    min-height: 100px;
    background-color: red;
}

</style>

