import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../src/Views/Home';
import Page404 from '../src/Views/Page404';
import Solicitud from '../src/Views/Solicitud';
import Login from '../src/Views/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './Views/Profile';
import OP from './Views/PartsOfficer';
import JA from './Views/AreaBoss';
import Admin from './Views/Admin';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path="/perfil">
          <Profile/>
        </Route>
        <Route path="/oficialiaPartes">
          <OP/>
        </Route>
        <Route path="/jefeArea">
          <JA/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route exact path="/solicitud/:type" component={Solicitud}/>
        <Route ath="*">
          <Page404/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
