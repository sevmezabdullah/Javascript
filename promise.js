

function getAllTodos() {
    const todos = fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response)
    }).catch((error) => {
        console.error(error)
    }).finally(() => {
        console.log("Finally")
    })
}

function addTodo() {
    return new Promise((resolve, reject) => {
        resolve("Todo added")
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        throw reject(error)
    }).finally(() => {
        console.log("Finally")
    })
}


getAllTodos()