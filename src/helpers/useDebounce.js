import { useEffect, useState } from "react"


export const useDebounce = (value, deplay) => {
    const [debounceValue, setDebounceValue] = useState('');


    useEffect(() => {

        const handler = setTimeout(() => {
            setDebounceValue(value)

        }, deplay)


        return () => { clearTimeout(handler) }
    }, [value, deplay])

    return debounceValue


}