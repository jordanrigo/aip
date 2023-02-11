import { ModalUtils } from "hooks/useModalUtils";
import { FC, useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

interface ModalProps extends Omit<ModalUtils, "open"> {
  title: string;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ title, isVisible, close, children }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isVisible) {
      closeButtonRef?.current?.focus();
    }
  }, [isVisible]);

  return isVisible ? (
    <div className={styles.modal} role={"dialog"} aria-labelledby="modal-title">
      <div className={styles.content}>
        <div className={styles.modalHeader}>
          <h1 id="modal-title">{title}</h1>

          <button ref={closeButtonRef} role={"button"} aria-label="Close" className={styles.close} onClick={close}>
            &times;
          </button>
        </div>

        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Modal;
