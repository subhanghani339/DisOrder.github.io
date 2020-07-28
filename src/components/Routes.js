import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form  from './Form';
import Sidebar from './Sidebar';
import BasicTable from './BasicTable';

const Routes = () => {
    return (
        <Router>
            <div className="d-flex">
                <Sidebar />
                <Switch>
                    <Route path="/Form" component={Form} />
                    <Route path="/BasicTable" component={BasicTable} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;