require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT;
require('./database/connection');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use('/process', require('./router/process'));
app.use('/stats', require('./router/stats'));

app.listen(port, () => {
    console.log(`Ashar app listening at http://localhost:${port}`);
})