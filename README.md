This project is about creating a basic authentication system using Express.js, MySQL, JWT, and bcrypt. It shows how to register users, log them in, protect routes with tokens, and log them out safely. The main focus is to make authentication secure and easy to understand.


Key points of the project:
Uses bcrypt to hash passwords before saving them in the database.


Issues JWT tokens to logged-in users.


Protects certain routes so only valid tokens can access them.


Stores revoked tokens so logged-out users cannot reuse them.


Includes a health check route to confirm the server is working.


Setup Instructions:
 To run this project on your computer, follow these steps:
Clone the repository and open the project folder.


Install the required dependencies with the command npm install.


Create a database in MySQL named lab_auth.


Add two tables:
 A. users → saves email and password (hashed).
 B. revoked_tokens → keeps track of tokens that are no longer valid.


Copy the .env.example file to a new .env file and set up the database details and JWT secret.


Start the server using npm start.


Test the routes with Postman.






How to Run
Use the command npm start to start the server.


The server will be available at http://localhost:3000


Endpoints List
Health Check
 • GET /api/health → Checks if the server is working.


Authentication
 • POST /auth/signup → Register a new user.
 • POST /auth/login → Log in and get a JWT.
 • POST /auth/logout → Logout and revoke the token (protected).
 • GET /auth/profile → View user profile details (protected).