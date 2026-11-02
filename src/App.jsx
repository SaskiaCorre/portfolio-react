import './App.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';

import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { useEffect, useState}  from 'react';

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

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Root() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => 
      currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>  
    <Header theme={theme} onToggleTheme={toggleTheme} />
    <ScrollToTop />
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