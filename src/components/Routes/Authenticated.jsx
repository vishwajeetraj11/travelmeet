
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard';

export const AuthenticatedRoutes = () => {


  return (
    <div className='flex w-full h-screen overflow-y-hidden'>
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Redirect path='*' to='/dashboard' />
      </Switch>
    </div>
  );
};
