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
const properties = ["health", "name", "dexterity", "agility", "strength", "luck", "devotion", "skill", "fortitude", "class", "alignment"];
const notInPropertiesError = { "status" : "ERROR", "message" : "attributes not in list of valid properties" };

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
		for (const key in req.query) {
			if (!(key in properties)) {
				res.send(notInPropertiesError);
				return;
			}
		}
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


router.post('/', function(req, res) {
	console.log(req.body);
	var keys = Object.keys(req.body);
	var badInput = false;
	keys.forEach(k => {
		if (properties.indexOf(k) === -1) {
			console.log("ERROR", k);
			res.json(notInPropertiesError);
			badInput = true;
			return;
		}
	})
	
	if (badInput) {
		return;
	}

	knex('units').insert(req.body).catch(error => {
		//console.log(error);
		res.json({"status" : "ERROR" , "message" : "SQL Failure"});
		return Promise.reject('error');
	}).then((result) => {
		// console.log('running then()');
		// onsole.log(result);
		res.send({ "status" : "SUCCESS", "inserted" : req.body});
	}).catch(error => {
		console.log("One of more errors occured");
	});

})

router.put('/:name', function(req, res) {
	console.log("params", req.params);
	console.log("body", req.body);
	var badInput = false;
	var keys = Object.keys(req.body);
	keys.forEach(k => {
		if (properties.indexOf(k) === -1) {
			console.log("ERROR", k);
			res.json(notInPropertiesError);
			badInput = true;
			return;
		}
	})

	if(badInput) {
		return;
	}

	var query = {};
	query['name'] = req.params['name'];
	keys.forEach(k => {
		query[k] = req.body[k];
	})
	console.log('query', query);
	
	knex('units').where({name : req.params['name']}).update(query).then((result) => {
		console.log(result);
		res.send({"status" : "SUCCESS"});
	}).catch(error => {
		res.send({"status" : "ERROR", "message" : "an error occurred"});
	})

})

router.delete('/:name', function(req, res) {
	knex('units').where({name : req.params['name']}).del().then((result) => {
		res.send({"status" : "SUCCESS"});
	}).catch(error => {
		res.send({"status" : "ERROR", "message" : "an error occurred"});
	});
})

module.exports = router;
