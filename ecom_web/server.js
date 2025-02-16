const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const order = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'your_password',
    database : 'your_database_name'
});

order.connect((err)=>{
    if(err){
        console.error('error to connect mySQL', err);
        return;
    }
    console.log("SUCCESS to connect mySQL");
});
app.post('/add-order',(req,res)=>{
    const {Fname,Phone,Mail,Adress,City,Product,Price} = req.body;

    const query = 'INSERT INTO orders (Fname,Phone,Mail,Adress,City,Product,Price) VALUES (?,?,?,?,?,?,?)';
    order.query(query,[Fname,Phone,Mail,Adress,City,Product,Price],(err,result)=>{
        if(err){
            console.error('error to add order', err);
            return;
        }
        res.send('order added');
    }); 
});

app.listen(3000,()=>{
    console.log('server is running on port http://localhost:3000');
})