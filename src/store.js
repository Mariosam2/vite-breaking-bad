import { reactive } from 'vue'

export let store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    loading: true,
    actors: null,
    currentActors: null,
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

    ]
})

