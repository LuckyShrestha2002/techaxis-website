import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ContactUsPage } from './pages/ContactUs.page'; // 👈 import the new page

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactUsPage />, // 👈 new route
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
