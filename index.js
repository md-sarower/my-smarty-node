const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello! form my favorite smarty node js form node js!')
});

const users = [
    { id: 1, name: 'Ishrat Tabassum', email: 'ishrattabassum@gmail.com', phone: '01517992286' },
    { id: 2, name: 'Dipika Padkun', email: 'dipikapadkun@gmail.com', phone: '01735575648' },
    { id: 3, name: 'Priyanka Chopra', email: 'priyanka@gmail.com', phone: '01735574582' },
    { id: 4, name: 'Shek Jamal', email: 'shekjamal@gmail.com', phone: '01735745824' },
    { id: 5, name: 'Vobita Begum', email: 'vobita@gmail.com', phone: '01735115716' },
    { id: 6, name: 'Nishat Tabassum', email: 'nishattabassum@gmail.com', phone: '01704757384' },
    { id: 7, name: 'Suraly Gomej', email: 'suralygomej@gmail.com', phone: '01758781111' },
]

app.get('/user', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Fazle is my favorite mango');
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    res.send('post method success')
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orangs']);
});

app.listen(port, () => {
    console.log('Listening to port: ', port);
});