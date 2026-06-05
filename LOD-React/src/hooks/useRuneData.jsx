import {useState, useEffect} from "react"

export function useRuneData(){
    const [runes, setRunes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/runes')
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`)
            return res.json()
        })
        .then((data) => {

            console.log('Raw Data: ', data)

            let runesArray = [];
            if (Array.isArray(data)) {
                 runesArray = data;
        } 
            else if (data && Array.isArray(data.runes)) {
                runesArray = data.runes;
        }   
            else if (data && Array.isArray(data.data)) {
                runesArray = data.data;
        } 
            else {
          throw new Error('API response did not contain an array of runes.');
        }

        setRunes(runesArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching runes:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { runes, loading, error };
}