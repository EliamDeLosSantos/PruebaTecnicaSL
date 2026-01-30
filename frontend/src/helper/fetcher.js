
//This is from env
const API_URL = `http://localhost:3000/tasks`

export const getTasks = async () => {
    const response = await fetch(API_URL, {
        method: 'GET'
    })
    return await response.json();
}

export const createTask = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return await response.json()
}

export const updateTask = async ({id, data}) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return await response.json()
}

