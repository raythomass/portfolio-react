import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import './index.css'
 import App from './App.jsx'
import Home from './pages/Homepage.jsx'
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import About from './pages/About.jsx';

 const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/projects',
        element: <Projects/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/resume',
        element: <Resume/>
      },
    ]
  },
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
