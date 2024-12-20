import styles from "./styles.module.css"

interface PaginationProps {
    totalPage:number;
    handelNextPage: ()=> void;
    handelPreviousPage: ()=> void;
    handleClickPage: (param:number)=> void;
    currentPuge:number; 
}

function Pagination(props:PaginationProps) {

    const {totalPage,handelNextPage,handelPreviousPage,handleClickPage,currentPuge} = props
    return (
        <div className={styles.pagination}>
            <button
             className={styles.arrow}
             onClick={handelPreviousPage}
             disabled={currentPuge <= 1}
             >
                {'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPage)].map((_, index) => (
                    <button 
                    className={styles.pageNumber} 
                    disabled={index + 1 === currentPuge}
                    key={index}
                    onClick={() => handleClickPage(index + 1)}
                    > 

                    {index + 1}
                    
                    </button>
                ))}
            </div>

            <button className={styles.arrow}
            onClick={handelNextPage}
            disabled={currentPuge >= totalPage} 
            >{'>'}</button>

        </div>
    )
}

export default Pagination
