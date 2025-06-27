const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';

app.use(cors());
app.use(express.json());

// APOD endpoint
app.get('/api/apod', async (req, res) => {
  try {
    const { date } = req.query;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}${date ? `&date=${date}` : ''}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD data' });
  }
});

// Mars Rover Photos endpoint
app.get('/api/mars-photos', async (req, res) => {
  try {
    const { sol = 1000, camera = 'fhaz' } = req.query;
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${NASA_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Mars photos' });
  }
});

// Near Earth Objects endpoint
app.get('/api/neo', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${NASA_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch NEO data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});