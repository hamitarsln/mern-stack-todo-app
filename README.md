# MERN Stack To-Do App

This is a simple To-Do app built using the MERN stack (MongoDB, Express, React, and Node.js). The application allows users to add, edit, and delete tasks.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Search tasks

## Tech Stack

- **MongoDB** - NoSQL database for storing tasks
- **Express** - Backend framework for building the API
- **React** - Frontend framework for creating the user interface
- **Node.js** - Server-side runtime for running the backend

## Prerequisites

Before you start, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/) (either installed locally or accessible through a cloud service like MongoDB Atlas)

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hamitarsln/mern-stack-todo-app.git
   cd mern-stack-todo-app
   ```

2. **Install dependencies for both the backend and frontend**:

   Navigate to the root directory and install the backend dependencies:

   ```bash
   cd backend
   npm install
   ```

   Then, go to the frontend directory and install the frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**:

   In the `backend` directory, find a 'dbs.js' and 'app.js' file and add the following variables:

   ```bash
   DB_URL=your_mongodb_connection_string
   PORT=5000
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string.

4. **Start the MongoDB service**:

   If you have MongoDB installed locally, make sure it's running. You can start it using:

   ```bash
   mongod
   ```

5. **Run the development**:

   - Start the **backend**:
     ```bash
     cd backend
     npm run dev
     ```

   - Start the **frontend**:
     ```bash
     cd ../frontend
     npm start
     ```

   The client will run at `http://localhost:3000`, and the server will run at `http://localhost:5000`.

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- You can now add, edit, and delete tasks on the To-Do app.
