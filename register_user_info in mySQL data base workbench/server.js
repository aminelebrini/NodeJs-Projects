const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'your_password',
    database : 'your_database_name'
});

con.connect((err)=>{
    if(err){
        console.error('Error connecting to database:', err);
    }
    console.log('connected to register database');
});

app.post('/add-user', (req,res)=>{
    const {NAME,EMAIL} = req.body;

    const query = 'INSERT INTO value (NAME, EMAIL) VALUES (?, ?)';
    con.query(query,[NAME, EMAIL], (err, result)=>{
        if(err){
            console.error('Error details:', err);
        }
        console.log('USER HAS BENNE ADDED!');
    });
});

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});
