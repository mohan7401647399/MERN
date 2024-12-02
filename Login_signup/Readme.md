# Login and Signup Module (MERN)

A secure and responsive login/signup module built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project demonstrates essential user authentication workflows, including secure registration and login, ensuring data privacy and security.

## Features

- **User Registration**:
  - Create new user accounts with encrypted passwords.
- **User Login**:
  - Authenticate existing users securely using JWT.
- **Password Encryption**:
  - Uses bcrypt for hashing user passwords.
- **Error Handling**:
  - Comprehensive error messages for invalid inputs or authentication failures.
- **Responsive Design**:
  - Optimized for both desktop and mobile devices.

## Technologies Used

### Frontend
- **React.js**: Dynamic user interface for seamless interaction.
- **React Router**: For smooth navigation between login and signup pages.
- **Axios**: Simplifies HTTP requests to the backend.
- **CSS/SCSS**: Enhances the look and feel of the application.

### Backend
- **Node.js**: Backend runtime for handling server-side logic.
- **Express.js**: Lightweight framework for building APIs.
- **JWT (JSON Web Tokens)**: Provides secure authentication.
- **bcrypt**: For encrypting user passwords.

### Database
- **MongoDB**: Stores user details in a secure and scalable NoSQL database.
- **Mongoose**: ODM for MongoDB for schema definition and validation.

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community) locally or use MongoDB Atlas.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohan7401647399/MERN.git

2. **Navigate to the Login Signup directory**:
    ```bash
    cd MERN/Login_signup

3. **Install dependencies**:
    ```bash
    For the backend:
      cd server
      npm install

    For the frontend:
      cd client
      npm install

4. **Configure environment variables**:
    ```bash
       Create a .env file in the server directory with the following:
          PORT=5000
          MONGO_URI=your_mongodb_connection_string
          JWT_SECRET=your_secret_key

5. **Run the application**:
- Start the backend server:
  ```bash
    cd server
    npm run dev
- Start the frontend:
  ```bash
    cd client
    npm start

6. **Access the application: Open your browser and navigate to**:
  ```bash
    http://localhost:3000 
