import { createBrowserRouter } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import PortfolioPage from './components/PortfolioPage';
import ContactMe from './components/contactMe/form';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProjectsPage />,
    },

    {
        path: '/PortfolioPage/:id?',
        element: <PortfolioPage />,
    },

    {
        path: '/contact',
        element: <ContactMe />,
    }
])

export default router;