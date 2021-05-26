const mysql = require('mysql');
require('dotenv').config({path: '.env.default'});

const conexion = {
	host: 'localhost',
	database: 'plavir',
	user: process.env.DB_USER,
	password: process.env.DB_PASS
}

const pool = mysql.createPool(conexion);
module.exports = pool;