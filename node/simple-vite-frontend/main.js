// API URL'si
const API_URL = 'http://localhost:3000/users';

// DOM Elemanlarını Seçme
const userList = document.getElementById('user-list');
const nameInput = document.getElementById('name-input');
const addUserButton = document.getElementById('add-user-button');
const errorMessage = document.getElementById('error-message');

// Kullanıcıları Listeleme Fonksiyonu
async function fetchUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Verileri getirirken hata oldu');
    const users = await response.json();
    userList.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
  } catch (error) {
    errorMessage.textContent = error.message;
  }
}

// Yeni Kullanıcı Ekleme Fonksiyonu
async function addUser() {
  const name = nameInput.value.trim();
  if (!name) {
    errorMessage.textContent = 'İsim boş girilemez';
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) throw new Error('Kullanıcı ekleme başarısız oldu.');
    const newUser = await response.json();
    const li = document.createElement('li');
    li.textContent = newUser.name;
    userList.appendChild(li);
    nameInput.value = '';
    errorMessage.textContent = '';
  } catch (error) {
    errorMessage.textContent = error.message;
  }
}

// Olay Dinleyici
addUserButton.addEventListener('click', addUser);

// Uygulama yüklendiğinde kullanıcıları listele
fetchUsers();
