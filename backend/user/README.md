# User Endpoint Documentation

This document provides an overview of the user-related endpoints in the backend service. Each endpoint is responsible for handling specific user operations such as registration, login, profile management, etc.

## Table of Contents

1. [User Registration](#user-registration)
2. [User Login](#user-login)
3. [User Profile](#user-profile)
4. [Future Endpoints](#future-endpoints)

## User Registration

### URL

`POST /api/users/register`

### Description

This endpoint allows new users to register by providing necessary details. Upon successful registration, a token is generated and sent back to the client.

### Request

- **Method**: POST
- **Headers**: 
  - `Content-Type: application/json`
- **Body**: JSON object containing the following fields:
  - `name` (string, required): The name of the user.
  - `email` (string, required): The email address of the user.
  - `password` (string, required): The password for the user account.
  - `safety` (string, optional): Additional safety information.
  - `gender` (string, required): The gender of the user.
  - `isStudent` (boolean, required): Indicates if the user is a student.
  - `contact` (string, required): The contact number of the user.

### Response

- **Success (201 Created)**:
  - **Headers**: 
    - `Set-Cookie`: `auth-token=<token>; Max-Age=172800; Secure; HttpOnly`
  - **Body**: JSON object containing:
    - `success` (boolean): `true`
    - `message` (string): "register successfully"
    - `token` (string): Authentication token for the user.
    - `user` (object): The newly created user object.

- **Error (400 Bad Request)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `false`
    - `message` (string): Error message indicating missing fields or existing account.

- **Error (500 Internal Server Error)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `false`
    - `message` (string): Error message indicating an internal error.

### Error Handling

- The endpoint checks for missing required fields and returns a 400 status code with an appropriate message.
- If an account with the provided email or contact already exists, a 400 status code is returned.
- Any unexpected errors during user creation result in a 500 status code.

### Security

- The authentication token is stored in a secure, HTTP-only cookie to prevent XSS attacks.
- The `secure` flag is set for cookies in production environments to ensure they are only sent over HTTPS.

### Dependencies

- **Express**: Used for handling HTTP requests and responses.
- **Mongoose**: Used for interacting with the MongoDB database.
- **jsonwebtoken**: Used for generating authentication tokens.

### Environment Variables

- `NODE_ENV`: Determines if the application is running in production mode, affecting cookie security settings.

## User Login

### URL

`POST /api/users/login`

### Description

This endpoint allows existing users to log in by providing their email and password. Upon successful authentication, a token is generated and sent back to the client.

### Request

- **Method**: POST
- **Headers**: 
  - `Content-Type: application/json`
- **Body**: JSON object containing the following fields:
  - `email` (string, required): The email address of the user.
  - `password` (string, required): The password for the user account.

### Response

- **Success (200 OK)**:
  - **Headers**: 
    - `Set-Cookie`: `auth-token=<token>; Max-Age=86400; Secure; HttpOnly`
  - **Body**: JSON object containing:
    - `success` (boolean): `true`
    - `message` (string): "user successfully logged in"
    - `token` (string): Authentication token for the user.
    - `user` (object): The authenticated user object.

- **Error (401 Unauthorized)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `false`
    - `message` (string): Error message indicating missing fields or incorrect credentials.

- **Error (404 Not Found)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `false`
    - `message` (string): Error message indicating the user is not found.

- **Error (500 Internal Server Error)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `false`
    - `message` (string): Error message indicating an internal error.

### Error Handling

- The endpoint checks for missing required fields and returns a 401 status code with an appropriate message.
- If the user is not found, a 404 status code is returned.
- If the email or password is incorrect, a 401 status code is returned.
- Any unexpected errors during login result in a 500 status code.

### Security

- The authentication token is stored in a secure, HTTP-only cookie to prevent XSS attacks.
- The `secure` flag is set for cookies in production environments to ensure they are only sent over HTTPS.

## User Profile

### URL

`GET /api/users/profile`

### Description

This endpoint allows authenticated users to retrieve their profile information.

### Request

- **Method**: GET
- **Headers**: 
  - `Authorization`: Bearer token (required)

### Response

- **Success (200 OK)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `true`
    - `user` (object): The user's profile information.

- **Error (401 Unauthorized)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `false`
    - `message` (string): Error message indicating unauthorized access.

- **Error (500 Internal Server Error)**:
  - **Body**: JSON object containing:
    - `success` (boolean): `false`
    - `message` (string): Error message indicating an internal error.

### Error Handling

- The endpoint checks for a valid authentication token and returns a 401 status code if the token is missing or invalid.
- Any unexpected errors during profile retrieval result in a 500 status code.

### Security

- The endpoint requires a valid authentication token to access user profile information.

## Future Endpoints

This section is reserved for documentation of additional user endpoints such as profile update, password reset, etc. As new endpoints are developed, they should be documented here following the same structure as the User Registration, User Login, and User Profile sections.

## Notes

- Ensure that the database connection is properly configured before using these endpoints.
- Validate all input data on the client-side to enhance security and user experience.
