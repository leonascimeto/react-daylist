import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import QrCode from "../views/QrCode";
import Task from '../views/Task';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task" exact component={Task} />
        <Route path="/task/:_id" exact component={Task} />
        <Route path="/qrcode" exact component={QrCode} />

      </Switch>
    </BrowserRouter>
  )
}