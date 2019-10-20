import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/MainPage';
import Index from './components/IndexPage';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/main" component={Main} />
          <Route exact path="/" component={Index} />
          <Route path="/details" component={Details} />

        </Switch>
    </BrowserRouter>
  );
}
export default App;