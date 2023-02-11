import classNames from "classnames";
import React, { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={classNames(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
export default Button;
