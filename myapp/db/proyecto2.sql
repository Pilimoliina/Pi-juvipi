CREATE SCHEMA proyectoo2;

USE proyectoo2;

CREATE TABLE usuarios (
/*  nombreColumna       tipoDato        Restricciones */
   id                  INT             UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   nombre              VARCHAR(250)    NOT NULL,
   apellido            VARCHAR(250)    NOT NULL,
   email               VARCHAR(250)    NOT NULL,
   usuario             VARCHAR(250)    NOT NULL,
   contrasenia         VARCHAR(250)    NOT NULL,
   fechaNacimiento     DATE            NOT NULL,
   numeroDocumento     INT             NOT NULL,
   foto                VARCHAR(250)    NOT NULL,
   createdAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ,
   updatedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE productos (
   id                  INT             UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   usuariosId          INT             UNSIGNED,
   nombre              VARCHAR(250)    NOT NULL,
   foto                VARCHAR(250)    NOT NULL,
   descripcion         VARCHAR(800)    NOT NULL,
   createdAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ,
   updatedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  
   FOREIGN KEY (usuariosId) REFERENCES usuarios(id)
  
);


CREATE TABLE comentarios (
   id                  INT             UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   usuariosId          INT             UNSIGNED,
   productosId         INT             UNSIGNED,
   textoComentario     VARCHAR(500)    NOT NULL,
   createdAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ,
   updatedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,


  
   FOREIGN KEY (usuariosId) REFERENCES usuarios(id),
   FOREIGN KEY (productosId) REFERENCES productos(id)
);


/* INSERTANDO USUARIOS */
INSERT INTO usuarios (id, nombre, apellido, email, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt,updatedAt,deletedAt)
VALUES (DEFAULT , "victoria", "maldonado", "mvm@gmail.com", "vicqueen", "***", "2004-09-27", 46240453,"fotoPerfil.png",DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, nombre, apellido, email, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt,updatedAt,deletedAt)
VALUES (DEFAULT , "pilar", "molina", "pili@gmail.com", "pilipro", "***", "2005-02-05", 46211111,"fotoPerfil.png",DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, nombre, apellido, email, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt,updatedAt,deletedAt)
VALUES (DEFAULT , "julia", "dube", "julia@gmail.com", "julita", "***", "2005-06-04", 46340456,"fotoPerfil.png",DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, nombre, apellido, email, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt,updatedAt,deletedAt)
VALUES (DEFAULT , "agustina", "vera", "agus@gmail.com", "agustina", "***", "2005-12-12", 46000000,"fotoPerfil.png",DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, nombre, apellido, email, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt,updatedAt,deletedAt)
VALUES (DEFAULT , "federico", "matz", "fede@gmail.com", "fede", "***", "2004-07-12", 45200450,"fotoPerfil.png",DEFAULT, DEFAULT, DEFAULT);
/* INSERTANDO PRODUCTOS */
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, "celular", "fotoProducto.png", "dispositivo inalámbrico electrónico ", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, "computadora", "fotoProducto.png", "máquina digital programable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, "ipad", "fotoProducto.png", " dispositivo informático móvil en el que la pantalla táctil ocupa casi todo su tamaño", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, "airpods", "fotoProducto.png", "auriculares inalámbricos", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, "apple pencil", "fotoProducto.png", "lapiz para pantalla tactil", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, "tv", "fotoProducto.png", "sistema para la transmisión y recepción de imágenes y sonidos a distancia que simulan movimientos", DEFAULT, DEFAULT, DEFAULT);


INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, "cafetera", "fotoProducto.png", " maquina destinada a la preparación del café y recipiente para servirlo", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, "heladera", "fotoProducto.png", " electrodoméstico que genera frío para posibilitar la conservación de los alimentos y de otros productos.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, "microondas", "fotoProducto.png", " electrodoméstico destinado a cocinar o calentar alimentos ", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos (id, usuariosId, nombre,  foto,  descripcion, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, "air fryer", "fotoProducto.png", "  es un electrodoméstico que te permite cocer o freír los alimentos sin necesidad de sumergirlos en aceite, ", DEFAULT, DEFAULT, DEFAULT);


 /* INSERTANDO COMENTARIOS */
   /* comentarios del  1 */
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, 2, "recomendable", DEFAULT, DEFAULT, DEFAULT);
 INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, 3, " no recomendable", DEFAULT, DEFAULT, DEFAULT);
 INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, 8, "lindo", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, 7, "recomendable", DEFAULT, DEFAULT, DEFAULT);
 INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, 6, " no recomendable", DEFAULT, DEFAULT, DEFAULT);
 INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 1, 5, "lindo", DEFAULT, DEFAULT, DEFAULT);


 
  /* comntarios del   2 */
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, 4, "muy bueno", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, 3, "quiero devolucion", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, 1, "malo", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, 10, "muy bueno", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, 9, "quiero devolucion", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 2, 8, "malo", DEFAULT, DEFAULT, DEFAULT);
   /* comentarios del 3 */
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, 7, "recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, 6, " no recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, 5, "lindo", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, 4, "recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, 2, " no recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 3, 1, "lindo", DEFAULT, DEFAULT,DEFAULT);
   /* comentarios del  4 */
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, 10, "muy bueno", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, 9, "quiero devolucion", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, 8, "malo", DEFAULT, DEFAULT, DEFAULT);
 INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, 7, "muy bueno", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, 6, "quiero devolucion", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 4, 5, "malo", DEFAULT, DEFAULT, DEFAULT);
   /* comentarios del  5 */
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, 4, "recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, 3, " no recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, 2, "lindo", DEFAULT, DEFAULT, DEFAULT);
 INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, 1, "recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, 10, " no recomendable", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, usuariosId, productosId,  textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT , 5, 9, "lindo", DEFAULT, DEFAULT, DEFAULT);






