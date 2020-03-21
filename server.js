const express = require("express");
const db = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);


db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port ", PORT)
    });
});