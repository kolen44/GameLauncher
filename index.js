const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

fetch("https://api.thecatapi.com/v1/images/search") .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        console.log(data)
    })

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW' });
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});