import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './views/home';
import MyWorks from "./views/my-works";
import Studies from "./views/my-studies";
import About from "./views/about";

const Router = () => (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/my-works' element={<MyWorks/>}></Route>
        <Route path='/my-studies' element={<Studies/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
    
)

export default Router;