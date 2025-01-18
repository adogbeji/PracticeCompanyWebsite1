// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));  // Serves static asset (eg. CSS, JS)

app.use('/', (req, res, next) => {
    res.render('home');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});