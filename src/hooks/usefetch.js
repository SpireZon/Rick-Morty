import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)

  console.log(url)
    useEffect(() => {
      const fetchData = async() => {
        setLoading(true)
        try {
            const response = await fetch(url)
            console.log(response)
            if (!response.ok) throw new Error("Erreur réseau !")
            const json = await response.json()
          console.log()      
        setData(json) 
                                    // !response veux dire reponse barre
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)}
            
            
        
      }
  
      fetchData();




    }, [url])

return {data, loading}    
}

