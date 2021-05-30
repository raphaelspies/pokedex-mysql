// TODO: Establish connection to mysql database
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pokedex'
});

connection.connect();

module.exports = {

  getAll: () => {
    connection.query()

  }

}

