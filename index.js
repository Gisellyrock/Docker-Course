const express = require('express');
var mysql = require('mysql2');

const app = express();
const port = 3000;

var connection = mysql.createConnection({
  host: 'giselly-mysql',
  user: 'root',
  password: 'segredo',
  database: 'giselly_db',
  port: 3306,
});

connection.connect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  connection.query('SELECT * from produtos', function (error, results, fields) {
    if (error) throw error;
    res.send(`${results[0].name} - ${results[1].name}`);

    connection.end();
  });
});

app.removeListener(port, () => {});
