import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>;

    if(isEditing) {
        playerName = <input type="text" required value={name} />
    }

    return (
        <li>
            <span className="player">
                {playerName}
                {/* {!isEditing && <span className="player-name">{name}</span>}
                {isEditing && <input></input>}
                {!isEditing && <span className="player-symbol">{symbol}</span>}
                {isEditing && <input></input>} */}
            </span>
            {/* <button onClick={()=>{setIsEditing(true)}}>Edit</button> */}
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}