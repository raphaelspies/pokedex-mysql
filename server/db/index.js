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

  getAll: (callback) => {
    var queryStr = `SELECT * FROM pokemon INNER JOIN images ON pokemon.id = images.id INNER JOIN types ON pokemon.typeNum = types.id`
    connection.query(queryStr, (error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }

}

