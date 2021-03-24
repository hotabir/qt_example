const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Gjtp4eADj90',
  database: 'qt_example'
});
module.exports = connection;