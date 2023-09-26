
// // IMPORTS
// const express = require('express')
// const app = express()
// const todoRouter = require('./routes/todo')



// require('dotenv').config()
// const PORT = process.env.PORT || 3000

// // setup database 
// const mongoURI = process.env.MONGO_URI
// const mongoose = require('mongoose')


// // connect to mongo 
// mongoose.connect(mongoURI)

// // middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/', todoRouter)

// app.set("view engine", "ejs");

// // routes
// app.use(require("./routes/index"))

// const db = mongoose.connection
// // optional create status messages to check mongo connection 
// db.on('error', (err) => { console.log('ERROR: ' , err)})
// db.on('connected', () => { console.log('mongo connected')})
// db.on('disconnected', () => { console.log('mongo disconnected')})

// //Express Route
// // app.get('/', (req, res) => {
// //    res.send('Ho world!')
// // })

// //catch all routes
//  app.get("*", function(req, res) {
//     res.send("<h1>Invalid Page</h1>")
//  }) 



// app.listen(PORT, () => {
//     console.log(`Server is listening on PORT: ${PORT}`)
// })


const express = require('express')
const app = express()
const todoRouter = require('./routes/todo')




require('dotenv').config()
const PORT = process.env.PORT || 3001; // Use the provided port or default to 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});

// setup database 
const mongoURI = process.env.MONGO_URI
const mongoose = require('mongoose')


// connect to mongo 
mongoose.connect(mongoURI)

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));
//app.set("view engine", "ejs");

app.use('/', todoRouter)

app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
//app.use(require("./routes/todo"))

const db = mongoose.connection
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

//Express Route
// app.get('/', (req, res) => {
//    res.send('Ho world!')
// })

//catch all routes
 app.get("*", function(req, res) {
    res.send("<h1>Invalid Page</h1>")
 }) 



app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
