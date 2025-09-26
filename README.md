
## Key Features

- Passwords are hashed using **bcrypt** before storing in the database.  
- **JWT tokens** are issued to logged-in users for authentication.  
- Certain routes are **protected**, accessible only with a valid token.  
- **Revoked tokens** are tracked to prevent reuse after logout.  
- Includes a **health check route** to confirm the server is running.

---

## Setup Instructions

1. **Clone the repository** and navigate to the project folder.  
2. Install dependencies:  
   ```bash
   npm install

3. Create a MySQL database named lab_auth.

4. Create the following tables:

users → stores email, password_hash, full_name, and role.

revoked_tokens → keeps track of tokens that have been revoked.

5. Copy .env.example to .env and fill in your database connection details and JWT secret.

Start the server:

npm start

The server will be available at:

http://localhost:3000



## Endpoints
## Health Check

- GET /api/health → Checks if the server is running.

## Authentication

- POST /api/auth/signup → Register a new user.

- POST /api/auth/login → Log in and receive a JWT.

- POST /api/auth/logout → Logout and revoke the token (protected).

- GET /api/auth/profile → View user profile details (protected).
