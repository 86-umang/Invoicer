import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import { AuthProvider } from './contexts/AuthContext';


function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;