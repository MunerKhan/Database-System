const express = require ("express");
const mysql = require("mysql");
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:'./.env'});

const db = mysql .createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:  process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE  
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));


app.set('view engine' , 'hbs');

db.connect((error) => { 
    if(error){
        console.log(error)
    } else {
        console.log("MySQL Connected...")
    }
})

app.get("/", (req,res) => {
 //res.send ("<h1>Home Page</h1>")
 res.render("index")
});


app.listen(5000, () => {
    console.log("Server started on Port 5000");
})