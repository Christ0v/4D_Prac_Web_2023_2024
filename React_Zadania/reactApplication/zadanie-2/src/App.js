import React, {useState} from 'react'

function App() {
  const [licznik, setLicznik] = useState(0);
  return(
    <div>
      <h1>Licznik: {licznik}</h1>
      <button onClick={() => setLicznik(licznik + 1)}>Zwiększ licznik</button>
    </div>
  );
}

export default App;
