import { reactive } from 'vue'
import axios from 'axios';
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
        {
            text: 'Breaking Bad, Better Call Saul',
            value: 'Breaking Bad, Better Call Saul',
        },

    ],
    callApi(url) {
        axios.get(url)
            .then(resp => {
                store.loading = false;
                store.actors = resp.data;

            })
            .catch(err => {
                store.loading = false;
                store.errorMsg = err.message;
            })
    }


})





