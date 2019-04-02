const connection = require("./connection");

const orm = {
    findAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??", [tableName], (err, results) => {
            if(err) {
                return res.status(500).json(err);
            }

            cb(results);
        });
    },
    create: function(tableName, recordAsObject, cb) {
        connection.query("INSERT INTO ?? SET ?", [tableName, recordAsObject], (err, results) => {
            if(err) {
                return res.status(500).json(err);
            }

            cb(results)
        })
    }
};

// orm.findAll("songs", (data) => {
//     console.log(data);
// });

// const mySong = {
//     artist: "Daft Punk",
//     title: "SOmething about us",
//     rating: 10
// };

// orm.create("songs", mySong, (data) => {
//     console.log(data);
// });


module.exports = orm;