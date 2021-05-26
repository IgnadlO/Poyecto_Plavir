const express = require('express');
const rutas = express.Router();
const cont = require('./controlador.js');
const auth = require('./auth.js');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: './src/public/uploads/',
	filename: function(req, file, cb){
		cb('',Date.now() + '.png');
	}
});

const upload = multer({
	storage: storage
});

rutas.get('/', cont.inicio);
rutas.get('/info', cont.info);
rutas.get('/singUp', cont.singUp);
rutas.get('/miPlacard', cont.miPlacard);
rutas.get('/subirPrendas', verifyCookie, cont.subirPrendas);
rutas.get('/logOut', auth.logOut);

rutas.post('/singUp', auth.singUp);
rutas.post('/singIn', auth.singIn);
rutas.post('/subirPrendas', upload.single('imagen'),cont.subirPrendasDB);


function verifyCookie(req, res, next){
	if(req.session.loggedin) next();
	else{
		res.send(`
			<style type="text/css">
			*{
				background: black;
				color:white;
			}
			p,a {
				font-size: 20px;
			}
			</style>
			<h1>Usted no esta loggeado</h1>
			<p>Para poder subir una nueva prenda antes debe iniciar sesion</p>
			<a href="/miPlacard">ir al Placard</a><br>
			<a href="/">Ir al inicio</a>
		`)
	}
}


module.exports = rutas;