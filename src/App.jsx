import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Details from './components/Details'


function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/character/:id' element={<Details/>}/>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
