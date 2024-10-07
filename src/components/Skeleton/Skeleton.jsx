import styles from "./styles.module.css"



function Skeleton({ count = 1, type = "banner" }) {

    // Разобрать тут подробно с [...Array(count)].map((_, index)
    return (
        <>
            {count > 1 ?
                (<ul className={styles.list}>
                    {[...Array(count)].map((_, index) => (
                        <li key={index} className={type === "banner" ? styles.banner : styles.item}>
                        </li>
                    ))}
                </ul>) : <li className={type === "banner" ? styles.banner : styles.item}>
                </li>
            }
        </>
    )
}

export default Skeleton
