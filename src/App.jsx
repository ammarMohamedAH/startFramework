
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Conatct from './Components/Conatct/Conatct'


function App() {

  let router = createBrowserRouter([
    { path: '', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'portfolio', element: <Portfolio /> },
    {path:"contact",element:<Conatct />},
    { path: '*', element: <div><h1>404 Not Found</h1></div> },
])

  return (

      <RouterProvider router={router}/>

  )
}

export default App
