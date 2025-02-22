# Task Management Application

## Description

This is a React-based **Task Management Application** that allows users to add, edit, view, and delete tasks. It provides an intuitive interface for managing daily tasks efficiently. Built with React and TypeScript, the application ensures a smooth user experience with dynamic task handling.

# Purpose

1.  Organize and manage daily tasks efficiently.
2.  Improve productivity and task tracking.
3.  Provide an intuitive and user-friendly interface for task management.

## Technologies used

1. React

2. Express(JWT, CORS)

3. MongoDB

4. Node

## Core features

1. Authentication.
2. Add task.
3. Edit task.
4. View task.
5. Delete task.

## Dependencies

1. TanStack
2. Axios
3. Firebase
4. Sweet Alert

## Live links

1. Live link: [visit](https://task-management-applicat-d14b5.web.app)

## Server Repo

1. Repo: [visit](https://github.com/sakib-333/task-management-application-server)

## How to in local machine

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:sakib-333/task-management-application-client.git

   cd task-management-application-client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env.local` file root of the folder and all of your secret keys.

   ```bash
   VITE_apiKey=<your-firebase-api-key>
   VITE_authDomain=<your-firebase-authDomain>
   projectId=<your-firebase-projectId>
   storageBucket=<your-firebase-storageBucket>
   messagingSenderId=<your-firebase-messagingSenderId>
   appId=<your-firebase-appId>
   VITE_BASE_URL=<your-server-base-url>


   ```

4. Start server

   ```bash
   npm run dev
   ```

5. Your server should now be running on `http://localhost:5173`.
