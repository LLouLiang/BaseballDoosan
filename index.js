//Enery of the nodejs server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./dbConfig/mongo');

const App = new express();
mongoose.connect(config.connectString);
mongoose.connection.on('connected', () => {
    console.log("MongoDB Successfully connected");
});
mongoose.connection.on('on', error => {
    console.log("There is connection error here " + error);
});

const demoApi = require('./routers/demoApi');

App.use(cors());
App.use(express.static(path.join(__dirname,'client')));
App.use(bodyParser.json());
App.use('/baseballapi',demoApi);

const PORT_NUM = 4000;
App.listen(PORT_NUM, () => {
    console.log(`Server is running at port ${PORT_NUM}`);
});