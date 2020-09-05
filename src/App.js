import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './comnponent/home';
import SinleChanel from "./comnponent/singlechanel";
import { Switch } from "react-router-dom";
import CenteredTabs from "./comnponent/tab";
import { Tab } from '@material-ui/core';

function App() {
  return (
   <div>
     <Switch>
       <Route exact path="/" component={CenteredTabs} />
     </Switch>
   </div>
  );
}

export default App;
