import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Home'
import TestComponent from './TestComponent'

const App = () => {
  const routerDefault = [
    { path: '', element: <Home /> },
    { path: 'search/:destination/:date', element: <TestComponent /> },
  ]


  let routes = useRoutes([
    { path: 'app', children: routerDefault},
    { path: 'afiliate/:slug', children: routerDefault},
    // ...
  ])

  return routes
}

export default App
