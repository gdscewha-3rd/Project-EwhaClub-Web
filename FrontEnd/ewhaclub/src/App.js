import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Main from "pages/main";
import Detail from "pages/detail";
import Result from "pages/result";
import SignUp from "pages/signUp";
import Login from "pages/signin";
import Likes from "pages/likes";
import { AuthProvider } from "utils/auth";
import { RequiredAuth } from "utils/requiredAuth";

function AppRouter() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/likes" element={<Likes />} />
                <Route path="/club/:id" element={<Detail />} />
                <Route path="/search/:name" element={<Result />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path={"/category/:category?"} element={<Main />} />
                <Route exact path={"/"} component={<Main />} />
            </Routes>
        </AuthProvider>
    );
}

export default AppRouter;
