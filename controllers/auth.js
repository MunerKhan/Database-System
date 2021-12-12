const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const bcrypt = require('bcryptjs');


const db = mysql .createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:  process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE  
});


exports.register = (req, res) => {
   console.log(req.body);

    /*
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.bod.passwordConfirm;
    
    same as line below 
    */
    const {name, email, password, passwordConfirm} = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) =>{
      if(error){
          console.log(error);
        } 

      if(results.length > 0) {
            return res.render('register', {
            message: 'Email alreday in use'
          })
        }else if (password !== passwordConfirm ){
                return res.render('register',{
                message: 'Passwords do not match '
          });
       }
       let hashedPassword = await bcrypt.hash(password, 8);
    
    
       //  console.log(hashedPassword);
     
       db.query('INSERT INTO users SET ?',{name: name, email: email, password: password },(error, results) =>{
        if(error){
            console.log(error);
          }else {
            return res.render('register', {
                message: 'User Registered'
            });

          } 

       } )



    });




    

};


