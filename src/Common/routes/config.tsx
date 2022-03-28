import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
   NOT_FOUND_PAGE_PATH,
   NOT_FOUND_PAGE
} from '../constants/NavigationConstants'
import PageNotFound404 from '../components/PageNotFound404'
import { codingPractisesRoutes } from '../../CodingPractices/routes'
import { IPLRoutes } from '../../IplDashboard/routes'
import { NxtTrendsRoutes } from '../../NxtTrendz/routes/App'
import { RegistrationFormRoutes } from '../../RegistrationForm/routes'
import TodoProject from '../../TodosApplication/components/Form'
import LayoutHome from '../../LayoutCodingPractice/components/Home'
import CounterWithToast from './CounterWithToast'
import Home from './Home'

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/counter' component={CounterWithToast} />
         <Route exact path='/todos' component={TodoProject} />

         {codingPractisesRoutes}
         {IPLRoutes}
         {NxtTrendsRoutes}
         <Route path='/layout' component={LayoutHome} />
         {RegistrationFormRoutes}
         <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         />
      </Switch>
   </Router>
)
