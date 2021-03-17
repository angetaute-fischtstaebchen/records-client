import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './auth/SignUp';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './components/GlobalStyle';
import { Home } from './home';
import { Login } from './auth/Login';
import { Records } from './records/Records';
import { Profile } from './userProfile/Profile';

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/records' component={Records} />
        <Route path='/profile' component={Profile} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </>
);
