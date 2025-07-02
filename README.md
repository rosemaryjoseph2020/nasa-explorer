
# NASA Space Explorer

A web application that showcases NASA's space data through an interactive React frontend and Node.js backend.

## Live Demo

- Frontend: https://nasa-explorer-3lyu.vercel.app  
- Backend API: https://nasa-explorer-api.onrender.com

## Features

- Astronomy Picture of the Day (APOD): View NASA's daily featured space image with detailed explanations.
- Mars Rover Photos: Browse photos from Mars rovers with customizable sol (Martian day) and camera selection.
- Near Earth Objects: Track asteroids and comets approaching Earth today.

## Project Structure

```
├── frontend/                 # React frontend
│   └── .env                 # Frontend environment variables
├── backend/                 # Express backend
│   └── .env                 # Backend environment variables
└── README.md                # Project documentation
```

## Environment Variables

### Backend (.env)

Create a `.env` file inside the `backend/` folder with the following content:

```
NASA_API_KEY=DEMO_KEY
PORT=5000
CORS_ORIGIN=https://nasa-explorer-3lyu.vercel.app/
```

- NASA_API_KEY: Your NASA API key. You can use DEMO_KEY for testing, but it's rate-limited.
- PORT: The port your Express server will run on (default is 5000).
- CORS_ORIGIN: The frontend origin that is allowed to make requests to the backend.

**CORS Fallback Behavior:**  
In `server.js`, the backend sets a fallback value for `CORS_ORIGIN` in case it is missing from the environment variables:

```js
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'https://nasa-explorer-uu4c.vercel.app/';
```

This ensures that the backend still accepts requests from the deployed frontend even if the environment variable is not set.

### Frontend (.env)

Create a `.env` file inside the `frontend/` folder with the following content:

```
REACT_APP_API_URL=https://nasa-explorer-api.onrender.com
```

- REACT_APP_API_URL: This is the base URL the React app uses to make requests to the backend API.

## Setup Instructions

### Prerequisites

- Node.js version: v22.16.0  
- npm version: 10.9.2

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file inside the `backend/` folder with the content shown above.

4. Start the backend server:

   ```
   npm run dev
   ```

5. The backend server will run at [http://localhost:5000](http://localhost:5000) by default.

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file inside the `frontend/` folder with the content shown above.

4. Start the React development server:

   ```
   npm start
   ```

5. The frontend app will be available at [http://localhost:3000](http://localhost:3000)

## API Endpoints

- GET /api/apod - Astronomy Picture of the Day
- GET /api/mars-photos?sol=1000&camera=fhaz - Mars Rover Photos
- GET /api/neo - Near Earth Objects for today

## Technologies Used

- Frontend: React, Axios, CSS3
- Backend: Node.js, Express, Axios
- APIs: NASA Open APIs
- CORS: Configured using the CORS_ORIGIN environment variable to allow only trusted frontend URLs. Includes a fallback default origin in case the variable is missing.

## NASA API Key

You can get your own free NASA API key from: https://api.nasa.gov/

The app uses DEMO_KEY by default, which has usage limits. For production use or frequent testing, it’s recommended to sign up for a personal key.
//
