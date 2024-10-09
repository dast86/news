import { useEffect, useState } from "react"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import styles from "./styles.module.css"
import { getNews } from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"
import Pagination from "../../components/Pagination/Pagination"



function Main() {
    const [news, setNews] = useState([])
    const [loding, setLoding] = useState(true)
    const [currentPuge, setCurrentPage] = useState(1)
    const totalPage = 10
    const pageSize = 10

    const handelNextPage = ()=>{
        if (currentPuge < totalPage) {
            setCurrentPage(currentPuge + 1)
            console.log('heandelClickPlus')
        }
    }

    const handelPreviousPage = ()=>{
        if (currentPuge > 1) {
            console.log('heandelClickMinus')
            setCurrentPage(currentPuge - 1)
        }
    }
    const handleClickPage = (page)=>{
            setCurrentPage(page)
            console.log('clickPage')
        
    }




    const fetchNews = async (currentPuge) =>{
        try {
            setLoding(true)
            const response = await getNews(currentPuge, pageSize)
            setNews(response.news)
            setLoding(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchNews(currentPuge)
    },[currentPuge])

    return (
        <main className={styles.main}>
           {news.length>0 && !loding? <NewsBanner item={news[0]}/> : <Skeleton count={1} type="banner"/> }
           <Pagination 
           totalPage={totalPage} 
           handelNextPage={handelNextPage}
           handelPreviousPage={handelPreviousPage}
           handleClickPage={handleClickPage}
           currentPuge={currentPuge}
           />

           {loding ? <Skeleton count={10} type="item"/>: <NewsList news={news}/>}

           <Pagination 
           totalPage={totalPage} 
           handelNextPage={handelNextPage}
           handelPreviousPage={handelPreviousPage}
           handleClickPage={handleClickPage}
           currentPuge={currentPuge}
           />

        </main>



        

    )
}

export default Main
