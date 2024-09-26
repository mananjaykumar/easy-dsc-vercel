/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard';
import { ErrorBoundary } from '../components/reusable/ErrorBoundary';
import { Layout } from '../components/layout';
import MainBody from '../components/reusable/MainWrappers/MainBody';
import LoadingPage from '../pages/LoadingPage';
import { NoMatch } from '../pages/NoMatch';
import * as navLinks from './constants';
import Login from '../pages/Login';
import Services from '../pages/Services';
// import useAuth from '../hooks/useAuth';
import Home from '../components/Home/Home';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Stack } from '@mui/material';
import Protected from './Protected';
import Documents from '../components/Documents';
import Admin from '../components/Admin';
import UploadDocuments from '../components/Admin/Uploads/UploadDocuments';
import LoadingBar from 'react-top-loading-bar';

interface Props {
  children: React.ReactNode;
}
const HOC = ({ children }: Props) => {
  const { progress } = useSelector((state: any) => state.progress);
  return (
    <Layout>
      <LoadingBar color='#0726A1' progress={progress} height={3} />
      <MainBody>{children}</MainBody>
    </Layout>
  );
};
// const HOCAdmin = ({ children }: Props) => {
//   return (
//     <Layout>
//       <MainBody>{children}</MainBody>
//     </Layout>
//   );
// };

export const Navigation = () => {
  // const { token, login, logout } = useAuth();
  const { userData } = useSelector((state: RootState) => state.auth);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        {/* <HOC>
          <Routes>
            <Route path={routes.ROOT} element={<Home />} />
            {userData?.token ? (
              <>
                <Route path={routes.LOGIN} element={<Navigate to={routes.DASHBOARD} />} />
                <Route path={routes.SIGNUP} element={<Navigate to={routes.DASHBOARD} />} />
                <Route path={routes.DASHBOARD} element={<Dashboard />} />
                <Route path={routes.SERVICES('accounting')} element={<Services />} />
                <Route path={routes.SERVICES('it-returns')} element={<Services />} />
                <Route path={routes.SERVICES('trading')} element={<Services />} />
                <Route path='*' element={<NoMatch />} />
              </>
            ) : (
              <Route path='*' element={<Login />} />
            )} */}
        {/* <Route path='*' element={<NoMatch />} /> */}
        {/* </Routes>
        </HOC> */}
        <Stack mt={location.pathname.includes('admin') ? '90px' : '130px'}>
          <Routes>
            <Route
              path='/'
              element={
                <HOC>
                  <Home />
                </HOC>
              }
            />
            <Route
              element={
                <Protected
                  redirectPath={navLinks.ROOT}
                  isAllowed={userData?.token ? false : true}
                />
              }
            >
              <Route
                path={navLinks.LOGIN}
                element={
                  <HOC>
                    <Login />
                  </HOC>
                }
              />
              <Route
                path={navLinks.SIGNUP}
                element={
                  <HOC>
                    <Login />
                  </HOC>
                }
              />
            </Route>
            {/* <Route path={navLinks.ADMIN_ROOT} element={<Admin />} /> */}
            <Route
              element={
                <Protected
                  redirectPath={navLinks.LOGIN}
                  isAllowed={
                    userData?.token ? true : false
                    // &&
                    // (userData?.role?.includes('user') ? true : false)
                  }
                />
              }
            >
              <Route
                path={navLinks.DASHBOARD}
                element={
                  <HOC>
                    <Dashboard />
                  </HOC>
                }
              />
              <Route
                path={navLinks.SERVICES('accounting')}
                element={
                  <HOC>
                    <Services />
                  </HOC>
                }
              />
              <Route
                path={navLinks.SERVICES('it-returns')}
                element={
                  <HOC>
                    <Services />
                  </HOC>
                }
              />
              <Route
                path={navLinks.SERVICES('trading')}
                element={
                  <HOC>
                    <Services />
                  </HOC>
                }
              />
              <Route
                path={navLinks.DOCUMENTS}
                element={
                  <HOC>
                    <Documents />
                  </HOC>
                }
              />
            </Route>

            <Route
              element={
                <Protected
                  redirectPath={navLinks.ROOT}
                  isAllowed={
                    (userData?.token ? false : true) ||
                    (userData?.role?.includes('user') ? true : false)
                  }
                />
              }
            >
              <Route
                path={navLinks.ADMIN_LOGIN}
                element={
                  <HOC>
                    <Admin />
                  </HOC>
                }
              />
            </Route>

            <Route
              element={
                <Protected
                  redirectPath={navLinks.ADMIN_LOGIN}
                  isAllowed={
                    (userData?.token ? true : false) &&
                    (userData?.role?.includes('admin') ? true : false)
                  }
                />
              }
            >
              <Route
                path={navLinks.ADMIN_UPLOAD_DOCUMENTS}
                element={
                  <HOC>
                    <UploadDocuments />
                  </HOC>
                }
              />
            </Route>
            <Route
              path='*'
              element={
                <HOC>
                  <NoMatch />
                </HOC>
              }
            />
          </Routes>
        </Stack>
      </Suspense>
    </ErrorBoundary>
  );
};
