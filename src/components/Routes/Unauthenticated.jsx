
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Landing } from '../../pages/Landing';

export const UnauthenticatedRoutes = () => {
  return (
    <div className='flex w-full h-screen overflow-y-hidden'>
      <Switch>
        <Route path='/landing' exact component={Landing} />
        <Redirect path='*' to='/landing' />
      </Switch>
    </div>
  );
};
