import { FC } from "react";
import styles from "./styles.module.css"

interface SearcgProps {
    keywords: string; 
    setKeywords: (event:string) => void
}

const Search:FC<SearcgProps> = ({keywords,setKeywords}) => {

    return (
     <div className={styles.search}>
        <input type="text" className={styles.input} value={keywords} onChange={(e) =>setKeywords(e.target.value) } />
     </div>
    )
}

export default Search
