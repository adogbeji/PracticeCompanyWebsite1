// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    res.render('home');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});