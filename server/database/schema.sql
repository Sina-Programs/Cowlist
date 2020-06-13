-- create database
CREATE DATABASE cows2;

-- use created database
USE cows2;

-- create table on database
CREATE TABLE cowsTable (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cowName VARCHAR(30),
    cowDescription VARCHAR(100),
    cowUrl VARCHAR(200)
)