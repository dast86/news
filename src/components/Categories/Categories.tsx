import { FC } from "react";
import styles from "./styles.module.css";

interface CategoriesProps  {
  categories :string[]; 
  setSelectrdCategories: (category:string) => void;
  selectrdCategories: string;
}

const Categories:FC<CategoriesProps> = ({ categories, setSelectrdCategories, selectrdCategories }) => {
  const allCategories = ["All", ...categories];
  return (
    <div className={styles.categories}>
      {allCategories.map((categor) => (
        <button
          key={categor}
          onClick={() => setSelectrdCategories(categor)}
          className={
            selectrdCategories === categor ? styles.active : styles.item
          }
        >
          {categor}
        </button>
      ))}
    </div>
  );
}

export default Categories;
