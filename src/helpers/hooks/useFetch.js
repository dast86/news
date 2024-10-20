import { useEffect, useState } from "react"

export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null)
    const [loding, setLoding] = useState(true)
    const [error, setError] = useState(null)
    
    // для того, что бы в useEffect было проще сравнивать параметр params, то его нужно перобразовать в строку, ведь это у нас объект
    const stringParams = params ? new URLSearchParams(params).toString(): ""; 

    useEffect(()=>{
        (async()=> {
            try {
                setLoding(true)
                const result = await fetchFunction(params)

                setData(result)
            } catch (error) {
                setError(error)
            }
            finally {
                setLoding(false)
            }
        })();
    },[fetchFunction,stringParams]);
    return {data, loding, error}
}