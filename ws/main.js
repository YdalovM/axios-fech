// let element = document.querySelector('.wrap')

// async function getData () {
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (data.ok) {
//         let todos = await data.json()
//         console.log(todos)
//         todos.forEach(elem => {
//             return element.insertAdjacentHTML('beforeend',
//             `<h2>${elem.id} ${elem.title}</h2>`)
//         });
//     }
// }

// function getData () {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(data => data.json())
//     .then(data => printInfo(data))
// }

// function printInfo (todos) {
//     todos.forEach(elem => {
//         return element.insertAdjacentHTML('beforeend',
//         `<h2>${elem.id} ${elem.title}</h2>`)
//     });
// }

// let newPost = {
//     userId: 1,
//     title: 'new title',
//     body: 'new body'

// }

// async function getData () {
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(newPost)
//     }); 
//     if (data.ok) {
//         let elem = await data.json()
//         element.insertAdjacentHTML('beforeend',
//             `<h2>${elem.id} ${elem.title}</h2>`)
//     }
// }
// getData()


// Получить элементы
const postsContainer = document.querySelector('#posts');
const commentsContainer = document.querySelector('#comments');
const usersContainer = document.querySelector('#users');

const addUserButton = document.querySelector('#add-user-button');
const addPostButton = document.querySelector('#add-post-button');
const addCommentButton = document.querySelector('#add-comment-button');

// Функция для отображения данных
function displayData(data, container) {
    container.innerHTML = '';

    data.forEach(item => {
    const element = document.createElement('div');
    element.innerHTML = JSON.stringify(item);

    container.appendChild(element);
    });
    }

    // Функция для получения данных
    async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
    }

    // Функция для добавления пользователя
    async function addUser(user) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify(user)
    });

    const data = await response.json();

    return data;
    }

    // Функция для добавления поста
    async function addPost(post) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    const data = await response.json();

    return data;
    }

    // Функция для добавления комментария
    async function addComment(comment) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    const data = await response.json();

    return data;
    }

    // Получение данных
    getData('https://jsonplaceholder.typicode.com/posts').then(data => displayData(data, postsContainer));
    getData('https://jsonplaceholder.typicode.com/comments').then(data => displayData(data, commentsContainer));
    getData('https://jsonplaceholder.typicode.com/users').then(data => displayData(data, usersContainer));

    // Добавление пользователя
    addUserButton.addEventListener('click', () => {
        const user = {
            name: 'Новый пользователь',
            username: 'new_user',
            email: 'new_user@example.com'
    };

    addUser(user).then(data => {
        alert('Пользователь добавлен');
        getData('https://jsonplaceholder.typicode.com/users').then(data => displayData(data, usersContainer));
        });
    });

    // Добавление поста
    addPostButton.addEventListener('click', () => {
        const post = {
            title: 'Новый пост',
            body: 'Это новый пост',
            userId: 1
    };

    addPost(post).then(data => {
        alert('Пост добавлен');
        getData('https://jsonplaceholder.typicode.com/posts').then(data => displayData(data, postsContainer));
        });
    });

    // Добавление комментария
    addCommentButton.addEventListener('click', () => {
        const comment = {
            name: 'Новый комментарий',
            email: 'new_comment@example.com',
            body: 'Это новый комментарий',
            postId: 1
    };

    addComment(comment).then(data => {
        alert('Комментарий добавлен');
        getData('https://jsonplaceholder.typicode.com/comments').then(data => displayData(data, commentsContainer));
        });
    });

