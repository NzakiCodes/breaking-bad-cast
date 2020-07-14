import React from 'react'
import Spinner from '../../images/spinner.gif';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ? (
        <div className="center">
            <img src={Spinner} alt='' />
        </div>
    ) : (
            <section className="box">
                {characters.map(character => (
                    <CharacterItem key={character.char_id} character={character}/>
                ))}

            </section>
        )
}

export default CharacterGrid
