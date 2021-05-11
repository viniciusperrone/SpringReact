import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Test from 'pages/Test';

const Routes: React.FC = () =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/test" component={Test} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes;