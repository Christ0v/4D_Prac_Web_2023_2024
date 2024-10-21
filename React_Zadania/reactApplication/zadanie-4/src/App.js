import React, {useState, useEffect} from 'react'

function App(){
  const [licznik, setLicznik] = useState(0);

  useEffect(() => {
    document.title = `Kliknięto ${licznik} razy`;
  }, [licznik]);

  return(
    <div>
      <h1>Licznik: {licznik}</h1>
      <button onClick={() =>setLicznik(licznik + 1) }>Zwiększ licznik</button>
    </div>
  );
}

export default App;