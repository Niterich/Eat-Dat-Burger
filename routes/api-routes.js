const db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
      
    db.Burger.findAll()
    .then(function (results) {
    
      const burgerObj = {burgers:results.map(results => results.toJSON())};

      res.render("index", burgerObj);
    })
  });

  app.post("/api/burgers", function(req, res){
      const r = req.body;
      db.Burger.create(
      {
        burger_name: r.burger_name
      },
      {
        where:
        {
          id: r.id
        }
      }
      )
      .then(function(Burger){
        res.json(Burger);
      })
      .catch(function(err){
        res.json(err);
      })
  });

  app.put("/api/burgers/:id", function(req, res){
      
      db.Burger.update(
        {
          devoured: req.body.devoured
        },
        {
          where:
          {
            id: req.params.id
          }
        }
      )
      .then(function(Burger){
        res.json(Burger);
      })
      .catch(function(err){
        res.json(err);
      })
    });

};