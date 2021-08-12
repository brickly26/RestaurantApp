const express = require('express');
const path = require("path");

//sets up the express app

const app = express();
const PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(PORT, () => {
  console.log("Server test string")
})