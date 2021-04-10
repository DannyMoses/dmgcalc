var express = require('express');
var router = express.Router();

const fs = require('fs');
let connString = JSON.parse(fs.readFileSync(__dirname + '/../config.json'))["psql_conn"];

const knex = require('knex')({
	client : 'pg',
	connection : connString
})

const baseQuery = knex('units');
const queryRegex = /^<=|>=|<|>$/;
const numRegex = /\d+/g;

const filterBasedOnNumber = (field, symbol, number) => {
	return (query) => {
		return query.where(field, symbol, number);
	};
};

router.get('/', function (req, res) {
	if(req.query.q) {
		if (!(typeof req.query.q === 'string' || req.query.q instanceof String)) {
			console.log('error - not a string');
			return;
		}
		console.log(req.query.q);
		knex.select('*').from('units').where({name : req.query.q}).then (data => {
			console.log(data);
			res.send(data);
		})
		return;
	}

	if (req.query) {
		console.log(req.query);
		knex.select('*').from('units').where((builder) => {
			for (const key in req.query) {
				if (req.query[key].match(queryRegex)) {
					console.log('number!');
					console.log(key, req.query[key].match(queryRegex)[0], req.query[key].match(numRegex)[0]);
					builder.where(key, req.query[key].match(queryRegex)[0], req.query[key].match(numRegex)[0]);
				} else {
					console.log('word!')
					console.log(key, req.query[key]);
					builder.where(key, req.query[key]);
				}
			}
		}).then(data => {
			console.log(data);
			res.send(data);
		});
		return;
	}

	knex.select('*').from('units').then(data => {
		console.log(data);
		res.send(data);
	});
})




module.exports = router;
