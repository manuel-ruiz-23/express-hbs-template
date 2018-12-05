const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

//use only when needed
let jsonParser = bodyParser.json();
let urlParser = bodyParser.urlencoded({ extended: true });

app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));