import { reactive } from 'vue'
export let store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    errorMsg: null,
    loading: true,
    actors: null,
    userCategory: '',
    options: [
        {
            text: 'Breaking Bad',
            value: 'Breaking Bad',
        },
        {
            text: 'Better Call Saul',
            value: 'Better Call Saul',
        },

    ],

})



