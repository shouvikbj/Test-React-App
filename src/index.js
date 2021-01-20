import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Routes from "./Routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.register();
