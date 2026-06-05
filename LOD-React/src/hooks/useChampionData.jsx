import {useState, useEffect} from "react"

export function useChampionData(url){
    const [data, setData] = useState(null)
    useEffect(() => {
        if (url){
            let ignore = false

            fetch(url)
            .then(response => response.json())
            .then(champion =>{
                if(!ignore){
                    setData(champion)
                }
            })
            return () => {
                ignore = true
            }
        }
    }, [url])
    return data
}