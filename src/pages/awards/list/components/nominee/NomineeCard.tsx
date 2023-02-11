import classNames from "classnames";
import Button from "components/ui/button/Button";
import { Nominee } from "models/nominee";
import { FC, useCallback } from "react";
import { RootState, useAppDispatch, useAppSelector } from "store";
import styles from "./NomineeCard.module.scss";

interface NomineeProps {
  nominee: Nominee;
  categoryId: string;
}

export const NomineeCard: FC<NomineeProps> = ({ nominee, categoryId }) => {
  const dispatch = useAppDispatch();
  const { selectedNominees } = useAppSelector((state: RootState) => state.award);

  const isNomineeSelected = useCallback(
    () => selectedNominees.some(selectedNominee => selectedNominee.nomineeId === nominee.id),
    [nominee.id, selectedNominees]
  );

  const handleSelectClick = useCallback(() => {
    if (isNomineeSelected()) {
      dispatch.award.unselectNominee(nominee);
      return;
    }

    dispatch.award.selectNominee({ categoryId, nomineeId: nominee.id });
  }, [categoryId, dispatch.award, isNomineeSelected, nominee]);

  return (
    <div
      className={classNames(styles.nominee, {
        [styles.selected]: isNomineeSelected()
      })}
    >
      <h2 className={styles.title}>{nominee.title}</h2>

      <img className={styles.image} src={nominee.photoUrL} alt={nominee.title} />

      <Button onClick={handleSelectClick} className={styles.selectButton}>
        {`${isNomineeSelected() ? "Unselect" : "Select"}`}
      </Button>
    </div>
  );
};
export default NomineeCard;
