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
                <Route exact path={["/", "/category/:category?"]} component={Main} />
                <Route path="/club/:id" component={Detail} />
                <Route path="/search/:name" component={Result} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <RequiredAuth>
                    <Route path="/likes" component={Likes} />
                </RequiredAuth>
            </Routes>
        </AuthProvider>
    );
}

export default AppRouter;
