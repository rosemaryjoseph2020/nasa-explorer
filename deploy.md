# Deployment Guide

## Prerequisites
1. Get NASA API key from https://api.nasa.gov/
2. Create GitHub repository
3. Push your code to GitHub

## Vercel Deployment (Recommended)
```bash
npm i -g vercel
cd nasa-space-app
vercel --prod
```

## Environment Variables
Set these in your deployment platform:
- `NASA_API_KEY=your_nasa_api_key_here`
- `PORT=5000` (for backend)

## Alternative: Separate Deployments

### Frontend (Netlify)
1. Connect GitHub repo
2. Build command: `cd frontend && npm run build`
3. Publish directory: `frontend/build`

### Backend (Railway/Render)
1. Connect GitHub repo  
2. Start command: `cd backend && npm start`
3. Add NASA_API_KEY environment variable

## Local Testing
```bash
# Backend
cd backend
npm install
npm start

# Frontend (new terminal)
cd frontend  
npm install
npm start
```