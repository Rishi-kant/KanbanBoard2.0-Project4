import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import persistStore from "redux-persist/es/persistStore.js";
import {BrowserRouter} from "react-router-dom"
import { PersistGate } from "redux-persist/es/integration/react";

let persister =persistStore(store)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persister}>
      <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
