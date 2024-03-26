CREATE DATABASE IF NOT EXISTS traboockdb;

USE traboockdb;

CREATE TABLE IF NOT EXISTS user (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO user (username, email, password) 
VALUES ('nombre_usuario', 'correo@ejemplo.com', 'contraseña');

CREATE TABLE IF NOT EXISTS destinos (
  destino_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  imagen_url VARCHAR(255)
);

INSERT INTO destinos (nombre, descripcion, imagen_url)
VALUES ('Nombre Destino', 'Descripción del destino', 'url_de_la_imagen.jpg');


CREATE TABLE IF NOT EXISTS blog (
  blog_id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  contenido TEXT,
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES user(user_id)
);

INSERT INTO blog (titulo, contenido, usuario_id) 
VALUES ('Título del Blog', 'Contenido del blog', id_del_usuario);

CREATE TABLE IF NOT EXISTS experiencias (
  experiencia_id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  usuario_id INT,
  destino_id INT,
  FOREIGN KEY (usuario_id) REFERENCES user(user_id),
  FOREIGN KEY (destino_id) REFERENCES destinos(destino_id)
);

INSERT INTO experiencias (titulo, descripcion, usuario_id, destino_id) 
VALUES ('Título de la Experiencia', 'Descripción de la experiencia', id_del_usuario, id_del_destino);

