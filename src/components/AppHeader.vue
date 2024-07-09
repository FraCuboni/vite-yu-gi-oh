<script>

    export default{
        name : 'AppHeader',
    }

</script>

<template>
    <div class="container">
        <div class="logo">logo</div>
        <h1>Yu Gi Oh API</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container{
    min-height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
}

</style>

