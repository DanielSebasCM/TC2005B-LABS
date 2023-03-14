-- Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
-- Elenco (título, año, nombre, sueldo)
-- Actor (nombre, dirección, telefono, fechanacimiento, sexo)
-- Productor (idproductor, nombre, dirección, teléfono)
-- Estudio (nomestudio, dirección)
CREATE TABLE Actor (
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    telefono INT NOT NULL,
    fechanacimiento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    PRIMARY KEY (nombre)
);
CREATE TABLE Productor (
    idproductor INT NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    telefono INT NOT NULL,
    PRIMARY KEY (idproductor)
);
CREATE TABLE Estudio (
    nomestudio VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    PRIMARY KEY (nomestudio)
);
CREATE TABLE Película (
    título VARCHAR(30) NOT NULL,
    año INT NOT NULL,
    duracion INT NOT NULL,
    encolor BOOLEAN NOT NULL,
    presupuesto INT NOT NULL,
    nomestudio VARCHAR(30) NOT NULL,
    idproductor INT NOT NULL,
    PRIMARY KEY (título, año),
    FOREIGN KEY (nomestudio) REFERENCES Estudio(nomestudio),
    FOREIGN KEY (idproductor) REFERENCES Productor(idproductor)
);
CREATE TABLE Elenco (
    título VARCHAR(30) NOT NULL,
    año INT NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    sueldo INT NOT NULL,
    FOREIGN KEY (título, año) REFERENCES Película(título, año),
    FOREIGN KEY (nombre) REFERENCES Actor(nombre),
    PRIMARY KEY (título, año, nombre)
);
-- datos
INSERT INTO Actor
VALUES ('Pedro', 'Calle 1', 123456, '1990-01-01', 'M');
INSERT INTO Actor
VALUES ('Juan', 'Calle 2', 123456, '1990-01-01', 'M');
INSERT INTO Actor
VALUES ('Maria', 'Calle 3', 123456, '1990-01-01', 'F');
INSERT INTO Actor
VALUES ('Ana', 'Calle 4', 123456, '1990-01-01', 'F');
INSERT INTO Actor
VALUES ('Luis', 'Calle 5', 123456, '1990-01-01', 'M');
INSERT INTO Actor
VALUES ('Jose', 'Calle 6', 123456, '1990-01-01', 'M');
INSERT INTO Actor
VALUES ('Luisa', 'Calle 7', 123456, '1990-01-01', 'F');
INSERT INTO Productor
VALUES (1, 'Mario', 'Calle 1', 123456);
INSERT INTO Productor
VALUES (2, 'Juan', 'Calle 2', 123456);
INSERT INTO Productor
VALUES (3, 'Pedro', 'Calle 3', 123456);
INSERT INTO Productor
VALUES (4, 'Ana', 'Calle 4', 123456);
INSERT INTO Productor
VALUES (5, 'Luis', 'Calle 5', 123456);
INSERT INTO Estudio
VALUES ('Estudio 1', 'Calle 1');
INSERT INTO Estudio
VALUES ('Estudio 2', 'Calle 2');
INSERT INTO Estudio
VALUES ('Estudio 3', 'Calle 3');
INSERT INTO Estudio
VALUES ('Estudio 4', 'Calle 4');
INSERT INTO Película
VALUES (
        'Pelicula 1',
        2010,
        120,
        TRUE,
        10000,
        'Estudio 1',
        1
    );
INSERT INTO Película
VALUES (
        'Pelicula 1',
        2014,
        120,
        TRUE,
        13000,
        'Estudio 1',
        1
    );
INSERT INTO Película
VALUES (
        'Pelicula 2',
        2000,
        140,
        TRUE,
        20000,
        'Estudio 2',
        3
    );
INSERT INTO Película
VALUES (
        'Pelicula 3',
        2008,
        130,
        TRUE,
        100000,
        'Estudio 3',
        4
    );
INSERT INTO Película
VALUES (
        'Pelicula 4',
        2005,
        150,
        TRUE,
        130000,
        'Estudio 4',
        2
    );
INSERT INTO Elenco
VALUES ('Pelicula 1', 2010, 'Pedro', 1000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2010, 'Juan', 2000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2010, 'Maria', 3000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2010, 'Ana', 4000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2010, 'Luis', 5000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2014, 'Luis', 2000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2014, 'Jose', 3000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2014, 'Luisa', 4000);
INSERT INTO Elenco
VALUES ('Pelicula 1', 2014, 'Maria', 5000);
INSERT INTO Elenco
VALUES ('Pelicula 2', 2000, 'Pedro', 1000);
INSERT INTO Elenco
VALUES ('Pelicula 2', 2000, 'Juan', 2000);
INSERT INTO Elenco
VALUES ('Pelicula 2', 2000, 'Maria', 3000);
INSERT INTO Elenco
VALUES ('Pelicula 2', 2000, 'Ana', 4000);
INSERT INTO Elenco
VALUES ('Pelicula 2', 2000, 'Luis', 5000);
INSERT INTO Elenco
VALUES ('Pelicula 3', 2008, 'Pedro', 1000);
INSERT INTO Elenco
VALUES ('Pelicula 3', 2008, 'Juan', 2000);
INSERT INTO Elenco
VALUES ('Pelicula 3', 2008, 'Maria', 3000);
INSERT INTO Elenco
VALUES ('Pelicula 3', 2008, 'Ana', 4000);
INSERT INTO Elenco
VALUES ('Pelicula 3', 2008, 'Luis', 5000);
INSERT INTO Elenco
VALUES ('Pelicula 4', 2005, 'Pedro', 1000);
INSERT INTO Elenco
VALUES ('Pelicula 4', 2005, 'Juan', 2000);
INSERT INTO Elenco
VALUES ('Pelicula 4', 2005, 'Maria', 3000);
INSERT INTO Elenco
VALUES ('Pelicula 4', 2005, 'Ana', 4000);
INSERT INTO Elenco
VALUES ('Pelicula 4', 2005, 'Luis', 5000);