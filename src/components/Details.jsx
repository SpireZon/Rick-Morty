import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/usefetch'

function Details() {
    const {id} = useParams()
    const {data,loading} = useFetch(`https://rickandmortyapi.com/api/character/${id}`) 
    console.log(id)
  return (
    <div>
        <img src={data.image} alt="" />
        <div className='Info'>
            <h1>{data.name}</h1>
            <p><strong>status : </strong>{data.status}</p>
            <p><strong>espèce : </strong>{data.species}</p>
            <p><strong>genre </strong>{data.gender}</p>
        </div>
    </div>
  )
}

export default Details
