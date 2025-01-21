
Workspace: Collecting workspace information

Sure! Here is a basic documentation for your Node.js project:

# Node.js API Project

This project is a simple Node.js API for managing Person entities. It uses Express for the server, Mongoose for MongoDB interactions, and dotenv for environment variable management.

## Project Structure

```
.DS_Store
.env
.gitignore
.node_day1/
	.DS_Store
	.env
	.gitignore
	db.js
	model/
		Person.js
	package.json
	router/
		personRoutes.js
	server.js
controller/
	personController.js
db.js
model/
	Person.js
package.json
Readme.md
router/
	personRoutes.js
server.js
```

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a 

.env

 file in the root directory and add your MongoDB connection string and server port:
    ```
    DB_CONNECTION_STRING=your_mongodb_connection_string
    PORT=3000
    ```

## Running the Project

To start the server, run:
```sh
node server.js
```

Or, if you have `nodemon` installed, you can run:
```sh
nodemon server.js
```

## API Endpoints

### Create a Person

- **URL:** `/create`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "work": "chef",
    "mobile": "1234567890",
    "email": "john.doe@example.com",
    "address": "123 Main St",
    "salary": 50000,
    "username": "johndoe",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "payload": {
      "id": "person_id",
      "username": "johndoe"
    }
  }
  ```

### Get All Persons

- **URL:** `/get`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "person_id",
      "name": "John Doe",
      "age": 30,
      "work": "chef",
      "mobile": "1234567890",
      "email": "john.doe@example.com",
      "address": "123 Main St",
      "salary": 50000,
      "username": "johndoe",
      "password": "password123"
    }
  ]
  ```

### Get Person by ID

- **URL:** `/getbyid/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "_id": "person_id",
    "name": "John Doe",
    "age": 30,
    "work": "chef",
    "mobile": "1234567890",
    "email": "john.doe@example.com",
    "address": "123 Main St",
    "salary": 50000,
    "username": "johndoe",
    "password": "password123"
  }
  ```

### Edit a Person

- **URL:** `/edit/:id`
- **Method:** `PUT`
- **Body:** (any fields you want to update)
  ```json
  {
    "name": "John Doe",
    "age": 31
  }
  ```
- **Response:**
  ```json
  {
    "_id": "person_id",
    "name": "John Doe",
    "age": 31,
    "work": "chef",
    "mobile": "1234567890",
    "email": "john.doe@example.com",
    "address": "123 Main St",
    "salary": 50000,
    "username": "johndoe",
    "password": "password123"
  }
  ```

### Delete a Person

- **URL:** `/delete/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "message": "person Deleted Successfully"
  }
  ```

## Files

- db.js : Database connection setup.
- Person.js : Mongoose schema and model for Person.
- server.js : Main server file.
- personController.js : Controller functions for handling API requests.
- personRoutes.js : Express routes for the API endpoints.

## Dependencies

- express : Web framework for Node.js.
- mongoose : MongoDB object modeling tool.
- `dotenv`: Loads environment variables from a .env file.
- body-parser : Middleware to parse request bodies.
- `nodemon`: Utility that monitors for changes in your source and automatically restarts your server.

