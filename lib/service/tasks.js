export function getAllTasks() {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => json)
}

export function getOneTask(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => json)
}

export function getTaskInCategory(category) {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => json)
}