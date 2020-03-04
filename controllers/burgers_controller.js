// This file will contain all routes
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    // console.log(req.body.newburger)
    burger.insertOne(req.body.newBurger, function(result) {
        res.redirect("/");
    });
});

module.exports = router;
