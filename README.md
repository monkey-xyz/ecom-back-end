# E-Commerce Back-End

## About the Project

The goal of this project was to create a back-end database and hook it up to a Javascript file through Node using the built-in functions and queries provided by Sequelize.

## Features

Upon seeding and starting the server, the user will be able to view, edit, delete, and create new objects for the database. For the categories and tags, by using the POST function the user can enter in a new name that will be pushed to the respective table. The Product route requires a product_name, price, stock, and tagsId.

All routes are functional, however within the Product and Category create functions is a bug that creates a null value for the respective categories that the Product may have been associated with. This will occur if the category_id of the newly created Product is left blank.

The Category log returns an error, but does successfully get inserted into the table.

## Installation

``db > source schema``

``npm i``

``npm run seed``

``npm start``


## Tools

* Node.js
* Sequelize
* dotenv
* Express.js


## Documentation

[Video Demonstration](https://www.youtube.com/watch?v=VCkeLSahzjw)