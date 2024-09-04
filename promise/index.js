/* const fetchButton = document.getElementById('fetch-users-btn').addEventListener('click', async () => {
    try {
        // fetch - response.json() - axios - response.data
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error("Kullanıcı verileri getirilirken hata oluştu")
        }

        const users = await response.json()
        const usersList = document.getElementById('user-list')
        // Clean Up
        usersList.innerHTML = ''

        users.forEach(user => {
            const li = document.createElement('li')
            li.textContent = `${user.name} ${user.email}`
            usersList.appendChild(li)
        })
    } catch (error) {

        console.log("🚀 ~ file: index.js:9 ~ document.getElementById ~ error:", error)
    }
}) */

/*  */


/* 
document.getElementById('delayed-message-btn').addEventListener('click', async () => {
    const messageElement = document.getElementById('message')

    messageElement.textContent = "Lütfen bekleyin..."


    // clean timeout & interval
    setTimeout(() => {
        messageElement.textContent = "Tıkladıktan sonra 3 saniye geçti."
    }, 3000)

    //  clearTimeout(timer)


})
 */


/* document.getElementById('upload-btn').addEventListener('click', () => {
    const uploadStatus = document.getElementById('upload-status')
    uploadStatus.textContent = "Dosya yükleniyor..."


    simuleFileUpload().then(response => {
        uploadStatus.textContent = response
    }).catch(error => {
        uploadStatus.textContent = error
    }).finally(() => {
        console.log('Bütün senaryolarda bir kere çalışır.')
    })

})
function simuleFileUpload() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // %50 ihtimal


            if (success) {
                resolve('Dosya yükleme işlemi başarılı')
            } else {
                reject('Dosya yüklerken bir hata meydana geldi. Lütfen tekrar deneyin.')
            }
        }, 4000)

    })
}
 */


document.getElementById('generate-random-btn').addEventListener('click', () => {

    document.getElementById('random-number').textContent = "Sayı üretiliyor..."


    generateRandomNumber().then(response => {
        document.getElementById('random-number').textContent = response
    }).catch(error => {
        document.getElementById('random-number').textContent = error
    })

})


function generateRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100)
            if (number > 0) {
                resolve(number)
            } else {
                reject('Sayı üretirken bir hata meydana geldi.')
            }
        }, 4000)
    })
}