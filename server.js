const express = require('express');
const app = express();
const router = express.Router(); // Define the router

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// setup database 
const mongoURI = process.env.MONGO_URI;
const mongoose = require('mongoose');

// connect to mongo 
mongoose.connect(mongoURI);

// routes
app.use('/', router); // Use the router

// Middleware should come after defining the router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(require("./routes/index"));

const db = mongoose.connection;
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ', err) });
db.on('connected', () => { console.log('mongo connected') });
db.on('disconnected', () => { console.log('mongo disconnected') });

// catch all routes
app.get("*", function (req, res) {
  res.send("<h1>Invalid Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

module.exports = router; // Export the router

