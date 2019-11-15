-- UPDATE users
-- SET password = ${password}
-- WHERE username =${username};

-- UPDATE users 
-- SET profile_pic = ${profile_pic}
-- WHERE username =${username};

-- SELECT * FROM users
-- WHERE username = ${username}
-- -- WHERE username = 'fred2'
-- ORDER BY id;

INSERT INTO users (username, profile_pic)
VALUES ( ${username}, ${profile_pic} )
-- SELECT * FROM users;
RETURNING id;