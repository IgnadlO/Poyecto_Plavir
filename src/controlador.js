const controlador = {};
const pool = require('./modulos/conexion.js');
const path = require('path');
const fs = require('fs');

controlador.inicio = (req, res) => res.render('index.html');
controlador.info = (req, res) => res.render('info.html');
controlador.singUp = (req, res) => res.render('singUp.html');
controlador.miPlacard =(req, res) => {
	let nombre = (req.session.loggedin)? req.session.name : 'false';
	res.render('miPlacard.html', {
		nombre
	});
}
controlador.subirPrendas = (req, res) => {
	const nombre = req.session.name;
	res.render('subirPrendas.html', {nombre});
}
controlador.subirPrendasDB = (req, res) => {
const fileDir = 'uploads/' + req.file.filename;
const data = req.body;
data.moda = (data.moda == 'on')? true: false;
data.direccion = fileDir;
pool.query('INSERT INTO prendas SET ?', data, (error, row) => {
	if (error) throw error;
	res.redirect('/subirPrendas');
});
}

module.exports = controlador;