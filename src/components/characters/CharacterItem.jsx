import React, { useState } from 'react'
import logo from '../../images/logo.png'

const CharacterItem = ({ character }) => {
    const cardStyleclick = {transform: "rotateY(180deg)"};
    const [cardStyle, setCardStyle] = useState({})
    return (
        <div className="card" onClick={()=>setCardStyle(cardStyleclick)} onBlur={()=>setCardStyle({})}>
            <div className="card-inner" style={cardStyle}>
                <div className="card-front">
                    <img src={character.img} alt="" />
                </div>
                <div className="card-back">
                    <h1>{character.name}</h1>
                    <hr/>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {character.portrayed}
                        </li>
                        <li>
                            <strong>Nick Name:</strong> {character.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {character.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {character.status}
                        </li>
                    </ul>
                    <img className="character-logo" src={logo} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
