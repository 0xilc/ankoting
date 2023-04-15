import {Home,NotFound,AuthLayout,Login,Register,Contact,HomeLayout,Profile,Blog,BlogLayout,Categories,Post,PostNotFound} from './pages'
import PrivateRoute from './components'
const routes = [

    {
        path: '/',
        element: <HomeLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'blog',
                element: <BlogLayout/>,
                children:[
                    {
                        index:true,
                        element:<Blog/>,
                    },
                    {
                        path:'categories',
                        element:<Categories/>
                    },
                    {
                        path:'post/:id/:url',
                        element:<Post/>
                    },
                    {
                        path:'*',
                        element:<PostNotFound/>
                    },
                ]
            },

            
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'login',
                element:<Login/>,
            },
            {
                path:'register',
                element:<Register/>,
            }
            
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    }



]

export default routes