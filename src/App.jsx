import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import "../index.css"

const App = () => {
  const routes = [
    { path: '*', id: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", component: <Home/>},
]

  return (
    <>
        <Routes >
    {routes.map(({id, component, path}, _) => <Route key={id} path={path} element={component} />)}
  </Routes>
   
    </>
  )
}

export default App
