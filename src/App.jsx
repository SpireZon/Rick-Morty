import './App.css'
import CharacterCard from './components/CharacterCard'
import { useFetch } from './hooks/usefetch'



function App() {
  const apiUrl = "https://rickandmortyapi.com/api/character/1"
  const {data,loading} = useFetch(apiUrl)
  console.log(data);
  return (
    <>
      <div className="characterCard">
        {data &&(
          <div>
            <CharacterCard character={data}/>
          </div>
          
        
        )}        

      </div>


    
    </>
  )
}

export default App
