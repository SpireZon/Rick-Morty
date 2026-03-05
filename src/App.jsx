import './App.css'
import CharacterCard from './components/CharacterCard'
import { useFetch } from './hooks/usefetch'



function App() {
  const apiUrl = "https://rickandmortyapi.com/api/character"
  const {data,loading} = useFetch(apiUrl) 
  console.log(data);
  return (
    <>
      <div className="characterCard">
        {data && data.results && (
          <div>
            {data.results.map((character) => (
              <CharacterCard character={character}/>
            ))}
            
          </div>
          
        
        )}        

      </div>


    
    </>
  )
}

export default App
