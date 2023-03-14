-- 1. El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado. --
SELECT Actor.nombre,
    SUM(Elenco.sueldo) as 'Total Ingresos'
FROM Actor,
    Elenco
WHERE Actor.nombre = Elenco.nombre
GROUP BY Actor.nombre
ORDER BY 'Total Ingresos' DESC;
-- 2. El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80 's. -- 
SELECT Estudio.nomestudio,
    SUM(Película.presupuesto) as 'Total Ingresos'
FROM Estudio,
    Película
WHERE Estudio.nomestudio = Película.nomestudio
    AND Película.año >= 2000
    AND Película.año <= 2010
GROUP BY Estudio.nomestudio;
-- 3. Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dólares por película. --
SELECT Actor.nombre,
    AVG(Elenco.sueldo) as 'Sueldo Promedio'
FROM Actor,
    Elenco
WHERE Actor.nombre = Elenco.nombre
    AND Actor.sexo = 'M'
HAVING AVG(Elenco.sueldo) > 5000
GROUP BY Actor.nombre
ORDER BY 'Sueldo Promedio' DESC;
-- 4. Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto). --
SELECT título,
    año,
    presupuesto
FROM Película
WHERE presupuesto = (
        SELECT MIN(presupuesto)
        FROM Película as sub
        WHERE sub.título = Película.título
    );
-- 5. Mostrar el nombre y sueldo de la actriz mejor pagada. --
SELECT Actor.nombre,
    Elenco.sueldo
FROM Actor,
    Elenco
WHERE Actor.nombre = Elenco.nombre
    AND Actor.sexo = 'F'
ORDER BY Elenco.sueldo DESC
LIMIT 1;
-- Productores que han hecho más películas que George Lucas.