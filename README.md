# Task Management App

A full-stack task management application built with ExpressJS, React, and PostgreSQL. This app allows users to manage tasks and task lists efficiently, with features like offline synchronization, real-time updates, and secured authentication.

## Features

- **Task Management**: Add, edit, delete tasks and task lists.
- **Offline Data Synchronization**: Sync data when offline (beta).
- **Real-Time Updates**: Real-time task updates using WebSockets.
- **Security**: Secured authentication with JSON Web Tokens (JWT) and HTTPS.
- **Access Control**: Role-based access control for user permissions.
- **User Experience**: Infinite scroll and paging for seamless task browsing.

## Tech Stack

- **Frontend**: React
- **Backend**: ExpressJS
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: HTTPS

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/task-management-app.git
    cd task-management-app
    ```

2. **Backend Setup:**

    2.1 **Navigate to the backend directory:**
    ```sh
    cd server
    ```

    2.2 **Install dependencies:**
    ```sh
    npm install
    ```

    2.3 **Set up environment variables:**
    Create a `.env` file in the backend directory and add the following variables:
    ```env
    PORT=5000
    DATABASE_URL=your_postgresql_database_url
    JWT_SECRET=your_jwt_secret
    ```

    2.4 **Run the backend server:**
    ```sh
    npm start
    ```

3. **Frontend Setup:**

    3.1 **Navigate to the frontend directory:**
    ```sh
    cd ../client
    ```

    3.2 **Install dependencies:**
    ```sh
    npm install
    ```

    3.3 **Run the frontend development server:**
    ```sh
    npm start
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
