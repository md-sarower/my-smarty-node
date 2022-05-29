const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello! form my favorite smarty node js form node js!')
});
app.listen(port, () => {
    console.log('Listening to port: ', port);
})