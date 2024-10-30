# Placenet Backend 
This is the backend for our Placenet react native mobile application so that our [front end](https://github.com/angelesmarin/Placenet-App-Frontend/tree/main) can interact with our backend api routes. We chose to create different repositories for modularity. These are the steps we took to set up the backend for our app:


**Here is information about our files!: [files](https://github.com/angelesmarin/Placenet-App-Backend/blob/development/documentation/file_structure.md)**

## Prerequisite Installs:
* Javascript
  * language
  * https://nodejs.org/en 
* Node.js
  * runtime environment 
  * https://nodejs.org/en/download/package-manager 
* Express.js
  * framework
  * https://expressjs.com/en/starter/installing.html
* PostgreSQL
  * nosql database
  * https://www.postgresql.org/download/
* Axios lib
  * for testing
  * https://www.npmjs.com/package/axios 
* pg
  * Express library
  * https://www.npmjs.com/package/pg 
* Insomnia
  * api client
  * https://insomnia.rest/download 
  
## 1. Make a RESTFUL API (Node.js; Express.js)
We first initialized our project and set up our server using Express.js.

**API**: set of rules to allow communication between back & front end; lets front end request, send, and receive data to & from the server. 


**RESTful API**: will let app fetch, send, update, delete data by making HTTP requests to server. 

Done by 
- intializing express.js project
- creating entry point: app.js 


## 2. Make Basic API structure (Express.js)
We set up a basic API structure to handle data requests, edits, file uploads, and overall communication between front and back end 

Here is the overall structure and folders we implemented:
* Routes
* to help direct requests to the right logic/ controller
* Controllers
* The logic that processes the requests + interacts with database 
* Models 
	* Define the structure of the database + interacts with database 

We implemented routes, controllers, and models for: 
* user authentication
* property management
* projct management
* document management 

## 3. Make PostgreSQL Database (PostgreSQL)
  
## 4. Connect runtime to database (pg library)

## 5. Implement CRUD in API  

## 6. Test API endpoints (Insomnia)

## 7. Connect frontend (https://github.com/angelesmarin/Placenet-App-Frontend) to baackend (React Native)
