
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home></Home>
    },
    {
      path:'Register',
      element: <Register></Register>,
      errorElement: <NotFound></NotFound>
      
    }
  ])
  return (
    <div>
    
  <RouterProvider router={router}></RouterProvider>
  </div>
  )
  
}

export default App