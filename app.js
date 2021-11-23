const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); //appropriate for content-type = 'x-www-from-urlencoded' <form>
app.use(bodyParser.json()); //appropriate for content-type= "application/json"

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    //'*' indicates it will allow all the domains, we can specify list in real-world
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // Second argument specifies the HTTP methods allowed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Second argument specifies the headers allowed in request, added "authorization"
    //to allow consumer to sent authorization information
    next();
})

app.use('/feed', feedRoutes);

app.listen(8080);