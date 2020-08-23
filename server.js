//DEPENDENCIES
var express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//SETTING UP EXPRESS
var app = express();

//SETTING INITIAL PORT
var PORT = process.env.PORT || 8080;

// EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//ROUTES 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

