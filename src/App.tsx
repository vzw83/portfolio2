import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Connect} from "./layout/sections/connect/Connect";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {Service} from "./layout/sections/services/Services";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <AboutMe/>
            <Service/>
            <Projects/>
            <Connect/>
        </div>
    );
}

export default App;
