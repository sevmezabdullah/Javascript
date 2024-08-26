function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/3';

    axios.get(url).then((response) => {
        document.getElementById('result').innerHTML = `<h2>${response.data.title}</h2>
        <p>${response.data.body}</p>`
    }).catch((error) => {
        console.log(error)
        document.getElementById('result').innerHTML = `<h2>Error fetching data</h2>`
    })

}