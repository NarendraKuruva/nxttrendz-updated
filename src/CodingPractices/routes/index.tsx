import React from 'react'
import { Route } from 'react-router-dom'
import About from '../components/RoutingPractice/About'
import Contact from '../components/RoutingPractice/Contact'
import Home from '../components/RoutingPractice/Home'
import BlogDetailedView from '../components/RoutingPractice/Home/BlogDetailedView'
import NotFound from '../components/RoutingPractice/NotFound'

export const codingPractisesRoutes = [
   <Route exact path='/routerassignment/' component={Home} key='home' />,
   <Route exact path='/routerassignment/about' component={About} key='about' />,
   <Route
      exact
      path='/routerassignment/contact'
      component={Contact}
      key='contact'
   />,
   <Route
      exact
      path='/routerassignment/notfound'
      component={NotFound}
      key='notfound'
   />,
   <Route
      exact
      path='/blogsassignment/blogs/:id'
      component={BlogDetailedView}
      key='detailedview'
   />
]
