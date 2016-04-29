'use strict';

var mysql = require('mysql');

var db = mysql.createConnection(process.env.JAWSDB_URL || {
  host:       'localhost',
  user:       'root',
  password:   'Zoolander',
  database:   'BankingApp'
});

db.connect();


module.exports = db;
