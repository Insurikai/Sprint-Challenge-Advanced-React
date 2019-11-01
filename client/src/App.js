import React from 'react';
import Display from './components/Display';
import useLocalStorage from './hooks/useLocalStorage';
import LocalPlayer from './components/LocalPlayer';
import './App.css';

function App() {
  const[localPlayer, setLocalPlayer] = useLocalStorage('localPlayer', {})
  const saveToLocal = (player)=>{
    setLocalPlayer(player);
  }
  return (
    <div className="App">
      <LocalPlayer player={localPlayer}/>
      <Display saveToLocal={saveToLocal}/>
    </div>
  );
}

export default App;
