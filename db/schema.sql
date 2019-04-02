DROP DATABASE IF EXISTS music_db;
CREATE DATABASE music_db;

USE music_db;

CREATE TABLE songs (
	id INT AUTO_INCREMENT,
    artist VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    rating INTEGER(2),
    favorite BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);

INSERT INTO songs (artist, title, rating) VALUES ("OutKast", "B.0.B", 10);
INSERT INTO songs (artist, title, rating) VALUES ("The Beatles", "Hey Jude", 9);
INSERT INTO songs (artist, title, rating) VALUES ("Cardi B", "Please Me", 5);

SELECT * FROM songs;