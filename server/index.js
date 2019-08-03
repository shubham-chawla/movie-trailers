import express from 'express';
import axios from 'axios';

import serverRenderer from './middleware/renderer';

const PORT = process.env.PORT || 8000;
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/node/api/getData', (req, res, next) => {
    axios
        .get('https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs')
        .then(data => res.status(200).send({ data: data.data }))
        .catch(e => console.log(e));
});

app.get('/', serverRenderer);
app.use(express.static(path.resolve('dist')));

app.listen(PORT, error => {
    if (error) {
        return console.log('Could not start the app', error);
    }

    console.log('Listening on ' + PORT + '...');
});
