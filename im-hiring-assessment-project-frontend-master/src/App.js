import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Users from './Users/Users';
import Board from './Board/Board';

class App extends Component {
    render() { 
        return ( 
        <div>
            <Switch>
                <Route path="/Users" component={Users}/>      
                <Route path="/Board" component={Board}/>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound}/>
            </Switch>       
        </div>
         );
    }
}
 
export default App;