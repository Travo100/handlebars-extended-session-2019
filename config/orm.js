const connection = require("./connection");

const orm = {
    findAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??", [tableName], (err, results) => {
            if(err) {
                throw err;
            }

            cb(results);
        });
    },
    create: function(tableName, recordAsObject, cb) {
        connection.query("INSERT INTO ?? SET ?", [tableName, recordAsObject], (err, results) => {
            if(err) {
                throw err;
            }

            cb(results)
        })
    },
    updateById: function(tableName, recordAsObject, id, cb) {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, recordAsObject, id], (err, results) => {
            if(err) {
                throw err;
            }
            cb(results)
        });
    }
};

// orm.findAll("songs", (data) => {
//     console.log(data);
// });

// const mySong = {
//     artist: "Daft Punk",
//     title: "Something about us",
//     rating: 11,
//     favorite: true
// };

// orm.create("songs", mySong, (data) => {
//     console.log(data);
// });

//orm.updateById("songs", mySong, 4, (data) => console.log(data));




module.exports = orm;