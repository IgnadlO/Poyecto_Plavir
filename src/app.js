const express = require('express');
const app = express();
const path = require('path');
const rutas = require('./rutas.js');
require('dotenv').config({path: '.env.default'});

//configuracion
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//sesiones de usuario
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Tallern4',
	database: 'prueba_session'
}
var sessionStore = new MySQLStore(options);
app.use(session({
	key: 'session_cookie',
	secret: 'Peron',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

//middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//rutas
app.use('/', rutas);
app.use((req, res, next) => {
	res.status(404).render('404.html')
});

app.listen(app.get('port'), (err, res) => {
	console.log('Servidor ON', app.get('port'));
});