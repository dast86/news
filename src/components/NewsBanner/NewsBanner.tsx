import { FC } from "react"
import { formatTimeAgo } from "../../helpers/formatTimeAgo"
import withSkeleton from "../../helpers/hoc/withSkeleton"
import Image from "../Image/Image"
import styles from "./styles.module.css"
import { BannerAndNewsItem } from "../../interface"


 interface NewsBannerProps {
    item: BannerAndNewsItem 
  }

const NewsBanner:FC<NewsBannerProps> = ({ item }) => {

    return (
        <div className={styles.banner}>
            <Image image={item?.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner,'banner', 1)

export default NewsBannerWithSkeleton
