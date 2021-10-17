const express = require("express");
const mysql = require("mysql")
const fs = require('fs');
var cors = require('cors')
const bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"


let rawdata = fs.readFileSync('pass.json');
let data = JSON.parse(rawdata);
console.log(data.emailPass, data.emailUser)


const name = "BloodInfo"

//Mailing information
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: data.emailUser,
    pass: data.emailPass
  }
});



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

//CORS
app.use(cors());

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());



//GET REQUEST
app.get("/api", (req, res) => {
    res.json({ message: "This is the backend. There is no meme." });
  });  


//POST REQUEST
app.post('/info', async function(req, res) {
    await console.log(req.body)
    const credentials = await {
        Name: req.body.username,
        Email: req.body.email,
        Bloodtype: req.body.Bloodtype
    };

    //MAIL
    var mailOptions = await {
        from: data.emailUser,
        to: credentials.Email,
        subject: 'Thank you for subscribing to Blood Society!',
        text: 'Hello '+credentials.Name+'!\n\n You are '+credentials.Bloodtype+' Blood type. Our organization will inform you via mail whenever there is a shorage of'+credentials.Bloodtype+' blood type.\n\nYou have been added to our subscription list! What do you get from this subscription?\n\nYou will get a monthly newsletter on critical news surrounding blood donations, charities to look out for, and so many more opportunities!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        res.send("Email failed to send!")
        } else {
        console.log('Email sent: ' + info.response);
        res.send("Email sent successfully!")
        }
    });
      
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
