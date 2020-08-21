//DEPENDENCIES
var express = require("express");

//SETTING UP EXPRESS
var app = express();

//SETTING INITIAL PORT
var PORT = process.env.PORT || 8080;

// EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//ROUTES 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

