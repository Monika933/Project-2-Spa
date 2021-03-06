// *** Dependencies =============================================================
var express = require("express");
var multer = require("multer");
var ejs = require("ejs");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static("nodules/bootstrap/dist"));

// Routes ====================================================================================================

var htmlRoutes = require("./routes/html-routes.js");
var clients = require("./routes/clients-api-routes.js");
var appointments = require("./routes/appointments-api.js");

app.use(htmlRoutes);
app.use(clients);
app.use(appointments);

// Initialize the Express app =====================================================================================================

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
