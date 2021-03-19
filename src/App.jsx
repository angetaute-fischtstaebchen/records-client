import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './auth/SignUp';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './components/GlobalStyle';
import { Home } from './home';
import { Login } from './auth/Login';
import { Records } from './records/Records';
import { Profile } from './userProfile/Profile';
import { RecordsProvider } from './context/recordsContext';
import { NotFound404 } from './notFound/NotFound404';

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/records'>
          <RecordsProvider>
            <Records />
          </RecordsProvider>
        </Route>
        <Route path='/profile' component={Profile} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  </>
);
