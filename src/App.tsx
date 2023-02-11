import "assets/scss/index.scss";
import Content from "layout/content/Content";
import AwardsListPage from "pages/awards/list/AwardsListPage";
import { ErrorBoundary } from "pages/error/ErrorBoundary";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "store";

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Content>
          <AwardsListPage />
        </Content>
      </ErrorBoundary>
      <ToastContainer position="top-center" autoClose={5000} />
    </Provider>
  );
}

export default App;
