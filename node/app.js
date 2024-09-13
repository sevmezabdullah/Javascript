const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

// JSON formatında veri almak için middleware
app.use(express.json());

app.use(cors())

// Basit bir root endpoint
app.get('/', (req, res) => {


    res.send('ؤخحغ حشسفث؟');
});

// Basit bir kullanıcı listesi döndüren endpoint
const users = [

];

app.get('/users', (req, res) => {
    res.json(users);
});

// Yeni kullanıcı ekleyen bir endpoint
app.post('/users', (req, res) => {

    console.info("Backend'e gelen istek ", req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

// ID ile kullanıcıyı döndüren endpoint
app.get('/users/:id', (req, res) => {


    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Server'ı başlat
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
