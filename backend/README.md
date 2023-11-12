# Altametrics Code Test Backend

## About
This is a project I wrote in attempt to establish a collaboration with Altametrics and to prove my latest coding skills.

## Table of contents
- [Altametrics Code Test Backend](#altametrics-code-test-backend)
	- [About](#about)
	- [Table of contents](#table-of-contents)
	- [Requirements](#requirements)
	- [Installation](#installation)
	- [Usage](#usage)
		- [Normal usage](#normal-usage)
		- [Seeding](#seeding)
	- [Endpoints](#endpoints)
		- [Protected endpoints](#protected-endpoints)
		- [HTTP endpoints](#http-endpoints)
			- [`POST /auth/login`](#post-authlogin)
			- [`GET /invoices`](#get-invoices)
			- [`GET /invoices/:id`](#get-invoicesid)

## Requirements
1. Docker Compose v2
2. Node v20

## Installation
1. Clone the repository in a folder
1. Create a `.env` file with the following structure:
```
POSTGRES_DATABASE="your_db_name"
POSTGRES_USER="your_username"
POSTGRES_PASSWORD="your_password"
DATABASE_URL="postgresql://your-db-url"
```
2. Run docker-compose as follows to start the database:
`sudo docker-compose up -d`
3. Build the project:
`npm build`

## Usage
### Normal usage
Run it using node:
`node dist/src/main.js`  
### Seeding
`npm run cli seed`  
The seeding will create an user, and an invoice that belongs to that user.  
User credentials:
- Email: code_test@mock.com
- Password: password

## Endpoints
### Protected endpoints
All endpoints, except `POST /auth/login` expect that you provide an authorization token, the bearer token you find besides each user.
### HTTP endpoints  
####  `POST /auth/login`  
  Body:
  ```
  {
	"email": String, required,
	"password": String, required
  }
  ```  
  - Responses:  
    - 403, if provided email-password combination doesn't exist
    - 200, and as response body, a single line, containing user's token  

#### `GET /invoices` 
  - Responses:  
    - 403, if provided token isn't valid
    - 200, and as response body, an array of all invoices

#### `GET /invoices/:id` 
  - Responses:  
    - 403, if provided token isn't valid  
    - 409, if provided `id` isn't a number  
    - 200, and as response body, an array of all invoices