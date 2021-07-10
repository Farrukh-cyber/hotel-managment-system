import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sign from './sign';
import Home from './home';
import Signing from './signing';
function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Signing} />
                <Route exact path="/sign" component={Sign} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRouter