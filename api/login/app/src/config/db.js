const mysql = require("mysql");
const db=mysql.createConnection({
	host : 'localhost',
	user : "root",
	password : "",
	database : 'key_db',
    port : 3306,
	multipleStatements : true
});

db.connect();
module.exports=db;