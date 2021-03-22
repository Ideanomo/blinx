
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './core/Home';
import Signin from './auth/Signin';
import Signup from './user/Signup';
import Dashboard from './product/Dashboard'
import Nav from './core/Nav';

const MainRouter = () => {
    return (<div>
        <Router>
            <Nav/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    </div>)
}

export default MainRouter;