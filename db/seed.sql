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

--dummy data

INSERT INTO users (username, profile_pic)
VALUES ('fred', 'fred'),
('fred2', 'fred2'),
('fred3', 'fred3');

INSERT INTO posts (title, img, content, author_id)
VALUES 
('title', 'https://cdn2.hubspot.net/hubfs/208250/Blog_Images/postman.jpg', 'content', 1),
('title2', 'https://cdn2.hubspot.net/hubfs/208250/Blog_Images/postman.jpg', 'content2', 2),
('title3', 'https://cdn2.hubspot.net/hubfs/208250/Blog_Images/postman.jpg', 'content3', 3),
('title4', 'https://cdn2.hubspot.net/hubfs/208250/Blog_Images/postman.jpg', 'content4', 4);
