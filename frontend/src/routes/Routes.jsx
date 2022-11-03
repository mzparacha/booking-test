import { Navigate, useRoutes } from 'react-router-dom';
import { NotFound } from '../components';
import { Home, Filter, CreateBlog, HotelDetails } from '../pages';
import { MainLayout } from '../layout';
export default function Router () {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        { path: 'home', element: <Home /> },
        { path: 'filter', element: <Filter /> },
        { path: 'blog-create', element: <CreateBlog /> },
        { path: 'hotel/:id', element: <HotelDetails /> },
      ],
    },
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}