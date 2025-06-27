import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Get API URL from environment variable or use proxy in development
const API_URL = process.env.REACT_APP_API_URL || '';

function APODSection() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAPOD();
  }, []);

  const fetchAPOD = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/apod`);
      setApodData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch Astronomy Picture of the Day');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="section">
      <h2>Astronomy Picture of the Day</h2>
      {apodData && (
        <div className="apod-container">
          <h3>{apodData.title}</h3>
          <p><strong>Date:</strong> {apodData.date}</p>
          {apodData.media_type === 'image' ? (
            <img src={apodData.url} alt={apodData.title} />
          ) : (
            <iframe 
              src={apodData.url} 
              width="100%" 
              height="400" 
              title={apodData.title}
            />
          )}
          <p>{apodData.explanation}</p>
          {apodData.copyright && (
            <p><strong>Copyright:</strong> {apodData.copyright}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default APODSection;