# NASA Space Explorer

A web application that showcases NASA's space data through an interactive React frontend and Node.js backend.

## Features

- **Astronomy Picture of the Day (APOD)**: View NASA's daily featured space image with detailed explanations
- **Mars Rover Photos**: Browse photos from Mars rovers with customizable sol (Martian day) and camera selection
- **Near Earth Objects**: Track asteroids and comets approaching Earth today

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the `.env` file with your NASA API key (optional - DEMO_KEY works for testing):
   ```
   NASA_API_KEY=your_api_key_here
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/apod` - Astronomy Picture of the Day
- `GET /api/mars-photos?sol=1000&camera=fhaz` - Mars Rover Photos
- `GET /api/neo` - Near Earth Objects for today

## Technologies Used

- **Frontend**: React, Axios, CSS3
- **Backend**: Node.js, Express, Axios
- **APIs**: NASA Open APIs

## NASA API Key

Get your free API key at: https://api.nasa.gov/

The application uses DEMO_KEY by default, which has rate limits. For production use, register for a personal API key.