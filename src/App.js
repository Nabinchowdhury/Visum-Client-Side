
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import AddService from './Components/Pages/AddService/AddService';

import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Login from './Components/Pages/Login/Login';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Services from './Components/Pages/Services/Services';
import SignUp from './Components/Pages/SignUp/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



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
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) => { return fetch(`http://localhost:5000/services/${params.id}`) }
        },
        {
          path: "/blog",
          element: <Home></Home>
        },
        {
          path: "/addService",
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
