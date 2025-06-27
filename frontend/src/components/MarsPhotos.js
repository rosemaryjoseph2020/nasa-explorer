import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function MarsPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sol, setSol] = useState(1000);
  const [camera, setCamera] = useState('fhaz');

  const cameras = [
    { value: 'fhaz', label: 'Front Hazard Avoidance Camera' },
    { value: 'rhaz', label: 'Rear Hazard Avoidance Camera' },
    { value: 'mast', label: 'Mast Camera' },
    { value: 'chemcam', label: 'Chemistry and Camera Complex' },
    { value: 'mahli', label: 'Mars Hand Lens Imager' }
  ];

  const fetchMarsPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/mars-photos?sol=${sol}&camera=${camera}`);
      setPhotos(response.data.photos.slice(0, 12));
      setError(null);
    } catch (err) {
      setError('Failed to fetch Mars photos');
    } finally {
      setLoading(false);
    }
  }, [sol, camera]);

  useEffect(() => {
    fetchMarsPhotos();
  }, [fetchMarsPhotos]);

  if (loading) return <div className="loading">Loading Mars photos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="section">
      <h2>Mars Rover Photos</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Sol (Martian Day): 
          <input 
            type="number" 
            value={sol} 
            onChange={(e) => setSol(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <label style={{ marginLeft: '20px' }}>
          Camera: 
          <select 
            value={camera} 
            onChange={(e) => setCamera(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            {cameras.map(cam => (
              <option key={cam.value} value={cam.value}>{cam.label}</option>
            ))}
          </select>
        </label>
      </div>
      
      {photos.length > 0 ? (
        <div className="mars-photos">
          {photos.map(photo => (
            <div key={photo.id} className="mars-photo">
              <img src={photo.img_src} alt={`Mars Sol ${photo.sol}`} />
              <p>Sol {photo.sol} - {photo.camera.full_name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No photos found for this sol and camera combination.</p>
      )}
    </div>
  );
}

export default MarsPhotos;