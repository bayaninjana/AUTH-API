# Lab Auth 3 – Basic Authentication System

This project demonstrates a **basic authentication system** using **Express.js, MySQL, JWT, and bcrypt**.  
It shows how to register users, log them in, protect routes with tokens, and log them out safely.  

The main focus is to implement **secure authentication** in an understandable way.

---

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
