import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/footer'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Home from './view/Home/Home';
import About from './view/About/About';
import Contact from './view/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/Contact',
    element:<Contact/>
  },
])

root.render(
  <div>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/> 
  </div>
 
);

