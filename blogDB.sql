CREATE SCHEMA doc;

CREATE TABLE doc.roles (
  rolId INTEGER PRIMARY KEY,
  rol VARCHAR
);

CREATE TABLE doc.usuarios (
  usuarioId INTEGER PRIMARY KEY,
  rolId INTEGER,
  nombreUsuario VARCHAR,
  clave VARCHAR,
  nombre VARCHAR,
  apellido VARCHAR,
  CONSTRAINT fk_usuarios_roles FOREIGN KEY (rolId) REFERENCES doc.roles (rolId)
);

CREATE TABLE doc.publicaciones (
  publicacionId INTEGER PRIMARY KEY,
  titulo VARCHAR,
  descripcion VARCHAR,
  usuarioId INTEGER,
  CONSTRAINT fk_publicaciones_usuarios FOREIGN KEY (usuarioId) REFERENCES doc.usuarios (usuarioId)
);

CREATE TABLE doc.comentarios (
  comentarioId INTEGER PRIMARY KEY,
  publicacionId INTEGER,
  comentario VARCHAR,
  usuarioId INTEGER,
  CONSTRAINT fk_comentarios_publicaciones FOREIGN KEY (publicacionId) REFERENCES doc.publicaciones (publicacionId),
  CONSTRAINT fk_comentarios_usuarios FOREIGN KEY (usuarioId) REFERENCES doc.usuarios (usuarioId)
);

CREATE TABLE doc.calificaciones (
  calificacionId INTEGER PRIMARY KEY,
  publicacionId INTEGER,
  usuarioId INTEGER,
  calificacion INTEGER,
  CONSTRAINT fk_calificaciones_publicaciones FOREIGN KEY (publicacionId) REFERENCES doc.publicaciones (publicacionId),
  CONSTRAINT fk_calificaciones_usuarios FOREIGN KEY (usuarioId) REFERENCES doc.usuarios (usuarioId)
);

INSERT INTO doc.roles (rolId, rol) VALUES
(1, 'Administrador'),
(2, 'Editor'),
(3, 'Usuario');

INSERT INTO doc.usuarios (usuarioId, rolId, nombreUsuario, clave, nombre, apellido) VALUES
(1, 1, 'admin01', 'clave123', 'Carlos', 'Ramírez'),
(2, 2, 'editor01', 'clave456', 'María', 'López'),
(3, 3, 'user01', 'clave789', 'Juan', 'Pérez'),
(4, 3, 'user02', 'clave321', 'Ana', 'Martínez');

INSERT INTO doc.publicaciones (publicacionId, titulo, descripcion, usuarioId) VALUES
(1, 'Primera publicación', 'Este es el contenido de la primera publicación.', 2),
(2, 'Segunda publicación', 'Contenido interesante sobre bases de datos.', 2),
(3, 'Post de usuario', 'Publicación realizada por un usuario normal.', 3);

INSERT INTO doc.comentarios (comentarioId, publicacionId, comentario, usuarioId) VALUES
(1, 1, 'Muy buena publicación.', 3),
(2, 1, 'Gracias por la información.', 4),
(3, 2, 'Tengo una duda sobre el tema.', 3),
(4, 3, 'Buen aporte.', 2);

INSERT INTO doc.calificaciones (calificacionId, publicacionId, usuarioId, calificacion) VALUES
(1, 1, 3, 5),
(2, 1, 4, 4),
(3, 2, 3, 3),
(4, 2, 1, 5),
(5, 3, 4, 4);

SELECT * FROM doc.usuarios 
SELECT * FROM doc.comentarios
SELECT * FROM doc.publicaciones



