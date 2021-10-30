
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard';
import Explore from '../../pages/Explore';
import Messages from '../../pages/Messages';
import People from '../../pages/People';

export const AuthenticatedRoutes = () => {


  return (
    <div className=''>
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/explore' exact component={Explore} />
        <Route path='/message' exact component={Messages} />
        <Route path='/people' exact component={People} />
        <Route path='/profile' exact component={Dashboard} />

        <Redirect path='*' to='/dashboard' />
      </Switch>
    </div>
  );
};
