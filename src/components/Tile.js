import React, { useEffect } from 'react'

const Tile = ({tileIndex, tiles, setTiles, turn, setTurn, players, checkWin, winMessage, drawMessage}) => {

  let btn = document.querySelector(`.tile-${tileIndex}`)

  let cells = [...tiles]
  const handleClick = (i) => {

    if(cells[i] !== '') {
      btn.classList.add('wrong');
      return
    }

    if(turn === players[0].name) {
      cells[i] = 'X';
      setTurn(players[1].name)

    } 
    else {
      cells[i] = 'O';
      setTurn(players[0].name)
    }

    setTiles(cells)
  }

  useEffect(()=> {
    checkWin()
  }, [tiles])
  
  return (

    <div>
      <button 
      id='tile-btn' 
      className= {`tile-${tileIndex}`} 
      onClick={() => handleClick(tileIndex)}
      disabled = {winMessage || drawMessage}
      >{cells[tileIndex]}</button>
    </div>
  )
}
export default Tile