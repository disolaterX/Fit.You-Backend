var express = require("express");
var router = express.Router();
var db = require("../db");
var bodyParser = require("body-parser");

router.use(bodyParser.json());
/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(req.query);
  if(req.query.uid&&req.query.name && req.query.email){
        var createNew = 'SELECT * from fityouaccount'
        db.query(createNew, (err, data) => {
          if(err){
            res.json(err)
            console.log(err);
            
          }
          else {
            res.json(data)
          }
        })
      }
 
});
router.get("/retrive/:id", function(req, res, next) {
  console.log(req.params.id);
  // var id = req.params.id;
  // var sql = "SELECT * FROM useraccount WHERE uid = " + id;
  // db.query(sql, (err, data) => {
  //   console.log("Error :-");
  //   console.log(err);
  //   console.log("");
  //   console.log("Result :-");
  //   console.log(data.rowCount);
  //   console.log(data.rows);
  //   res.json(data.rows);
  // });
});

//   "SELECT * FROM useraccount",
// "INSERT INTO useraccount (uid,fullname,email,created_on,last_login) VALUES (8878,'Kartik','disolater.kartik@gmail.com',NOW(),NOW());",
// "CREATE TABLE useraccount(uid VARCHAR PRIMARY KEY,email VARCHAR (355) UNIQUE ,password VARCHAR (355),created_on TIMESTAMP NOT NULL,last_login TIMESTAMP);",

module.exports = router;
