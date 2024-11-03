import { useState } from "react"
import NewsBannerWithSkeleton from "../../components/NewsBanner/NewsBanner"
import styles from "./styles.module.css"
import { getCategories } from "../../api/apiNews"
import NewsListWithSkeleton from "../../components/NewsList/NewsList"
import Pagination from "../../components/Pagination/Pagination"
import Categories from "../../components/Categories/Categories"
import Search from "../../components/Search/Search"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants"
import { useFetch } from "../../helpers/hooks/useFetch"
import { useGetNewsQuery } from "../../store/services/newsApi"







function Main() {
    const [currentPuge, setCurrentPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [selectrdCategories, setSelectrdCategories] = useState("All")
    const debounce = useDebounce(keywords, 1500)

// Тут мы импортировали наш RTK Query и указали в нем параметры, которые он должен прнимать
    const { data, error, isLoading:loding } = useGetNewsQuery({
        page_number: currentPuge,
        page_size: PAGE_SIZE,
        category: selectrdCategories === "All" ? null : selectrdCategories,
        keywords: debounce,
    })




    const { data: dataCategories } = useFetch(getCategories)


    const handelNextPage = () :void => {
        if (currentPuge < TOTAL_PAGE) {
            setCurrentPage(currentPuge + 1)
        }
    }

    const handelPreviousPage = () : void => {
        if (currentPuge > 1) {
            setCurrentPage(currentPuge - 1)
        }
    }
    const handleClickPage = (page:number) :void => {
        setCurrentPage(page)

    }


    return (
        <main className={styles.main}>
            <Search keywords={keywords} setKeywords={setKeywords} />
           {dataCategories ? <Categories
                selectrdCategories={selectrdCategories}
                setSelectrdCategories={setSelectrdCategories}
                categories={dataCategories.categories}
            />: null}

            <NewsBannerWithSkeleton item={data?.news[0] || { author: "", title: "", image: "", published: "", id: "" }} loding={loding} /> 
            


            <Pagination
                totalPage={TOTAL_PAGE}
                handelNextPage={handelNextPage}
                handelPreviousPage={handelPreviousPage}
                handleClickPage={handleClickPage}
                currentPuge={currentPuge}
            />

            <NewsListWithSkeleton loding={loding} news={data?.news || [] } />

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
