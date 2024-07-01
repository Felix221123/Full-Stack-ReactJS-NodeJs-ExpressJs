# Full Stack Application Template with ReactJS and ExpressJS

This repository provides a boilerplate template for a full-stack application using ReactJS for the frontend and ExpressJS with TypeScript for the backend.

## Project Structure

```
.
├── backend
│   ├── node_modules
│   ├── package.json
│   ├── tsconfig.json
│   ├── server.ts
│   └── ... (other backend files)
│
└── frontend
    ├── node_modules
    ├── package.json
    ├── src
    │   └── ... (React components and other frontend files)
    └── public
        └── ... (static files)
```

## Getting Started

Follow the steps below to set up and run the application.

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install backend dependencies**

   Navigate to the `backend` folder and run to install the typescript compatible with the typescript:

   ```sh
   cd backend
   npm install eslint@8.56.0 
   ```

   Install peer dependency using the run script:
   ```sh
    npm install --legacy-peer-deps
   ```

   Install nodemon dependency globally using the run script:
   ```sh
    npm install -g nodemon
   ```

   Install typescript dependency using the run script:
   ```sh
    npm install typescript ts-node --save-dev
   ```

3. **Install frontend dependencies**

   Navigate to the `frontend` folder and run:

   ```sh
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**

   Navigate to the `backend` folder and run the following command to start the Express server:

   ```sh
   cd backend
   npm run server
   ```

   The backend server will start, typically running on `http://localhost:5000`.














2. **Start the frontend development server**

   Navigate to the `frontend` folder and run the following command to start the React development server:

   ```sh
   cd ../frontend
   npm run dev
   ```

   The frontend development server will start, typically running on `http://localhost:3000`.

### Additional Scripts

- **Backend**

  - `npm run server`: Starts the Express server.

- **Frontend**

  - `npm run dev`: Starts the React development server with hot reloading.

### Folder Structure

- **Backend**
  - `server.ts`: The main entry point for the Express server.
  - Additional backend files as required for your project.

- **Frontend**
  - `src/`: Contains React components and other frontend source files.
  - `public/`: Contains static files for the frontend.

### Contributing

If you wish to contribute to this repo, please fork the repository and submit a pull request. I welcome all contributions!

