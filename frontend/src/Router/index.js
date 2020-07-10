import React from 'react'
import { useRoutes } from 'hookrouter'

import Home    from '../pages/Home'
import Shirt   from '../pages/Shirt'
import Paint   from '../pages/Paint'
import Shoes   from '../pages/Shoes'
import Contact from '../pages/Contact'

const routes = {
  '/':       () => <Home />,
  '/shirt':  () => <Shirt />,
  '/paint':  () => <Paint />,
  '/shoes':  () => <Shoes />,
  '/contact':() => <Contact />
}

function Route(){
  return useRoutes(routes)
}

export default Route
