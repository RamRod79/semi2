# SEMI

## Description

A short description explaining the what, why, and how of project "E-commerce Back End":

An application called "E-commerce Back End" builds the back end for an e-commerce site. The application uses Express.js API and configures it to use Sequelize to interact with a MySQL database.

A walkthrough video demonstrates its functionality and all of the following acceptance criteria being met. A link to the video is located below under the URL section.

## User Story

AS A manager at an internet retail company

I WANT a back end for my e-commerce website that uses the latest technologies

SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database


## Installation

Pulling the GitHub repository from the follwing URL: https://github.com/RamRod79/E-commerce.git and typing the follwoing command ,'npm install', in the terminal will ensure the dependencies are installed and the program can run properly.

- Download and run mysql server.

- Download the repository to your own local machine and run it from your command line.

- Run ```npm i``` or ```npm install``` in order to download all the dependencies.

- MySQL instructions to create your tables:

        - Enter ```mysql -u root -p``` in the terminal window.
        - Enter your mysql password. 
        - Create database by entering ```CREATE DATABASE ecommerce_db;``` and enter.
        - Then enter ```SHOW databases;```.
        - To use the ecommerce database; enter ```USE ecommerce_db;```.
        - In order to use your .sql files enter ```source db/schema.sql;``` and enter.
        - Exit MySQL by entering ```quit;```.
  
  Run ```node run start``` in your terminal to start.

  Open Insomnia to run through the various API routes.

## Usage

![Screenshot of app being used.](./assets/images/Screenshot01.jpg)
![Screenshot of app being used.](./assets/images/Screenshot02.jpg)

## Credits

List of collaborators:

- UCLA Extension, Coding Bootcamp Instructor and TAs

## License

The following licenses have been used in the development of this project:

[![License](https://img.shields.io/badge/License-MIT-success)](https://opensource.org/licenses/MIT)

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
![License: MIT](https://img.shields.io/badge/License-MIT-success)

## Repo Features

Using this repo can be initiated by running 'npm run Start' in the command terminal after opening the integrated terminal to initiate the program. Using this repo requires express and sequelize, and updated node modules to ensure application runs properly.

## How to Contribute

If other developers would like to contribute, you can contact me at armando.rod79@gmail.com.

## URL
GitHub: https://github.com/RamRod79/Ecommerce.git

video: https://drive.google.com/

## Contact Info

For any other issues or comments please contact me at:

GitHub username: RamRod79

Email: armando.rod79@gmail.com