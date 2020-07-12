import React from 'react'
import { useRoutes } from 'hookrouter'

import Home    from '../pages/Home'
import Shirt   from '../pages/Shirt'
import Paint   from '../pages/Paint'
import Shoes   from '../pages/Shoes'

const routes = {
  '/'         :  () => <Home />,
  '/camisetas':  () => <Shirt />,
  '/calcas'   :  () => <Paint />,
  '/calcados' :  () => <Shoes />
}

function Route(){
  return useRoutes(routes)
}

export default Route
