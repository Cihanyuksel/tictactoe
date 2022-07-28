import { useState } from 'react';
import './App.css';
import './Tile.css';
import Players from './components/Players'
import Tiles from './components/Tiles';
import Header from './components/Header';

function App() {

  const [players, setPlayers] = useState(
    [
      { id: 'X', name: "NAME", number: "Player I" },
      { id: 'O', name: "NAME", number: "Player II" },
    ]
  );

  const [errMessage, setErrMessage] = useState(false);
  const [tileShow, setTileShow] = useState(false);

  const editName = (id, editNameParam) => {
    setPlayers(players.map(player => player.id === id ? editNameParam : player));
  }

  const errorShow = () => {
      players.forEach(player=> {

        if(player.name === 'NAME' || player.name === '' && player.name === '')  {
          setErrMessage(true);
          setTileShow(false)
          
        }else {
          setTileShow(true)
          tile()
        } 
      })
      setTimeout(()=>setErrMessage(false), 1500)
  }
 
  const tile = () => {
    players.forEach(player => {
      if(player.name !== 'NAME' && player.name !== '') {
        
        <Tiles />
      }
    })
  }
  
  return (

    <div className='container'>

      <Header />

      <div className='player-container'>
        <Players players={players}  editName={editName} />
      </div>
      <button onClick={errorShow} type='button' className='new-game-btn'>Start</button>
      
      {errMessage && <p className='error-message'>Please enter the names of both players</p>}
              
      {/* {tileShow &&  players.map(player => (
          <Tiles player={player}  />
      ))} */}

        {tileShow && <Tiles players={players} />}
    </div>

  );
}



export default App;
