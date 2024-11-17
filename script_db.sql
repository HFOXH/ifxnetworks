CREATE DATABASE ifxnetworks;

USE ifxnetworks;

-- Create the Users table
CREATE TABLE Users (
    UserId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Email VARCHAR(100) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    Role VARCHAR(50) NOT NULL CHECK (Role IN ('User', 'Administrator'))
);

-- Create the Entities table
CREATE TABLE Entities (
    EntityId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    EntityName VARCHAR(100) NOT NULL,
    Description VARCHAR(255) NULL
);

-- Create the Employees table
CREATE TABLE Employees (
    EmployeeId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    DateOfBirth DATE NOT NULL,
    JobTitle VARCHAR(100) NOT NULL,
    EntityId UNIQUEIDENTIFIER,
    CONSTRAINT FK_Employee_Entity FOREIGN KEY (EntityId) REFERENCES Entities(EntityId)
);

INSERT INTO Entities (EntityName, Description)
VALUES 
('TechCorp', 'A leading technology company specializing in software and hardware'),
('GreenEnergy', 'A renewable energy company providing solar and wind solutions');

INSERT INTO Employees (FirstName, LastName, DateOfBirth, JobTitle, EntityId)
VALUES
('Alice', 'Smith', '1990-05-12', 'Software Engineer', 'FC71D0B4-3BA1-4B49-A4B6-C11B50825AEE'),
('Bob', 'Johnson', '1985-07-22', 'Project Manager', '3926BAFE-CB10-4956-A33A-1A4D4423C7CE');

SELECT * FROM Entities;

SELECT * FROM Employees;

SELECT * FROM Users;

--- Use the api to create the users