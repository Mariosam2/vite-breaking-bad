let store = {
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    actors: [],
    currentActors: [],
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
        }
    ]
}

export { store };