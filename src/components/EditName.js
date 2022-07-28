import {useState } from 'react';
import '../App.css';

function EditName ({ thePlayer, editName, setShow}) {

    const player = thePlayer;
    const id = player.id;

    const [name, setName] = useState(thePlayer.name);
    const [number] = useState(thePlayer.number);

    const updatedPlayer = {id, name, number};

    const handleClick = () => {
        editName(id, updatedPlayer);
    }

    return (
        
     <> 
            <div className="popup-container">
            <div className="popup">
                <h3>Enter Player Information</h3>
                <label htmlFor='player-name'>Player Name</label>
                <input 
                    type='text' 
                    id="player-name"
                    onChange={e => setName((e.target.value).toUpperCase().trim())}
                    placeholder = 'Enter Your Name'
                    maxLength= '15'
                    required
                    >    
                </input>
                <div className="btn-edit">
                    <button onClick={() => setShow(false)} type='button' className="close">Close</button>
                    <button onClick={handleClick}  type='button' className="approve">Approve</button>
                </div>
                <button onClick={() => setShow(false)} type='button' className='close-2'>X</button>
            </div>
        </div>
    </> 
    )
}

export default EditName;