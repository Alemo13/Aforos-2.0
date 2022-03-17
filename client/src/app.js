const bodyParser = require('body-parser');
const morgan =require('morgan');
const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const { mongoConnect } = require('./services/database');
const { amqpConnectAndConsume} = require('./services/mqService');
const cors = require('cors');
const SLEEP_TIME = process.env.SLEEP_TIME || 100;

const placesRoutes = require('./routes/places');

startServer = () => {
    // Connect to MongoDB
    mongoConnect();
    // Connect to RabbmitMQ and consume orders
    amqpConnectAndConsume();
}

// mongoose.connect('mongodb://localhost:27017/aforos').then(db => console.log('db is connected'))
// .catch(err => console.log(err)) ;


//settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/places', placesRoutes);

//start server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})

module.exports = {
    startServer: startServer
}