import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../src/Views/Home';
import Login from '../src/Views/Login';
import Page404 from '../src/Views/Page404';
import Solicitud from '../src/Views/Solicitud';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './Views/Profile';
import Success from './Views/Success';

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
        <Route path="/registro/enviado/exitoso">
          <Success exitoso={true}/>
        </Route>
        <Route path="/registro/enviado/fallido">
          <Success exitoso={false}/>
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
