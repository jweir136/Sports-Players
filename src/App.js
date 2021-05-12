import logo from './logo.svg';
import './App.css';

import PlayerCard from "./PlayerCard";

function App() {
  let players = [
    {"name":"Ovechkin", "team":"Capitals"},
    {"name":"Crosby", "team":"Penguins"}
  ];

  return (
    <div className="App">
      { players.map(player => (
        <PlayerCard playerName={player['name']} playerTeam={player['team']} />
      ))}
    </div>
  );
}

export default App;
