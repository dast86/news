import styles from "./styles.module.css"



function Search({keywords,setKeywords}) {

    return (
     <div className={styles.search}>
        <input type="text" className={styles.input} value={keywords} onChange={(e) =>setKeywords(e.target.value) } />
     </div>
    )
}

export default Search
