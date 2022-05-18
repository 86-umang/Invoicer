import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import HeaderComponent from './HeaderComponent';
import Home from './Home';
import Report from './Report';
import {companies} from './companies';
import ReportDetails from './ReportDetails';
import { BrowserRouter } from 'react-router-dom';

function Main() {

    // const ReportWithId = () => {
    //     return(
    //         <ReportDetails 
    //             company = {companies.filter((company) => company.id === parseInt(params.id,10))[0]} 
    //         />
    //     )
    // }

    return (
        <div>
            <HeaderComponent />
            <BrowserRouter>
                <Switch>
                    <Route path="/report/:id" component={withRouter(() => <ReportDetails />)} />
                    <Route exact path="/report" component={withRouter(() => <Report />)} />
                    <Route path="/home" component={withRouter(() => <Home />)} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main;