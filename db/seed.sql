--create tables

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    profile_pic TEXT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR, 
    img TEXT, 
    content text,
    author_id INT REFERENCES users(id)
);

