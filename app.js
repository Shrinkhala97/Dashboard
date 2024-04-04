require("dotenv").config()
require("./config/db")
const express = require('express')
const bodyParser = require('body-parser')
// const adminRoutes = require('./routes/adminRoutes');
// const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express()
app.use(bodyParser.json())

// app.use('/admin', adminRoutes);
// app.use('/employee', employeeRoutes);
// app.use('/admin', authRoutes);
// app.use('/user',authRoutes);

var port = process.env.PORT || 3000
app.listen(port,function(){
    console.log(`Server is listening on port 3000`)
})

module.exports = app
