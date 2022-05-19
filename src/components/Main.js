import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import HeaderComponent from './HeaderComponent';
import Home from './Home';
import Report from './Report';
import {companies} from './companies';
import ReportDetails from './ReportDetails';
import { BrowserRouter } from 'react-router-dom';
import Bills from './Bills';

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
                    <Route path="/home" component={() => <Home />} />
                    <Route exact path="/report" component={() => <Report />} />
                    <Route path="/report/:id" component={() => <ReportDetails />} />
                    <Route path="/bills" component={() => <Bills />} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main;