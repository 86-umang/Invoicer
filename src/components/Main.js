import React, {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import HeaderComponent from './HeaderComponent';
import Home from './Home';
import Report from './Report';
import ReportDetails from './ReportDetails';
import Bills from './Bills';
import Login from './Login';

function Main() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showHeader, setShowHeader] = useState(false);

    const RequireAuth = ({ children }) => {
        if (((localStorage.getItem("email"))=== null && (localStorage.getItem("password"))=== null) || 
            ((localStorage.getItem("email"))=== 'undefined' && (localStorage.getItem("password"))=== 'undefined')) {
            return <Navigate to="/login" />;
        }
        else {
            setShowHeader(true)
            return children
        }    
    };

    var hour = 2; 
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
        localStorage.setItem('setupTime', now)
    } else {
        if(now-setupTime > hour*60*60*1000) {
            localStorage.clear()
            localStorage.setItem('setupTime', now);
        }
    }

    return (
        <div>
            {showHeader ? 
                <HeaderComponent />
                : (
                    <></>
                )
            }
            <Routes>
                <Route path="/login" element={<Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
                <Route path="/home" 
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    } 
                />
                <Route exact path="/report" 
                    element={
                        <RequireAuth>
                            <Report />
                        </RequireAuth>
                    } 
                />
                <Route path="/report/:id" 
                    element={
                        <RequireAuth>
                            <ReportDetails />
                        </RequireAuth>
                    } 
                />
                <Route path="/bills" 
                    element={
                        <RequireAuth>
                            <Bills />
                        </RequireAuth>
                    } 
                />
                <Route path="/" 
                    element={
                        <RequireAuth>
                            <Navigate replace to="/home" />
                        </RequireAuth>
                    } 
                />
            </Routes>
        </div>
    );
}

export default Main;