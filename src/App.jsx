import './App.css';
import './index.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [ 
      {
      path: '/',
      element: <Home />
      },
      {
      path: '/a-propos',
      element: <About />
      },
      {
      path: '/projets',
      element: <Projects />
      },
      {
      path: '/projects/:slug',
      element: <ProjectDetails />
      },
      {
      path: '/contact',
      element: <Contact />
      },
    ],
  },
]);

function Root() {
  return (
    <>
  
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
      
    </>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}