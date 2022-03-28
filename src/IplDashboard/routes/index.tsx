import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import TeamMatches from '../components/TeamMatches'

export const IPLRoutes = [
   <Route exact path='/ipl' component={Home} key='contact' />,
   <Route exact path='/ipl/:id' component={TeamMatches} key='iplteam' />
]
