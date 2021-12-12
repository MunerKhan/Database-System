const mysql = require("mysql");


const db = mysql .createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:  process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE  
});


 
exports.login = (req, res) => {
    console.log(req.body);
 
     const {email, password} = req.body;
     console.log(email, password);

     
 
 };
