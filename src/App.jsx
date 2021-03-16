import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './auth/SignUp';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './components/GlobalStyle';

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
  </>
);
