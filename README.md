# Employee-Management-API

This is a simple RESTful API that uses Node.js, Express and MongoDB to perform CRUD operations on a collection of employees in a database.

# Installation
To run this project, you need to have Node.js, Express and MongoDB installed on your machine.
You also need to clone this repository and install the dependencies using npm.
```
git clone <repo link>
npm install
node server.js
```
The server will listen on port 3000 by default. You can change this by editing the app.js file.

# You can use any HTTP client such as Postman or curl to interact with the API. The API exposes the following endpoints:
* `POST` `/employees`: Creates a new employee in the database using the data from the request body as JSON.
* `GET` `/employees`: Returns a list of all employees in the database as JSON.
* `GET` `/employees/:id`: Returns a single employee by ID as JSON.
* `PUT` `/employees/:id`: Updates an existing employee by ID using the data from the request body as JSON.
* `DELETE` `/employees/:id`: Deletes an existing employee by ID from the database.

# The employee schema is defined as follows:
```
{
  "name": "String",
  "designation": "String",
  "emp_id": "String"
}
```
