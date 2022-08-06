
const baseUrl = 'http://localhost:5000/api/users';

export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
}

// export const logout = (token) => {
//     return fetch(`${baseUrl}/logout`, {
//         headers: {
//             "X-Authorization": token
//         }
//     });
// }

export const register = (email, password) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
}