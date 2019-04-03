const orm = require("../config/orm");

const song = {
    findAll: function(cb) {
        orm.findAll("songs", (data) => {
            cb(data);
        });
    },
    create: function(recordAsObject, cb) {
        orm.create("songs", recordAsObject, (data) => {
            cb(data);
        });
    }
};

// const mySong = {
//     artist: "David Bowie",
//     title: "Man who sold the world",
//     rating: 9
// };

// song.findAll(data => console.log(data));
// song.create(mySong, data => console.log(data));

module.exports = song;