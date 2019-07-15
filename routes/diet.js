var express = require("express");
var router = express.Router();
var db = require("../db");
var bodyParser = require("body-parser");

router.use(bodyParser.json());
/* GET home page. */
router.get("/dontdo", function(req, res, next) {
  console.log(req.query);
  // var createNew = `DROP TABLE useraccount`
  // var createNew = "CREATE TABLE fityouaccount(uid VARCHAR PRIMARY KEY,name VARCHAR,email VARCHAR (355) UNIQUE ,created_on TIMESTAMP NOT NULL,last_login TIMESTAMP);"
  // db.query(createNew, (err, data) => {
  //   console.log(data);
  //   console.log(err);
    
    
  })
});
// router.get("/retrive/:id", function(req, res, next) {
//   console.log(req.params.id);
//   // var id = req.params.id;
//   // var sql = "SELECT * FROM useraccount WHERE uid = " + id;
//   // db.query(sql, (err, data) => {
//   //   console.log("Error :-");
//   //   console.log(err);
//   //   console.log("");
//   //   console.log("Result :-");
//   //   console.log(data.rowCount);
//   //   console.log(data.rows);
//   //   res.json(data.rows);
//   // });
// });

//   "SELECT * FROM useraccount",
// "INSERT INTO useraccount (uid,fullname,email,created_on,last_login) VALUES (8878,'Kartik','disolater.kartik@gmail.com',NOW(),NOW());",
// "CREATE TABLE useraccount(uid VARCHAR PRIMARY KEY,email VARCHAR (355) UNIQUE ,password VARCHAR (355),created_on TIMESTAMP NOT NULL,last_login TIMESTAMP);",

module.exports = router;
