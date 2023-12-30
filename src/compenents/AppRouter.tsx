import React from 'react';
import {Route, Routes} from "react-router-dom";
import ItemsPage from "../pages/ItemsPage/ItemsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Layout from "./Layout/Layout";
import ItemInfoPage from "../pages/ItemInfoPage/ItemInfoPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/items" element={<ItemsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/item/:id" element={<ItemInfoPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;