<script>

    export default{
        name : 'AppHeader',
    }

</script>

<template>
    <div class="container">
        <div class="logo">
            <img src="https://e7.pngegg.com/pngimages/534/999/png-clipart-yu-gi-oh-power-of-chaos-yugi-the-destiny-yu-gi-oh-the-sacred-cards-yugi-mutou-bakura-yu-miscellaneous-game.png" alt="">
        </div>
        <h1>Yu Gi Oh API</h1>
    </div>
</template>

<style lang="scss" scoped>
// unisco i file scss per le variabili, mixins e le impostazioni generali
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container{
    min-height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;

    .logo{
        padding-left: 30px;

        img{
            max-height: 100px;
        }
    }
}

</style>

