import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/MainPage';
import Index from './components/IndexPage';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/main" component={Main} />
          <Route exact path="/" component={Index} />

        </Switch>
    </BrowserRouter>
  );
}
export default App;