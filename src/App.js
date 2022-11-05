import React from "react";

import Intro from "./components/intro";
import Skills from "./components/skills";

import "./app.scss";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
        </div>
    );
};

export default App;
