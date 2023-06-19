import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import RootStore from "./RootStore";
import App from "./App";

const rootStore = new RootStore();
const render = () => {
    ReactDOM.render(
        <Provider rootStore={rootStore}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
};

render();
