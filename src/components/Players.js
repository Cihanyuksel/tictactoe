// import EditName from "./EditName";
import Player from "./Player";

function Players({ players, show, setShow, editName }) {
    
    return (
        
    <>
        {
            players.map(player => 
                
                <Player 
                    key={player.id}
                    player={player}
                    setShow={setShow} 
                    show={show}
                    editName={editName}
                />
            )
        }
    </>
    )
}

export default Players;