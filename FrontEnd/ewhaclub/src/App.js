import React from "react";

import { Route, Routes } from "react-router-dom";
import Main from "pages/main";
import Detail from "pages/detail";
import Result from "pages/result";
import SignUp from "pages/signUp";
import Login from "pages/signin";
import Likes from "pages/likes";
import { AuthProvider } from "context/auth";
import RequiredAuth from "utils/requiredAuth";


function AppRouter() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<RequiredAuth />}>
          <Route path="/likes" element={<Likes />} />
        </Route>
        <Route path="/club/:id" element={<Detail />} />
        <Route path="/search/:name" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path={"/category/:category"} element={<Main />} />
        <Route path={"/"} element={<Main />} exact="true" />
      </Routes>
    </AuthProvider>
  );
}

export default AppRouter;
