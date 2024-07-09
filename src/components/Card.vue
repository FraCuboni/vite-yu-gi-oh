<script>

    export default{
        name : 'Card',

    }

</script>

<template>
    <div class="card">
        <div class="img-container">IMMAGINEEE</div>
        <h2 class="card-name">MARIO</h2>
        <h2 class="card-type">ALIEN</h2>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


.card{
    min-height: 100px;
    background-color: $primary_color;
    width: calc(100% / 5 - 30px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .img-container{
        width: 100%;
        min-height: 20px;
        background-color: red;
    }

    .card-name{
        color: white;
    }

    .card-type{

    }
}

</style>

