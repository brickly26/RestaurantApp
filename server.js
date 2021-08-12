const express = require('express');
const path = require("path");

//sets up the express app

const app = express();
const PORT = process.env.PORT || 3000;

//data 
const tables = [];

const waitingList = [];

// sets up the express app to handle data parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routing to http to homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

// routing to http to setup reservations 
app.get("/reservations", (req, res) => {
  res.sendFile(path.join(__dirname, "reservations.html"))
})

// post new reservations to table or waiting list (post)

// routing to api table (get)
app.get("/tables", (req, res) => {
  res.json(tables)
})

// routing to api waiting list (get)
app.get("/waitingList", (req, res) => {
  res.json(waitingList)
})

app.listen(PORT, () => {
  console.log("Server test string")
})