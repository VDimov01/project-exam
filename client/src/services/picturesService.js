
const baseUrl = 'http://localhost:5000/pictures';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const getOne = (id) => {
    return fetch(`${baseUrl}/details/${id}`)
        .then(res => res.json())
}

export const create = (title, description, imageUrl, owner, token) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ title, description, imageUrl, owner })
    })
        .then(res => res.json())
}

export const updateOne = (id, picture, token) => {
    return fetch(`${baseUrl}/details/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(picture)
    })
        .then(res => res.json())
}

export const deleteOne = (id, token) => {
    return fetch(`${baseUrl}/details/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json())
}
