const express = require("express");
const mysql = require("mysql")
const fs = require('fs');

let rawdata = fs.readFileSync('pass.json');
let data = JSON.parse(rawdata);



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
  });

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
