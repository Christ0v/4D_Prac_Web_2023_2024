import React from'react'

function Powitanie(props)
{
  return <h1>Witaj, {props.imie}</h1>
}

function App(){
  return(
    <div>
      <Powitanie imie = "Jan"/>
      <Powitanie imie = "Anna"/>
    </div>
  );
}

export default App;
