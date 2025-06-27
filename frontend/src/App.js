import React, { useState } from 'react';
import APODSection from './components/APODSection';
import MarsPhotos from './components/MarsPhotos';
import NeoSection from './components/NeoSection';

function App() {
  const [activeSection, setActiveSection] = useState('apod');

  return (
    <div className="container">
      <header className="header">
        <h1>NASA Space Explorer</h1>
        <p>Discover the wonders of space through NASA's data now</p>
      </header>


      <nav className="nav">
        <button 
          className={activeSection === 'apod' ? 'active' : ''}
          onClick={() => setActiveSection('apod')}
        >
          Picture of the Day
        </button>
        <button 
          className={activeSection === 'mars' ? 'active' : ''}
          onClick={() => setActiveSection('mars')}
        >
          Mars Photos
        </button>
        <button 
          className={activeSection === 'neo' ? 'active' : ''}
          onClick={() => setActiveSection('neo')}
        >
          Near Earth Objects
        </button>
      </nav>

      {activeSection === 'apod' && <APODSection />}
      {activeSection === 'mars' && <MarsPhotos />}
      {activeSection === 'neo' && <NeoSection />}
    </div>
  );
}

export default App;