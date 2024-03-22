# JWT-Basics

## Overview

The Authentication-Enabled Store API Project is a Node.js and Express application designed for managing product data securely. It incorporates JWT-based authentication to restrict access to sensitive routes and provides features for user login, token generation, and secure dashboard access.

## Features

- User authentication with JWT (JSON Web Token) generation
- Secured routes using authentication middleware
- User login functionality with error handling for invalid credentials
- Access to a secure dashboard displaying authorized data
- Error handling middleware for consistent error responses

## Technologies Used

- Node.js
- Express
- MongoDB (for data storage)
- Mongoose (for MongoDB object modeling)
- JSON Web Tokens (JWT) for user authentication
- dotenv for environment variable management
- axios (in the browser app) for making HTTP requests

## Setup and Usage

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/Smith0212/JWT-Basics.git
   cd JWT-Basics
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   JWT_SECRET=your_jwt_secret_here
   ```

4. Start the server:
   ```
   npm start
   ```

5. Access the API endpoints using tools like Postman or via the provided browser application.

## API Endpoints

| Method | Endpoint       | Description                           |
| ------ | -------------- | ------------------------------------- |
| POST   | `/api/v1/login`    | User login with username and password |
| GET    | `/api/v1/dashboard` | Access the secure dashboard           |

## Browser Application

A browser application (`public/browser-app.js`) is included in the project, allowing users to interact with the API endpoints directly from the browser. It provides a login form and access to the secure dashboard.

## Error Handling

The application includes error handling middleware to provide consistent error responses for various scenarios, such as bad requests and unauthenticated access attempts.
