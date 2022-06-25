import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { RecruitmentContextProvider } from "./context/recruitment-context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <RecruitmentContextProvider>
            <App />
        </RecruitmentContextProvider>
    </Router>
);
