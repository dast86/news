import { useEffect, useState } from "react"
import NewsBannerWithSkeleton  from "../../components/NewsBanner/NewsBanner"
import styles from "./styles.module.css"
import { getNews, getCategories } from "../../api/apiNews"
import NewsListWithSkeleton from "../../components/NewsList/NewsList"
import Pagination from "../../components/Pagination/Pagination"
import Categories from "../../components/Categories/Categories"
import Search from "../../components/Search/Search"
import {useDebounce} from "../../helpers/hooks/useDebounce"
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants"



function Main() {
    const [news, setNews] = useState([])
    const [loding, setLoding] = useState(true)
    const [currentPuge, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [keywords, setKeywords] = useState('')
    const [selectrdCategories, setSelectrdCategories] = useState("All")
    const debounce = useDebounce(keywords, 1500)


    const handelNextPage = ()=>{
        if (currentPuge < TOTAL_PAGE) {
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

    const fetcCategories= async () =>{
        try {
            const response = await getCategories()
            setCategories(["All", ...response.categories])
        } catch (error) {
            console.log(error)
        }
    }

    const fetchNews = async (currentPuge) =>{
        try {
            setLoding(true)  
            const response = await getNews(
                {
                    page_number: currentPuge, 
                    page_size: PAGE_SIZE, 
                    category: selectrdCategories === "All" ? null :selectrdCategories,
                    keywords: keywords,
                }
            )
            setNews(response.news)
            setLoding(false)
        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(()=>{
        fetchNews(currentPuge)
    },[currentPuge, selectrdCategories,debounce])
    
        useEffect(()=>{
            fetcCategories()
        },[])
    
    return (
        <main className={styles.main}>
            <Search keywords={keywords} setKeywords={setKeywords} />
            <Categories
             selectrdCategories={selectrdCategories}  
             setSelectrdCategories={setSelectrdCategories}
             categories={categories}
             />

           {/* {news.length>0 && !loding? <NewsBanner item={news[0]}/> : <Skeleton count={1} type="banner"/> } */}

           <NewsBannerWithSkeleton item={news.length>0 && news[0]} loding={loding}/>
           
           
           <Pagination 
           totalPage={TOTAL_PAGE} 
           handelNextPage={handelNextPage}
           handelPreviousPage={handelPreviousPage}
           handleClickPage={handleClickPage}
           currentPuge={currentPuge}
           />

            <NewsListWithSkeleton loding={loding} news={news}/>
           {/* {loding ? <Skeleton count={10} type="item"/>: <NewsList news={news}/>} */}

           <Pagination 
           totalPage={TOTAL_PAGE} 
           handelNextPage={handelNextPage}
           handelPreviousPage={handelPreviousPage}
           handleClickPage={handleClickPage}
           currentPuge={currentPuge}
           />

        </main>



        

    )
}

export default Main
