import React, { useState, useEffect } from 'react';

function App() {
  const [points, setPoints] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [autoClicker, setAutoClicker] = useState(false);
  const [autoClickerCost, setAutoClickerCost] = useState(100);
  const [upgradeCost, setUpgradeCost] = useState(50);
  const [AutoClickerLevel, setAutoClickerLevel] = useState(0);
  const [autoClickerInterval, setAutoClickerInterval] = useState(1000);
  const [timePlayed, setTimePlayed] = useState(0);
  const [spentPoints, setSpentPoints] = useState(0);
  const currentDate = new Date().toLocaleString();
  const [boostActive, setBoostActive] = useState(false);
  


  const handleClick = () => {
    setPoints(points + clickValue);
  }

  const buyUpgrade = () => {
  if (points >= upgradeCost) {
    setPoints(points - upgradeCost);
    setSpentPoints(spentPoints + upgradeCost); // Zaktualizuj wydane punkty
    setClickValue(clickValue + 5);
    setUpgradeCost(upgradeCost * 2);
    setSpentPoints(spentPoints + upgradeCost);
  }
};

  const buyAutoClicker = () => {
    if (points >= autoClickerCost) {
      setPoints(points - autoClickerCost);
      setAutoClickerLevel(AutoClickerLevel + 1);
      setAutoClickerInterval(autoClickerInterval => autoClickerInterval * 0.9)
      setAutoClicker(true);
      setAutoClickerCost(autoClickerCost * 2);
      setSpentPoints(spentPoints + autoClickerCost);
    }
  }

  const activateBoost = () => {
    if (points >= 200) { 
      setPoints(points - 200); 
      setBoostActive(true);
      setTimeout(() => {
        setBoostActive(false);
      }, 15000);
      setSpentPoints(spentPoints + 250);
    }
  };

  useEffect(() => {
    if (autoClicker) {
      const interval = setInterval(() => {
        setPoints(prevPoints => prevPoints + (boostActive ? clickValue * 3 : clickValue));
      }, autoClickerInterval);
      return () => clearInterval(interval);
    }
  }, [autoClicker, clickValue, autoClickerInterval, boostActive]);

  useEffect(() => {
    if (autoClicker) {
      const interval = setInterval(() => {
        setPoints(prevPoints => prevPoints + clickValue);
      }, autoClickerInterval);
      return () => clearInterval(interval);
    }
  }, [autoClicker, clickValue, autoClickerInterval]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePlayed(prevTime => prevTime + 1)
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timePlayed > 0 && timePlayed % 60 === 0) {
      setPoints(prevPoints => prevPoints + 50);
    }
  }, [timePlayed]);


  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <p class = "date">Aktualna data: {currentDate}</p>
      
      <h1 class="title"> Clicker Game</h1>
      
      <p class="gameTime">Czas gry: {Math.floor(timePlayed / 3600)} godz {Math.floor(timePlayed / 60)} min {timePlayed % 60} sek</p>
      
      <p class="points">Punkty: {points}</p>
      <button onClick={handleClick} className="clickMe">Kliknij mnie! (+{clickValue})</button>

      <br />

      <button onClick={buyUpgrade} disabled={points < upgradeCost} className="upgrade">
        Kup Ulepszenie (+5 do wartości klika) - {upgradeCost} punktów
      </button>

      <br />

      <button onClick={buyAutoClicker} disabled={points < autoClickerCost} className="buyClicker">
        Kup AutoClicker - {autoClickerCost} punktów
      </button>

      <br />

      <button class = "boost" onClick={activateBoost} disabled={boostActive || points < 200} className="boost">
        Aktywuj Boost Auto Clickera (szybkość razy 3) na 15 sekund - 250 punktów)
      </button>

      <p class ="spentPoints">Wydane punkty: {spentPoints}</p>

      {timePlayed % 60 === 0 && timePlayed > 0 && (
        <p style={{ color: 'lightgreen' }}>Bonus otrzymałeś za grę przez {timePlayed / 60} minut!</p>
      )}
    </div>
  );
};

export default App;
