import React from 'react';
import LoginForm from "./login";
import RegistrationForm from "./registration";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
require('../../scss/style.scss');


const Links = () => (
    <div className="list-group">
        <NavLink  exact activeClassName="active" to="/">Login</NavLink>
        <NavLink  activeClassName="active" to="/register">Register</NavLink>
    </div>  
);

const RouterComponent = () => (
    <Router>
        <div class="row">
            <section className="col-sm-4">
                <Links />
            </section>
            <section className="col-sm-4">            	
                <Route exact path="/" component={LoginForm} />
                <Route path="/register" component={RegistrationForm} />
            </section>
        </div>        
    </Router>
);


const App = () => (
	<RouterComponent />
);

export default App;