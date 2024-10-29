
import withSkeleton from "../../helpers/hoc/withSkeleton"
import { BannerAndNewsItem } from "../../interface"
import NewsItem from "../NewsItem/NewsItem"
import styles from "./styles.module.css"

interface NewsListProps {
    news: BannerAndNewsItem[]
} 

function NewsList({ news }:NewsListProps) {

    return (
        <ul className={styles.list}>
            {news.map(item => {
                return <NewsItem key={item.id} item={item}/>
            })}
        </ul>
    )
}

const NewsListWithSkeleton = withSkeleton(NewsList,'item', 10)


export default NewsListWithSkeleton


