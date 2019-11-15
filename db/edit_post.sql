
UPDATE posts
SET title = ${title}
WHERE title = ${id};

UPDATE posts
SET img = ${image}
WHERE title = ${id};

UPDATE posts
SET content = ${content}
WHERE title = ${id};


SELECT * FROM posts
ORDER BY id;