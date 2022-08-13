
const baseUrl = 'http://localhost:5000/comments';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const getOne = (id) => {
    return fetch(`${baseUrl}/details/${id}`)
        .then(res => res.json())
}

export const create = (creator, text) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, creator })
    })
        .then(res => res.json())
}

export const updateOne = (id, comment) => {
    return fetch(`${baseUrl}/details/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
}

export const deleteOne = (id) => {
    return fetch(`${baseUrl}/details/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
}
