import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Test from "./Test";
import Home from "Home";

export default class App extends React.Component {
 
    render = () => {
     
        return (
            <div className="App">
                <h1>hello World!!</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/About" element={<About/>}></Route>
                        <Route path="/Test" element={<Test/>}></Route>
                        <Route path="/Home" element={<Home/>}></Route>
                        <Route path="/" element={<Home/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    };
}
