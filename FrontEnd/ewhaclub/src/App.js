import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "pages/main/index";
import Detail from "pages/detail/index";
import Result from "pages/result/index";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={["/", "/category/:category?"]} component={Main} />
      <Route path="/club/:id" component={Detail} />
      <Route path="/search/:name" component={Result} />
    </Switch>
  );
}

export default AppRouter;
