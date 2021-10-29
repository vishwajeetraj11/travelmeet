
import { useAuth0 } from '@auth0/auth0-react';
import React, {  useEffect, useState } from 'react';
import { Loader } from '../Loader';
import { AuthenticatedRoutes } from './Authenticated';
import { UnauthenticatedRoutes } from './Unauthenticated';

export const Routes= () => {
  const [authenticated, setAuthenticated] = useState(false);
  const { user: userAith0, isAuthenticated, getAccessTokenSilently, user, isLoading } = useAuth0();
 
  useEffect(() => {
    if (isAuthenticated) {
      // if ((user && !(location.pathname === '/edit-profile') || !isLoading)) {
      (async () => {
        try {
          const token = await getAccessTokenSilently();
          // const { data } = await axios({
          //   url: `${baseURL}${endpoints.profile}`,
          //   method: 'GET',
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   }
          // });
          // const username = data?.user?.username;
          // const firstName = data?.user?.firstName;
          // const lastName = data?.user?.lastName;
          // if (!username || !firstName || !lastName) {
          //   history.push('/create-profile');
          //   setAppLoading(false);
          // } else {
            // dispatch(setUserProfile(data.user));
            setAuthenticated(true);
            // setAppLoading(false);
            // setUser(data.user);
          // }
        } catch (e) {
          // if (!(location.pathname === '/')) {
          //   showError('Could not fetch your profile. Please try again sometime later.', 'Profile Error');
          // }
        } finally {
          // setAppLoading(false);
        }
      })();
    }
    // else {
    //   setAppLoading(false);
    // }
  }, [userAith0, getAccessTokenSilently, user, isLoading, isAuthenticated]);

  if (isLoading) return <Loader fullScreen />;


  return (
    <>
      {authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes setAuthenticated={setAuthenticated} />}
    </>
  );
};
