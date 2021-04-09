// Update with your config settings.

const fs = require('fs');
let connString = JSON.parse(fs.readFileSync('config.json'))["psql_conn"];

module.exports = {

  development: {
    client: 'postgresql',
    connection: connString
  },


  production: {
    client: 'postgresql',
    connection: connString
  }

};
