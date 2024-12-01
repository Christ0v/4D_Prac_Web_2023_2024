import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Table } from 'react-bootstrap' ;
import Switch from 'react-switch';
import localImage from './flower.jpg';
import gitImage from './git.png';
import linImage from './lin3.jpg';

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
      <p className='descrip'>I'm a Frontend Developer passionate about crating new <br></br> websites, currently looking for new job oppurtonites.</p>
      <Button variant="success" className="hireMe">
        Hire me
      </Button>
      <img className='imagePerson' src={localImage} alt="Opis obrazka" style={{ width: '200px', height: '200px' }} />
      <span className='switchText'>{isDarkMode ? 'Dark Mode ON' : 'Dark Mode OFF'}</span>
      <div className='switchTheme'>
        <Switch
          onChange={toggleDarkMode}
          checked={isDarkMode}
          offColor="#888"
          onColor="#0f0"
          uncheckedIcon={false}
          checkedIcon={false}  
        />       
      </div>
        
      <div className="container mt-5">
      
      <h2>My skillset includes🛠️</h2>
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
      <h2>What I want to learn next🚀</h2>
      <hr></hr>
      <Table className='tablica' hover>
        <thead hover>
          <li>next.js</li>
          <li>TypeScript</li>
        </thead>
        <thead hover>
          <li>tailwind CSS</li>
        </thead>
        <thead hover>
          <li>Vite</li>
        </thead>
      </Table>
      
    </div>
      <img className='gitLogo' src={gitImage} alt="Opis obrazka" style={{ width: '50px', height: '50px' }} />
      <h1>Portfolio</h1>
      <h6>My recent projects</h6>
      
      <div className="flex-grow-2 d-flex justify-content-center align-items-center">
      </div>
      <div className='container'>
        <div className='portfolio'>
          <h1>Currency-Convert</h1>
          <p>Currency converter is a simple app built with Vanilla Javascript. I allows you to conver PLN to USD, SEK, EUR or CHF</p>
          <p>Demo: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
          <p>Code: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
        </div>
        <div className='portfolio'>
          <h1>Currency-Convert React</h1>
          <p>Currency converter is a project created in React. It converts PLN to four other most popular</p>
          <p>Demo: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
          <p>Code: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
        </div>
        <div className='portfolio'>
          <h1>Movie-Browser</h1>
          <p>Thiss app will show you the most popular movies and actors. Click in the title and you will see details like: rating, votes, cast, crew and more, It's built with react and uses data that's fetched from API. This project was a teamwork.</p>
          <p>Demo: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
          <p>Code: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
        </div>
        <div className='portfolio'>
          <h1>Personal-Homepage</h1>
          <p>This is my virtual CV created in React. You can see here my skills, repositories, personal informations and contact details. Click in the link below and get to know me better👇</p>
          <p>Demo: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
          <p>Code: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
        </div>
        <div className='portfolio'>
          <h1>Todo-List-React</h1>
          <p>To do list is a project created in React. You can add/ remove asks, tick and hide done task or finish all of them - app has many interactive buttons. It can help you improve your daily duties.</p>
          <p>Demo: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
          <p>Code: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
        </div>
        <div className='portfolio'>
          <h1>ToDoList</h1>
          <p>This is to do list built with Vanilla JavaScript. You can add and remove tasks, finish and hde all done tasks</p>
          <p>Demo: <a href='https://www.youtube.com' target='blank'>LINK</a></p>
          <p>Code: <a href='https://www.youtube.com' target='blank'>LINK</a></p> 
        </div>
         <footer>
        <h6>Let's talk</h6>
        <h1>email@gmail.com</h1>
        <p>I'am always open yo new projects. If you need a creative developer who<br></br> can buid responsive design websites and apps, feel free to contact me.<br></br>Your ideas will come to life.👋</p>
          <a href='https://github.com' target='blank'><img className='gitFooter' src={gitImage} alt="Opis obrazka" style={{ width: '50px', height: '50px' }} /></a>
          <a href='https://pl.linkedin.com' target='blank'><img className='gitFooter' src={linImage} alt="Opis obrazka" style={{ width: '50px', height: '50px' }} /></a>
      </footer>
      </div>
     
    </Container>
  );
};

export default App;
