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
import ProjectGameFeedback from './pages/ProjectGameFeedback';
import ProjectGameClient from './pages/ProjectGameClient';
import PaymentPage from "./components/paymentGameTesting/PaymentPage";
import PaymentFeedback from "./components/paymentGameFeedback/PaymentPage";
import PaymentSuscribe from "./components/paymentSuscribe/PaymentPage";
import ProjectFeedbackGamer from './pages/ProjectFeedbackGamer';
import DashboardAppTester from './pages/DashboardAppTester';
import DashboardLayoutTester from './layouts/dashboardTester';
import Feedback from './pages/GameFeedback';
import BugReport from './pages/BugReport';
import FeedbackGamer from './pages/FeedbackGamer';
import MyActiveProjects from './pages/MyActiveProjects';
import ProjectGameTester from './pages/ProjectGameTester';
import ProjectGameTesterFeedback from './pages/ProjectGameTesterFeedback';
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
        { path: 'GameFeedback', element: <Feedback/>},        
        { path: 'GameFeedback', element: <Feedback/>},
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
        { path: 'CasinoRoyaleFeedback', element: <ProjectGameFeedback /> },
        { path: 'CasinoRoyale/Feedback', element: <ProjectFeedbackGamer/>}
      ]
    },
    {
      path: '/projects',
      element: <DashboardLayoutTester />,
      children: [
        { element: <Navigate to="/dashboardTester/app" replace /> },
        { path: 'CasinoRoyale', element: <ProjectGameTester /> },
        { path: 'CasinoRoyaleFeedback', element: <ProjectGameTesterFeedback /> },
        { path: 'CasinoRoyale/FeedbackGamer', element: <FeedbackGamer /> },
        { path: 'CasinoRoyale/Report', element: <BugReport /> }
      ]
    },
    {
      path: '/dashboardTester',
      element: <DashboardLayoutTester />,
      children: [
        { element: <Navigate to="/dashboardTester/app" replace /> },
        { path: 'myActiveProjects', element: <MyActiveProjects /> },
        { path: 'myActiveProjects', element: <MyActiveProjects /> },
        { path: 'app', element: <DashboardAppTester /> },
        { path: 'payment', element: <PaymentPage />},
        { path: 'paymentSuscribe', element: <PaymentSuscribe />},
        { path: 'user', element: <User /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
  ]);
}
