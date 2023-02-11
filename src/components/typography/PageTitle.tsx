import { FC } from "react";
import styles from "./PageTitle.module.scss";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => <h1 className={styles.title}>{children}</h1>;
export default Title;
