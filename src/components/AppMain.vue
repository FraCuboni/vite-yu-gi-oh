<script>

    export default{
        name : 'AppMain',
    }

</script>

<template>

    <div class="container">

        <div class="nested-container">

            <div class="card-container">

                <div class="title">

                    <h1>giorgio</h1>
        
                    <select name="type" id="">
                        <option value="">Type</option>
                    </select>
                    
                </div>

                <div class="cards">

                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>

                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container{
    width: 100%;
    padding: 5% 10%;
    background-color: #d48f38;

    display: flex;
    align-items: center;
    justify-content: center;
    

    .nested-container{
        width: 100%;
        padding: 5%;
        background-color: white;

        .card-container{
            border: solid 1px black;

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


                .card{
                    min-height: 200px;
                    background-color: blue;
                    width: calc(100% / 5 - 30px);
                }
            }
        }

    }
}

</style>
