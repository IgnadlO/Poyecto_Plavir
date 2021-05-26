const pool = require('./modulos/conexion.js');
const auth = {};
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

auth.singUp = async (req, res) => {
	const pass = await bcryptjs.hash(req.body.contra, 8);
	const post = req.body;
	const data = {
		nombre: post.nombre,
		email: post.email,
		contra: pass,
		cumple: post.cumple
	};
	pool.query('INSERT INTO usuarios SET ?', data, (error, row) => {
		if (error) throw error;
		res.redirect('/');
	});
}

auth.singIn = (req, res) => {
	const pass = req.body.contra;
	const nombre = req.body.nombre;
	if(req.session.loggedin != true){
		pool.query('SELECT * FROM usuarios WHERE nombre = ?', nombre, async (error, row) => {
			if (error) throw error;
			if (row.length == 0) res.json('2');
			else if (!(await bcryptjs.compare(pass, row[0].contra))){
				req.session.loggedin = true;
				req.session.name = nombre;
				res.cookie('NombreUsuario', nombre, {expires: new Date(Date.now() + 1555200000)})
				pool.query('SELECT * FROM prendas WHERE propietario = ?', nombre, (error, row) => {
				if (error) throw error;
				res.json(row);
				});
			} 
			else res.json('1');
		})
	} 
	else{
		pool.query('SELECT * FROM prendas WHERE propietario = ?', nombre, (error, row) => {
		if (error) throw error;
		res.json(row);
		});
	}
}

auth.logOut = (req, res) => {
	req.session.destroy();
	res.clearCookie('NombreUsuario');
	res.redirect('/');
}

module.exports = auth;