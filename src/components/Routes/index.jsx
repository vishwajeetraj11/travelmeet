
import React, {  useState } from 'react';
import { AuthenticatedRoutes } from './Authenticated';
import { UnauthenticatedRoutes } from './Unauthenticated';

export const Routes= () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      {authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes setAuthenticated={setAuthenticated} />}
    </>
  );
};
