import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './auth/SignUp';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './components/GlobalStyle';
import { Login } from './auth/Login';
import { Records, Profile } from './user';
import { RecordsProvider } from './context/recordsContext';
import { Home } from './components/Home';
import { NotFound404 } from './components/NotFound404/NotFound404';

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/records'>
          <RecordsProvider>
            <Records />
          </RecordsProvider>
        </Route>
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound404} />
      </Switch>
    </Router>
  </>
);
