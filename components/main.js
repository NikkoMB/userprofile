import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from '../component/portfolio.js'; 
import Resume from '../component/resume.js'; 
import Home from '../component/home.js'; 
import Contact from '../component/contact.js'; 
import Nav from '../component/nav.js'; 


//----------------------------------------------

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/Contact' component={Contact}></Route>
                <Route exact path='/Portfolio' component={Portfolio}></Route>
                <Route exact path='/Resume' component={Resume}></Route>
            </Switch>
        )
    }
}


