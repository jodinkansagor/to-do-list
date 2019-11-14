const URL = '/api';

const token = localStorage.getItem('TOKEN');

if (!token && !(location.pathname === '/' || location.pathname === '/index.html')) {
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', location.pathname);
    location = `/?${searchParams.toString()}`;
}

async function fetchWithError(url, options) {
    // if(token) {
    //     options = options || {};
    //     options.headers = options.headers || {};
    //     options.headers.Authorization = token;
    // }
    const response = await fetch(url, options);
    console.log(response, 'response');
    console.log(url, options, 'url and options');
    const data = await response.json();

    if (response.ok) {
        return data;
    }
    else {
        throw data.error;
    }
}

//sign in and sign up fetch calls

export function signUp(user) {
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
}

export function signIn(credentials) {
    const url = `${URL}/auth/signin`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    });
}

export function getTodos() {  
    const url = `${URL}/todos`;
    return fetchWithError(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
}

export function addTodo(todo) {      
    const url = `${URL}/todos`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(todo)
    });
}

export function updateTodo(todo) {  
    const url = `${URL}/todos/${todo.id}`;

    return fetchWithError(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(todo)
    });
}

export function removeTodo(todoId) {  
    const url = `${URL}/todos/${todoId}`;
    console.log(url);
    return fetchWithError(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'applicaton/json',
            'Authorization': token
        }
    });
}

