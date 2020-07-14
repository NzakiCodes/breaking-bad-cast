import React from 'react'

const CharacterItem = ({ character }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={character.img} alt="" />
                </div>
                <div className="card-back">
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {character.name}
                        </li>
                        <li>
                            <strong>Nick Name:</strong> {character.nickname}
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
