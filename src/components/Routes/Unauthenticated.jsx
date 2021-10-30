
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BasicProfile from '../../pages/BasicProfile';
import { Landing } from '../../pages/Landing';

export const UnauthenticatedRoutes = ({setAuthenticated}) => {
  return (
    <div className='flex w-full h-screen overflow-y-hidden'>
      <Switch>
        <Route path='/landing' exact component={Landing} />
      <Route path='/create-profile' exact component={(props) => <BasicProfile setAuthenticated={setAuthenticated} {...props} />} />
        <Redirect path='*' to='/landing' />
      </Switch>
    </div>
  );
};
