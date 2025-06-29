import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Get API URL from environment variable or use proxy in development
const API_URL = process.env.REACT_APP_API_URL || '';

function NeoSection() {
	const [neoData, setNeoData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchNeoData();
	}, []);

	const fetchNeoData = async () => {
		try {
			setLoading(true);
			const response = await axios.get(`${API_URL}/api/neo`);
			setNeoData(response.data);
			setError(null);
		} catch (err) {
			setError('Failed to fetch Near Earth Objects data');
		} finally {
			setLoading(false);
		}
	};

	if (loading)
		return <div className='loading'>Loading Near Earth Objects...</div>;
	if (error) return <div className='error'>{error}</div>;

	const today = new Date().toISOString().split('T')[0];
	const todayObjects = neoData?.near_earth_objects?.[today] || [];

	return (
		<div className='section'>
			<h2>Near Earth Objects - Today</h2>
			<p>
				<strong>Total objects detected today:</strong> {todayObjects.length}
			</p>
			<p>
				<strong>Potentially hazardous:</strong>{' '}
				{
					todayObjects.filter((obj) => obj.is_potentially_hazardous_asteroid)
						.length
				}
			</p>

			<div className='neo-list'>
				{todayObjects.slice(0, 10).map((obj) => (
					<div key={obj.id} className='neo-item'>
						<h4>{obj.name}</h4>
						<p>
							<strong>Estimated diameter:</strong>{' '}
							{Math.round(obj.estimated_diameter.meters.estimated_diameter_min)}{' '}
							-{' '}
							{Math.round(obj.estimated_diameter.meters.estimated_diameter_max)}{' '}
							meters
						</p>
						<p>
							<strong>Closest approach:</strong>{' '}
							{new Date(
								obj.close_approach_data[0].close_approach_date_full
							).toLocaleString()}
						</p>
						<p>
							<strong>Miss distance:</strong>{' '}
							{Math.round(
								obj.close_approach_data[0].miss_distance.kilometers
							).toLocaleString()}{' '}
							km
						</p>
						<p>
							<strong>Velocity:</strong>{' '}
							{Math.round(
								obj.close_approach_data[0].relative_velocity.kilometers_per_hour
							).toLocaleString()}{' '}
							km/h
						</p>
						{obj.is_potentially_hazardous_asteroid && (
							<p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
								⚠️ Potentially Hazardous
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default NeoSection;