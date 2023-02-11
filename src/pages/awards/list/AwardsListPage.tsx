import "react-toastify/dist/ReactToastify.min.css";
import Title from "components/typography/PageTitle";
import Button from "components/ui/button/Button";
import Modal from "components/ui/modal/Modal";
import { useModalUtils } from "hooks/useModalUtils";
import { Category } from "models/category";
import { FC, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "store";
import styles from "./AwardsListPage.module.scss";
import AwardCategory from "./components/category/AwardCategory";

export const AwardsListPage: FC = () => {
  const { open, ...modalUtils } = useModalUtils();
  const { categories, selectedNominees } = useAppSelector((state: RootState) => state.award);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch.award.getCategories();
  }, [dispatch.award]);

  return (
    <div>
      <Title> AWARDS 2021</Title>

      {categories.map((category: Category) => (
        <AwardCategory key={category.id} category={category} />
      ))}

      <div className={styles.buttonContainer}>
        <Button onClick={open} className={styles.submitButton} disabled={!selectedNominees.length}>
          Submit ballot
        </Button>
      </div>

      <Modal title="SUCCESS!" {...modalUtils} />
    </div>
  );
};
export default AwardsListPage;
