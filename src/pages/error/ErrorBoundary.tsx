import { Component } from "react";
import styles from "./ErrorBoundary.module.scss";

export interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * For catching runtime errors, and to displaying them without crashing the FE.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean; loading?: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
          <h1>Error happend on the client</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
