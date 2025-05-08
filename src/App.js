//CSS
import "./App.css";
import "./styles/GlobalStyle.js";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//Router
import Router from "./routes/Router.js";

import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router></Router>
      </Provider>
    </>
  );
}

export default App;
