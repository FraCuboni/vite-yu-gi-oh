<script>
    // importo il componente card
    import Card from './Card.vue';
    // importo lo store
    import { store } from '../store';
    export default{
        name : 'AppMain',
        components:{
            Card,
        },

        data(){
            return{
                store,
            }
        },
    }

</script>

<template>

    <div class="container">

        <div class="nested-container">

            <div class="card-container">

                <div class="title">

                    <h1>Found {{ store.cardList.length }} Cards</h1>
        
                    <select name="type" id="">
                        <option value="">Type</option>
                    </select>
                    
                </div>

                <div class="cards">

                    <Card v-for="(card, index) in store.cardList" :key="card.id" :CardInfo="card"/>

                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
// unisco i file scss per le variabili, mixins e le impostazioni generali
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container{
    width: 100%;
    padding: 5% 10%;
    background-color: $primary_color;

    display: flex;
    align-items: center;
    justify-content: center;
    

    .nested-container{
        width: 100%;
        padding: 5%;
        background-color: white;

        .card-container{

            .title{
                background-color: black;
                color: white;
                min-height: 100px;
                margin-bottom: 30px;
                padding: 0 20px;

                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .cards{
                min-height: 100px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

            }
        }

    }
}

</style>
