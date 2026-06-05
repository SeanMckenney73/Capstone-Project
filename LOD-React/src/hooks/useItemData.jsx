import {useState, useEffect} from "react"

export function useItemData(){
    const [groupedItems, setGroupedItems] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${API_URL}/api/items`)
        .then((res) => {
            if (!res.ok) throw new Error('The Poros have ransacked the shop')
            return res.json()
        })
        .then((data) => {

            console.log('Raw Data: ', data)

            let itemsArray = [];
            if (Array.isArray(data)) {
                 itemsArray = data;
        } 
            else if (data && Array.isArray(data.items)) {
                itemsArray = data.items;
        }   
            else if (data && Array.isArray(data.data)) {
                itemsArray = data.data;
        } 
            else {
          throw new Error('API response did not contain an array of items.');
        }

            const groups = itemsArray.reduce((acc, item) => {
                const type = item.itemType
                if (!acc[type]) acc[type] = []
                acc[type].push(item)
                return acc
            }, {})
            setGroupedItems(groups)
            setLoading(false)
        })
        .catch((err) => {
            console.error('Error fetching items: ', err)
            setError(err.message)
            setLoading(false)
        })
    }, [])

    return { groupedItems, loading, error}
}