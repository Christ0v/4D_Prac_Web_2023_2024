import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Table } from 'react-bootstrap';
import Switch from 'react-switch';
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
      
        <Switch
          onChange={toggleDarkMode}
          checked={isDarkMode}
          offColor="#888"
          onColor="#0f0"
          uncheckedIcon={false}
          checkedIcon={false}
          
        />
        <span className="ml-2">{isDarkMode ? 'Dark Mode ON' : 'Dark Mode OFF'}</span>
      

      <div className="container mt-5">
      <h2>My skillset includes</h2>
      <hr></hr>
      <Table className='tablica' hover>
        <thead hover>
          <li>React.Js</li>
          <li>Crate</li>
          <li>JavaScript</li>
          <li>CSS: Media Queries</li>
          <li>Teamwork</li>
          <li>Redux</li>
          <li>Responsive Web Design</li>
          <li>Immntability</li>
          <li>LocalStorage</li>
          <li>GitHub: Pull requests amd review</li>
        </thead>
        <thead hover>
          <li>Styled Components</li>
          <li>NPM</li>
          <li>CSS: Flex box</li>
          <li>CSS: Grid</li>
          <li>Trello</li>
          <li>Markdown</li>
          <li>Promise, Async/Await</li>
          <li>Scrum</li>
        </thead>
        <thead hover>
          <li>React Hooks</li>
          <li>Html</li>
          <li>CSS: Animations/Keyframes</li>
          <li>Figma</li>
          <li>React-Router</li>
          <li>Redux-Saga</li>
          <li>Fetch, Axios</li>
          <li>Error handing</li>
          <li>Git</li>
        </thead>
      </Table>
    </div>
      <h1>Portfolio</h1>
      <h6>My recent projects</h6>
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      </div>
    </Container>
  );
};

export default App;
