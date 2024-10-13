import { useEffect, useState } from "react"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import styles from "./styles.module.css"
import { getNews, getCategories } from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"
import Pagination from "../../components/Pagination/Pagination"
import Categories from "../../components/Categories/Categories"
import Search from "../../components/Search/Search"
import { useDebounce } from "../../helpers/useDebounce"



function Main() {
    const [news, setNews] = useState([])
    const [loding, setLoding] = useState(true)
    const [currentPuge, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [keywords, setKeywords] = useState('')
    const [selectrdCategories, setSelectrdCategories] = useState("All")
    const totalPage = 10
    const pageSize = 10
    const debounce = useDebounce(keywords, 1500)

    // console.log(keywords)

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
                    page_size: pageSize, 
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
