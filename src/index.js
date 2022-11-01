const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set( 'port', process.env.PORT || 3000 );

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes

//Static files
app.use(express.static(__dirname + '/public'))

//Server listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});