// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
	host : '127.0.0.1',
	user : 'dmoses',
	password : 'xd',
	database : 'dmgcalc'
	}
  },


  production: {
    client: 'postgresql',
    connection: {
    	host : '127.0.0.1',
	user : 'dmoses',
	password : 'dmoses',
	database : 'dmgcalc'
	}
  }

};
