import {createBrowserRouter} from "react-router-dom";
import {NotFound,Auth,Login,Register,Main,Profile,AuthSelf}  from "./pages";
import App from './App';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            index: true,
            element: <Main/>
        },
        {
            path: "/auth",
            element: <Auth/>,
            children: [
                {
                    index: true,
                    element: <AuthSelf/>,
                },
                {
                    path:"/auth/login",
                    element: <Login/>
                },
                {
                    path:"/auth/register",
                    element: <Register/>
                }
            ]
        },
        {
            path: "/profile",
            element: <Profile/>
        }
      ]
  
    },

    {
        path: "*",
        element: <NotFound/>
    }
  ]);