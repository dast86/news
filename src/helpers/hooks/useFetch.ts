import { useEffect, useState } from "react"

// Описываю что будет возвращать fetchFunction
interface FetchFunction <P, T> {
    (params?: P): Promise <T>
}

interface UseFetchResult <T>{ 
    data: T | null | undefined;
    loding: boolean;
    error: Error | null; 
}


export const useFetch = <T,P>(fetchFunction:FetchFunction<P, T>, params?:P) :UseFetchResult<T>=>{
    const [data, setData] = useState<T | null>(null)
    const [loding, setLoding] = useState<boolean>(true)
    const [error, setError] = useState <Error | null>(null)
    
    // для того, что бы в useEffect было проще сравнивать параметр params, то его нужно перобразовать в строку, ведь это у нас объект
    const stringParams = params ? new URLSearchParams(params).toString(): ""; 

    useEffect(()=>{
        (async()=> {
            try {
                setLoding(true)
                const result = await fetchFunction(params)

                setData(result)
            } catch (error) {
                setError(error as Error)
            }
            finally {
                setLoding(false)
            }
        })();
    },[fetchFunction,stringParams]);
    return {data, loding, error}
}