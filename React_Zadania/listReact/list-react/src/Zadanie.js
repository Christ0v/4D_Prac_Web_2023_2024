import React from 'react';

const Zadanie = ({ zadanie, oznaczJakoUkonczone, usunZadanie }) => {
  return (
    <li style={{ textDecoration: zadanie.completed ? 'line-through' : 'none' }}>
      <span onClick={() => oznaczJakoUkonczone(zadanie.id)}>{zadanie.text}</span>
      <button onClick={() => usunZadanie(zadanie.id)}>Usuń</button>
    </li>
  );
};

export default Zadanie;