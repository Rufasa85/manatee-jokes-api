var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var allRoutes = require('./controllers');
const path = require("path")
const cors = require("cors")

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


app.use('/',allRoutes);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"));
})


db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});