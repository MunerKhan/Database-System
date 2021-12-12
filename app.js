const express = require ("express");
const mysql = require("mysql");
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:'./.env'});

/*connectng to a database
**sensitive info stored in another file** 
host: IP Address 
user: database user 
password: user password 
database: name of database to connect to 
*/
const db = mysql .createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:  process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE  
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//grabbing data from the form
app.use(express.urlencoded({extended : false}));
//pasres Jason bodies
app.use(express.json());


app.set('view engine' , 'hbs');

db.connect((error) => { 
    if(error){
        console.log(error)
    } else {
        console.log("MySQL Connected...")
    }
})

//Define routes 
app.use('/', require('./routes/pages'));
app.use('/auth', require ('./routes/auth'));
app.use ('/login', require('./routes/login'));




app.listen(5000, () => {
    console.log("Server started on Port 5000");
})
