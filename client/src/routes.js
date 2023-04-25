import {createBrowserRouter} from "react-router-dom";
import {NotFound,Auth,Login,Register,Main,Profile,AuthSelf}  from "./pages";
import App from './App';
import ChatProvider from './context/ChatProvider';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <ChatProvider><App/></ChatProvider>,
      children: [
        {
            index: true,
            element: <Main/>
        },
        {
            path: "/auth",
            element: <Auth/>
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