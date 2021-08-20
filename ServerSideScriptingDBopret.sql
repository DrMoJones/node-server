Use master
DROP DATABASE IF EXISTS SSprog;
CREATE DATABASE SSprog;

USE SSprog;
CREATE TABLE Persons (
	[Name] varchar(max),
	Birthdate DateTime,
	Email nvarchar(50)
);

INSERT INTO Persons([Name], Birthdate, Email)
VALUES ('Julie M. Kjeldsen', 13-02-1982, 'JulieMKjeldsen@armyspy.com');
INSERT INTO Persons([Name], Birthdate, Email)
VALUES ('Clara P. Laursen', 23-08-1939, 'ClaraPLaursen@rhyta.com');
INSERT INTO Persons([Name], Birthdate, Email)
VALUES ('Dennis M. Brandt', 23-07-1989, 'DennisMBrandt@armyspy.com');
INSERT INTO Persons([Name], Birthdate, Email)
VALUES ('Lucas A. Klausen', 14-11-1966, 'LucasAKlausen@teleworm.us');