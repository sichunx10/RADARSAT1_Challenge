import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/MainPage';
import Infor from './components/InforPage';


const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/infor" component={Infor} />

        </Switch>
    </BrowserRouter>
  );
}
export default App;