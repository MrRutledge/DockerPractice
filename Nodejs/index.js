const express = require('express');


const app = express();

app.get('/',(req,res) => {
    res.send('Hi there! $Sweet Sixteen$ jesus 290');
});

app.listen(6000, () => {
    console.log('Listening on port 8080')
});