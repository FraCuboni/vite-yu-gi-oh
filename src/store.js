import { reactive } from 'vue'

// esporto lo store per poter prendere i dati dall'API con axios
export const store = reactive({
    cardList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    archetypeList: [],
    archetypeAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
});