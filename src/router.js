import { createBrowserRouter } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import PortfolioPage from './components/PortfolioPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProjectsPage />,
    },
    {
        path: '/PortfolioPage/:id?',
        element: <PortfolioPage />,
    }
])

export default router;