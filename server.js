
// // IMPORTS
// const express = require('express')
// const mongoose = require('mongoose')
// const app = express()


// require('dotenv').config()

// const PORT = process.env.PORT || 3000


// // setup database 

// const mongoURI = process.env.MONGO_URI
// mongoose.connect(mongoURI)

// const db = mongoose.connection




// //const db = mongoose.connection
// // optional create status messages to check mongo connection 
// db.on('error', (err) => { console.log('ERROR: ' , err)})
// db.on('connected', () => { console.log('mongo connected')})
// db.on('disconnected', () => { console.log('mongo disconnected')})

// app.get('/', (req, res) => {
//    res.send('Hello world!')
// })

// app.listen(PORT, () => {
//     console.log(`Server is listening on PORT: ${PORT}`)
//})

// IMPORTS
const express = require('express')
const mongoose = require('mongoose')
const app = express()


require('dotenv').config()
const PORT = process.env.PORT || 3000

// setup database 
const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/index"))
app.use(require("./routes/todo"))
const db = mongoose.connection
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})
app.get('/', (req, res) => {
   res.redirect('/')
})
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})