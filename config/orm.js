// Functions for database interaction
const orm = {
    selectAll: function () {
        const queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log(`Here are your burgers:\n${res}`)
        });
    },
    //OnClick function for adding in the burgers
    insertOne: function () {
        const queryString = `INSERT INTO burgers (burgerName, devoured) VALUES (${"this will be the value of the input field"}, ${false})`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log(`${res.burgerName} burger added!`)
        });
    },
    //OnClick function for devoured button
    updateOne: function () {
        const queryString = `UPDATE burgers SET devoured = true;`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log(`${res.burgerName} burger added!`)
        });
    }
}








module.exports = orm;