const express = require('express');
const bodyparser = require('body-parser');
const cors=require('cors');
const {mongoose} = require('./db.js');
var employeeController = require('./controllers/employeeControllers.js')
var app = express();
app.use(bodyparser.json());
//app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000, ()=> console.log('Server started at port: 3000'));
app.use('/login',employeeController);