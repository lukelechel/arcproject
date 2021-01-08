import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from '../Home/Home'
import WindowTreatments from '../WindowTreatments/WindowTreatments'
import CurrentPromotions from '../CurrentPromotions/CurrentPromotions'
import WindowTinting from '../WindowTinting/WindowTinting'
import OurPortfolio from '../OurPortfolio/OurPortfolio'
import Contact from '../Contact/Contact'
import Error from '../Error/Error'

const App = () => (<BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/window-treatments" component={WindowTreatments} exact />
        <Route path="/current-promotions" component={CurrentPromotions} exact />
        <Route path="/window-tinting" component={WindowTinting} exact />
        <Route path="/portfolio" component={OurPortfolio} exact />
        <Route path="/contact" component={Contact} exact />
        <Route component={Error} />
    </Switch>
</BrowserRouter>)

export default App
