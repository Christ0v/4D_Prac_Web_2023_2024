import React, { useState } from 'react';
import Zadanie from './Zadanie';

const ListaZadan = () => {
  const [zadania, setZadania] = useState([]);
  const [noweZadanie, setNoweZadanie] = useState('');

  const dodajZadanie = () => {
    if (noweZadanie.trim() !== '') {
      const nowe = {
        id: Date.now(),
        text: noweZadanie,
        completed: false,
      };
      setZadania([...zadania, nowe]);
      setNoweZadanie('');
    }
  };

  const oznaczJakoUkonczone = (id) => {
    setZadania(
      zadania.map((zadanie) =>
        zadanie.id === id ? { ...zadanie, completed: !zadanie.completed } : zadanie
      )
    );
  };

  const usunZadanie = (id) => {
    setZadania(zadania.filter((zadanie) => zadanie.id !== id));
  };

  return (
    <div>
      <h1>Lista zadań</h1>
      <input
        type="text"
        value={noweZadanie}
        onChange={(e) => setNoweZadanie(e.target.value)}
      />
      <button onClick={dodajZadanie}>Dodaj</button>
      <ul>
        {zadania.map((zadanie) => (
          <Zadanie
            key={zadanie.id}
            zadanie={zadanie}
            oznaczUkonczone={oznaczJakoUkonczone}
            usunZadanie={usunZadanie}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaZadan;