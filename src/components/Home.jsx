import React from 'react'
import { useFetch } from '../hooks/usefetch';
import CharacterCard from './CharacterCard';

function Home() {
    const apiUrl = "https://rickandmortyapi.com/api/character"
    const {data,loading} = useFetch(apiUrl) 
    console.log(data);
  return (
        <>
      <div className="characterCard">
        {data && data.results && (
        <div>
            {data.results.map((character) => (
            <CharacterCard character={character} key={character.id}/>
            ))}
            
          </div>
          
        
        )}        

      </div>


    
    </>
  )
}

export default Home
