import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import SiteLayout from './components/layouts/site';
//
import Login from './components/pages/Login';
import NotFound from './components/pages/Page404';
import Home from './components/pages/Home';
import Doctor from './components/pages/Doctor';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      // path: '/dashboard',
      element: <SiteLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'doctor', element: <Doctor /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: '404',
      element: <NotFound />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
