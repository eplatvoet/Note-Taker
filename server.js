//DEPENDENCIES
var express = require("express");

//SETTING UP EXPRESS
var app = express();

//SETTING INITIAL PORT
var PORT = process.end.PORT || 8080;

// EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTES 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

