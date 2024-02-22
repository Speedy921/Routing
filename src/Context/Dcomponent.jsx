import React, {Component} from 'react';
import Acomponent from './Acomponent';
import Home from './Home';
import About from './About';
import Users from './Users';
import {
    BrowserRouter as Router, Switch, Link, Route
  } from "react-router-dom";


export default class Dcomponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"Web Dev Blog"
        };
    }


    render(){
        return(
            <div>
               
               <p>Hello Youtube {this.state.name}</p>
               <Acomponent name={this.state.name}/>

                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/About">
                                <About/>
                            </Route>
                            <Route path="/Users">
                                <Users/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}