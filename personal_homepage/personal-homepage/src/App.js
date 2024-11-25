import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import localImage from './per.png';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-bs-theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <Container className={`d-flex flex-column align-items-center ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ minHeight: '100vh', position: 'relative' }}>
      <h2 className='thisis'>This is</h2>
      <h1 className='nameName'> Krzysztof Pająk</h1>
      <p className='descrip'>I can't take it anymore!!!!!!!!!!!!!!!!</p>
      <Button variant="success" className="hireMe">
        Hire me
      </Button>
      <img className='imagePerson' src={localImage} alt="Opis obrazka" style={{ width: '200px', height: '200px' }} />
      
      <Button 
        variant="primary" 
        onClick={toggleDarkMode} 
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        {isDarkMode ? 'Dark Mode ON' : 'Dark Mode OFF'}
      </Button>
      
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      </div>
    </Container>
  );
};

export default App;
