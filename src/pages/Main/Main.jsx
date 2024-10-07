import { useEffect, useState } from "react"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import styles from "./styles.module.css"
import { getNews } from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"



function Main() {
    const [news, setNews] = useState([])
    const [loding, setLoding] = useState(true)


    useEffect(()=>{
        const fetchNews = async () =>{
            try {
                setLoding(true)
                const response = await getNews()
                setNews(response.news)
                setLoding(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    },[])

    return (
        <main className={styles.main}>
           {news.length>0 && !loding? <NewsBanner item={news[0]}/> : <Skeleton count={1} type="banner"/> }

           {loding ? <Skeleton count={10} type="item"/>: <NewsList news={news}/>}
        </main>

    )
}

export default Main
