// Functions for database interaction
const connection = require("./connection.js")
const orm = {
    selectAll: function (cb) {
        const queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //OnClick function for adding in the burgers
    insertOne: function (burgerName, cb) {
        const queryString = `INSERT INTO burgers (burgerName, devoured) VALUES (?, ?)`;
        connection.query(queryString, [burgerName, false], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //OnClick function for devoured button
    updateOne: function (burgerName, cb) {
        const queryString = `UPDATE burgers SET devoured = true WHERE burgerName = ${burgerName};`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;