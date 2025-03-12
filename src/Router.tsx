import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Homepage } from './features/homepage/homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  },
]);

export const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}