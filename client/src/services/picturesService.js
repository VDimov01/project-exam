
const baseUrl = 'http://localhost:3030/jsonstore/pictures';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

