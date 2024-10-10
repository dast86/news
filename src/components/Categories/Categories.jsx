import styles from "./styles.module.css"



function Categories({categories,setSelectrdCategories, selectrdCategories}) {

    return (
        <div className={styles.categories}>
            {categories.map((categor)=>(
                <button 
                key={categor}
                onClick={()=>setSelectrdCategories(categor)}
                className={selectrdCategories === categor ? styles.active : styles.item }
                >
                    {categor}
                </button>
            ))}

        </div>
    )
}

export default Categories
