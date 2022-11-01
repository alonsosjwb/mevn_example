require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

//Settings
app.set( 'port', process.env.PORT || 3000 );
mongoose.connect(process.env.MONGO_URL)
.then(db => console.log('Db is connected'))
.catch(err=> console.error(err));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/tasks', require('./routes/tasks'));

//Static files
app.use(express.static(__dirname + '/public'))

//Server listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});