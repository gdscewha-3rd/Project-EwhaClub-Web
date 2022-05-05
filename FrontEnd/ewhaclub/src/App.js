import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "pages/main/index";
import Detail from "pages/detail/index";
import Result from "pages/result/index";
import styled from "styled-components";

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/club" component={Detail} />
      <Route path="/search" component={Result} />
    </Switch>
  );
}

export default AppRouter;
