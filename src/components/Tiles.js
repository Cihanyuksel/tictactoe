import React from 'react'
import { useState } from 'react'
import Tile from './Tile'

const Tiles = ({players}) => {
  const {name} = players;
  console.log(name)
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""])
  const [turn, setTurn] = useState(players[0].name);
  const [winMessage, setWinMessage] = useState();
  const [drawMessage, setDrawMessage] = useState(false);


  const checkWin = () => {

    // row check
    if(tiles.slice(0,3).every(tile => tile === 'X') || (tiles.slice(0,3).every(tile => tile === 'O'))) {
      setWinMessage(true)
      return
    } 

    else if(tiles.slice(3,6).every(tile => tile === 'X') || (tiles.slice(3,6).every(tile => tile === 'O'))) {
      setWinMessage(true)
      return
    } 
    
    else if(tiles.slice(6,9).every(tile => tile === 'X') || tiles.slice(6,9).every(tile => tile === 'O') ) {
      setWinMessage(true)
      return
    } 

    // column check
    else if( (tiles[0] === 'X' && tiles[3] === 'X' && tiles[6] === 'X') || (tiles[0] === 'O' && tiles[3] === 'O' && tiles[6] === 'O')) {
      setWinMessage(true)
      return
    } 

    else if( (tiles[1] === 'X' && tiles[4] === 'X' && tiles[7] === 'X') || (tiles[1] === 'O' && tiles[4] === 'O' && tiles[7] === 'O')) {
      setWinMessage(true)
      return
    } 

    else if( (tiles[2] === 'X' && tiles[5] === 'X' && tiles[8] === 'X') || (tiles[2] === 'O' && tiles[5] === 'O' && tiles[8] === 'O')) {
      setWinMessage(true)
      return
    } 

    // diagonal check
    else if( (tiles[0] === 'X' && tiles[4] === 'X' && tiles[8] === 'X') || (tiles[0] === 'O' && tiles[4] === 'O' && tiles[8] === 'O')) {
      setWinMessage(true)
      return
    } 
    else if( (tiles[2] === 'X' && tiles[4] === 'X' && tiles[6] === 'X') || (tiles[2] === 'O' && tiles[4] === 'O' && tiles[6] === 'O')) {
      setWinMessage(true)
      return
    } 
    
    // draw
    else if (tiles.every(tile => tile !== "")) {
      setDrawMessage(true)
    } 
    
}

console.log(tiles)
const squares = tiles;

  const handleRes = () => {
    setTiles(squares.map(square => square = "" ))
    setDrawMessage(false)
    setWinMessage(false)
  }

  return (
    <div className='tile-container'>

    {winMessage &&
    <>
      <p className='win-message'> Won</p>
      <button onClick={() => handleRes(squares)} type='button' className='new-game-btn'>New Game</button>
    </> }

    {drawMessage && 
      <>
      <p className='win-message'>Draw</p>
      <button onClick={() => handleRes(squares)} type='button' className='new-game-btn'>New Game</button>
      </>
    }

    Turn's : {turn}

      <div className='tile-header'>

        {
          tiles.map((tile, tileIndex) => (
            <Tile 
            tile={tile}
            tileIndex={tileIndex} 
            tiles={tiles} 
            setTiles={setTiles} 
            turn={turn} 
            setTurn={setTurn} 
            players={players}
            checkWin={checkWin}
            winMessage={winMessage}
            drawMessage={drawMessage}
            />
          ))
        }
      </div>
    </div>
  )
}
export default Tiles