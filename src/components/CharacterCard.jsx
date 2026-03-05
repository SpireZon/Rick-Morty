import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({character}) { // character est la const qui recup toutes les datas d'api du [1]
  return (
    <Link to={`/character/${character.id}`}>
    <div>
        <div className="img-wrapper">
            <img src={character.image} alt="truc" />

        </div>
        <div>
            <h1>
                {character.name}
            </h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
        </div>

    </div>
    </Link>

  )
}

export default CharacterCard