import { reactive } from 'vue'

// esporto lo store per poter prendere i dati dall'API con axios
export const store = reactive({
    cardList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0",

    aFilter: '',
    archetypeList: [],
    archetypeAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    apiArchetypeParameter: '&archetype',
});