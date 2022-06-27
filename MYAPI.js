//////////////////////////////////////////
///                                    ///
///                                    ///
/////////////////////////////////////////


var http = require('http');
var express = require('express');
var app = express();
console.log('hola soy Myapp   ' );

//se crea el modelo del json de estado

let Locker = require('./ControlerRPI/LockerControlerRPI');

app.get('/Locker', function (req, res) {
  console.log('all Locker State');
  res.status(200).send(Locker.LocketStadeUpdate());
}); // apt.get() 

let Casillero = [{ Idcasillero: '001', IdestadoCasillero: 'On Line', CantidadLockers: 3, CantidadLockersDisponibles: 1 }, { Idcasillero: 002, IdestadoCasillero: 'On Line', CantidadLockers: 3, CantidadLockersDisponibles: 3 }];
app.get('/Lockers', function (req, res) {
  // send an object as a JSON string
  console.log('all Locker State');
  res.status(200).send(Casillero);
}); // apt.get()

const cors = require('cors');
app.use(cors({
  origin: ['http://192.168.20.24', 'https://www.google.com/']
}));

app.use(cors({
  origin: '*'
}));

//tutorial

var inputs = [{ pin: '11', gpio: '17', value: 1 }, { pin: '12', gpia: '18', value: 0 }];
// configure Express to serve index.html and any other static pages stored 
// in the home directory
//app.use(express.static(__dirname));


// Express route for incoming requests for a single input
app.get('/inputs/:id', function (req, res) {
  // send an object as a JSON string
  console.log('id = ' + req.params.id);
  res.send(inputs[req.params.id]);
}); // apt.get()

// Express route for incoming requests for a list of all inputs
app.get('/inputs', function (req, res) {
  // send an object as a JSON string
  console.log('all inputs');
  res.status(200).send(inputs);
}); // apt.get()

// Express route for any other unrecognised incoming requests
app.get('*', function (req, res) {
  res.status(404).send('Unrecognised API call');
});

// Express route to handle errors
app.use(function (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send('Oops, Something went wrong!');
  } else {
    next(err);
  }
}); // apt.use()

// ------------------------------------------------------------------------
// Start Express App Server
//
app.listen(3000);
console.log('App Server is listening on port 3000');