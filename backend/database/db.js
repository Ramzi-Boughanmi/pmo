const mysql = require('mysql');

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'users'
});

connection.connect(err =>{
    if (err) throw err;
    console.log('Connected to mysql database');
});
/*azdazd*/

module.exports = connection;