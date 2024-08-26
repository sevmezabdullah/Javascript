const names = ["Abdullah", "Mehmet", "Pınar", "Gülay", "Ahmet", "Selim"]

const ul = document.getElementById("names")


function displayNames(list) {
    ul.innerHTML = ""
    list.forEach(name => {
        const li = document.createElement("li")
        li.textContent = name
        ul.appendChild(li)
    })
}

function shuffleNames() {
    const shuffledNamed = _.shuffle(names)
    displayNames(shuffledNamed)
}


const array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a');
console.log(array);