import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "pages/main";
import Detail from "pages/detail";
import Result from "pages/result";
import Error from "pages/404";

import Login from "pages/login";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={["/", "/category/:category?"]} component={Main} />
      <Route path="/club/:id" component={Detail} />
      <Route path="/search/:name" component={Result} />
      <Route path="/error" component={Error} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default AppRouter;
