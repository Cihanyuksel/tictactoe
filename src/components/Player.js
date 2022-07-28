import React, { useState, useEffect } from 'react';
import EditName from './EditName';

function Player({ player, editName }) {

  const [show, setShow] = useState(false);


  useEffect(() => {
    setShow(false);
}, [player.name])

  return (
    <>
      <div className='player'>
        <p>{player.number}</p>
        <p className='player-name'>{player.name}</p>
        <p>{player.id}</p>
        <button onClick={() => setShow(true)}  type='button'>Edit</button>

      </div>
      
        {show && <EditName
        thePlayer={player}
        editName={editName}
        show={show}
        setShow={setShow}    
      />}
    </>
  )
}

export default Player;

// onClick={() => setShow(true)}