const express = require("express");
const mysql = require("mysql")
const fs = require('fs');

let rawdata = fs.readFileSync('pass.json');
let data = JSON.parse(rawdata);

const name = "BloodInfo"

//DB CONNECTION
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: data.pass,
    database: name
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
  
    //CREATE DATABASE
    con.query("CREATE DATABASE IF NOT EXISTS "+ name, function (err, result) {
        if (err) throw err;
        console.log("Database "+name+" created");
      });
    
    const tableName = "visitor"
    var sql = "CREATE TABLE IF NOT EXISTS "+tableName+" (name VARCHAR(255), email VARCHAR(255), bloodType VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table "+tableName+" created");
    }
  );
});





const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "This is the backend. There is no meme." });
  });  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
