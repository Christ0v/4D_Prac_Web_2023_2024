import React, {useState, useEffect} from 'react';

function App(){

  const [points, setPoints] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [autoClicker, setAutoClicker] = useState(false);
  const [autoClickerCost, setAutoClickerCost] = useState(100);
  const [upgradeCost, setUpgradeCost] = useState(50);
  const [AutoClickerLevel, setAutoClickerLevel] = useState(0);
  const [autoClickerInterval, setAutoClickerInterval] = useState(1000);
  const [timePlayed, setTimePlayed] = useState(0);
  

  const handleClick = () => {
    setPoints(points + clickValue);
  }

  const buyUpgrade = () => {
    if (points >= upgradeCost){
      setPoints(points - upgradeCost);
      setClickValue(clickValue + 5);
      setUpgradeCost(upgradeCost * 2);
    }
  };

  const buyAutoClicker = () => {
    if (points >= autoClickerCost) {
      setPoints(points - autoClickerCost);
      setAutoClickerLevel(AutoClickerLevel + 1);
      setAutoClickerInterval(autoClickerInterval => autoClickerInterval * 0.9)
      setAutoClicker(true);
      setAutoClickerCost(autoClickerCost * 2) 
    }
  }

  useEffect(() => {
    if (autoClicker) {
      const interval = setInterval(() => {
        setPoints(prevPoints => prevPoints + clickValue);
      }, autoClickerInterval);
      return() => clearInterval(interval);
    }
  }, [autoClicker, clickValue, autoClickerInterval]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePlayed(prevTime => prevTime + 1)
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect (() => {
    if (timePlayed > 0 && timePlayed % 60 === 0){
      setPoints(prevPoints => prevPoints + 50);
    }
  }, [timePlayed])

  return (
    <div style = {{textAlign: 'center', paddingTop: '50px'}}>
      
      <h1 class = "title"> Clicker Game</h1>
      
      <p class = "gameTime">Czas gry: {Math.floor(timePlayed / 60)} min {timePlayed & 60}sek</p>
      
      <p>Punkty: {points}</p>
      <button onClick={handleClick} class = "clickMe">Kliknij mnie! (+{clickValue})</button>

      <br></br>

      <button onClick={buyUpgrade} disabled = {points < upgradeCost} class = "upgrade">
        Kup Ulepszenie (+5 do wartości klika) - {upgradeCost} punktów
      </button>

      <br></br>

      <button onClick={buyAutoClicker} disabled = {points < autoClickerCost} class = "buyClicker">
        Kup AutoClicker - {autoClickerCost} punktów
      </button>

      {timePlayed % 60 === 0 && timePlayed > 0 && (
        <p style={{color: 'lightgreen'}}>Bonus otrzymałeś 50 punktów za grę przez {timePlayed / 60} minut!</p>
      )}
    </div>
  );
};

export default App;
