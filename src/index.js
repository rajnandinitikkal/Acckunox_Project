import ReactDOM from 'react-dom/client';

import About from './View/About/About';
import Login from './View/Login/Login';
import Home from './';

import { RouterProvider , createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
 { path:"/" ,
  element : <Home/>
 },
 { path:"/About" ,
  element : <About/>
 },
 { path:"/Login" ,
  element : <Login/>
 },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <> 
  <RouterProvider router={router}/>
 
</>
 
);

