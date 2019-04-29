var bodyParser = require("body-parser");
var app = require("express")();
var MongoClient = require("mongodb").MongoClient;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) throw err;
  var db = client.db("loginsystem");
  app.get("/", function(req, res, next) {
    res.render("login", {});
  });
  app.get("/login", function(req, res, next) {
    res.render("login", {});
  });
  app.get("/login", function(req, res, next) {
    res.render("login", {});
  });
  app.post("/result", (req, res) => {
    db.collection("MST_Employee").findOne(
      {
        user: req.body.txtuser,
        password: req.body.txtpass
      },
      (err, result) => {
        if (err) return res.status(500).send(err.toString());
        if (result) {
          res.render("result", {
            doctype: result.doctype
          });
        } else {
          res.render("login", {});
        }
      }
    );
  });
  app.listen(3000, () => {
    console.log("  App is running at http://localhost:3000");
  });
});
module.exports = app;
