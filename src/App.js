
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import AddService from './Components/Pages/AddService/AddService';

import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Services from './Components/Pages/Services/Services';



function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/services",
          element: <Services></Services>
        },
        {
          path: "/services/:id",
          element: <Services></Services>
        },
        {
          path: "/blog",
          element: <Home></Home>
        },
        {
          path: "/addService",
          element: <AddService></AddService>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
