import { Category } from "models/category";
import { Nominee } from "models/nominee";
import { FC } from "react";
import NomineeCard from "../nominee/NomineeCard";
import styles from "./AwardCategory.module.scss";

interface AwardCategoryProps {
  category: Category;
}

export const AwardCategory: FC<AwardCategoryProps> = ({ category }) => {
  const { items: nominees, title } = category;

  return (
    <section>
      <div className={styles.categoryTitle}>
        <h1>{title}</h1>
      </div>

      <div className={styles.category}>
        {nominees.map((nominee: Nominee) => (
          <NomineeCard key={nominee.id} nominee={nominee} categoryId={category.id} />
        ))}
      </div>
    </section>
  );
};
export default AwardCategory;
