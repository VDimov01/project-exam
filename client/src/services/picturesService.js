
const baseUrl = 'http://localhost:5000/pictures';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const getOne = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
}

export const create = (picture) => {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(picture)
    })
        .then(res => res.json())
}

export const updateOne = (id, picture) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(picture)
    })
        .then(res => res.json())
}

