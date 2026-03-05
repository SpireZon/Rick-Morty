import React from 'react'

function CharacterCard({character}) { // character est la const qui recup toutes les datas d'api du [1]
  return (
    <div>
        <div className="img-wrapper">
            <img src={character.image} alt="truc" />

        </div>
        <div>
            <h1>
                {character.name + " " + character.status}
            </h1>
        </div>

    </div>
  )
}

export default CharacterCard