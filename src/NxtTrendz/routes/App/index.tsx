import React from 'react'
import { Route } from 'react-router'
import ProtectedRoute from '../../components/ProtectedRoute'
import LoginForm from '../../components/LoginForm'
import Home from '../../components/Home'
import Products from '../../components/Products'
import Cart from '../../components/Cart'
import NotFound from '../../components/NotFound'
import ProductItemDetails from '../../components/ProductItemDetails'

export const NxtTrendsRoutes = [
   <Route
      exact
      path='/nxttrendz/login'
      component={LoginForm}
      key='loginform'
   />,
   <ProtectedRoute exact path='/nxttrendz/' component={Home} key='home' />,
   <ProtectedRoute
      exact
      path='/nxttrendz/products/'
      component={Products}
      key='products'
   />,
   <ProtectedRoute exact path='/nxttrendz/cart/' component={Cart} key='cart' />,
   <ProtectedRoute
      exact
      path='/nxttrendz/products/:id'
      component={ProductItemDetails}
      key='product'
   />,
   <Route component={NotFound} key='notfound' />
]
