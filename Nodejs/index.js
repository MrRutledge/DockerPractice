const express = require('express');


const app = express();

app.get('/',(req,res) => {
    res.send('Hi there! $Sweet Sixteen$ jesus 290');
});

app.listen(8082, () => {
    console.log('Listening on port 8080')
});