CREATE DATABASE likeme;
\c likeme;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25),
    url VARCHAR(1000), -- Asegúrate de que este campo sea `url`
    descripcion VARCHAR(255),
    likes INT DEFAULT 0
);


