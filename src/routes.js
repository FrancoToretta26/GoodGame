import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Project1 from './pages/Project1';
import ProjectGame from './pages/ProjectGame';
import ProjectGameClient from './pages/ProjectGameClient';
import PaymentPage from "./components/paymentGameTesting/PaymentPage";
import PaymentFeedback from "./components/paymentGameFeedback/PaymentPage";
import PaymentSuscribe from "./components/paymentSuscribe/PaymentPage";
import ProjectFeedbackGamer from './pages/ProjectFeedbackGamer';
import DashboardAppTester from './pages/DashboardAppTester';
import DashboardLayoutTester from './layouts/dashboardTester';
import Feedback from './pages/GameFeedback';
import BugReport from './pages/BugReport';
import FeedbackGamer from './pages/FeedbackGamer'
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'products', element: <Products /> },
        { path: 'products/newProject', element: <Project1 /> },
        { path: 'products/newProject/GameFeedback', element: <Feedback/>},
        { path: 'app', element: <DashboardApp /> },
        { path: 'payment', element: <PaymentPage />},
        { path: 'paymentFeedback', element: <PaymentFeedback />},
        { path: 'user', element: <User /> },
        { path: 'blog', element: <Blog /> }
      ]
    },


    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> }
      ]
    },
    {
      path: '/products',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'CasinoRoyale', element: <ProjectGame /> },
        { path: 'CasinoRoyale/Report1', element: <BugReport /> }
      ]
    },
    {
      path: '/products',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'CasinoRoyale', element: <ProjectGame /> },
        { path: 'CasinoRoyale/Feedback', element: <FeedbackGamer /> }
      ]
    },
    {
      path: '/dashboardTester',
      element: <DashboardLayoutTester />,
      children: [
        { element: <Navigate to="/dashboardTester/app" replace /> },
        { path: 'products', element: <Products /> },
        { path: 'products/newProject', element: <Project1 /> },
        { path: 'app', element: <DashboardAppTester /> },
        { path: 'payment', element: <PaymentPage />},
        { path: 'paymentSuscribe', element: <PaymentSuscribe />},
        { path: 'user', element: <User /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
  ]);
}
