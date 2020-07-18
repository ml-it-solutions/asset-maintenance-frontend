import React from 'react';
import Router from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './css/Helpers.css';
import './css/Main.css';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Equipment from './components/equipment/Equipment';

function App() {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/equipment" component={Equipment} />
            </BrowserRouter>
        </div>
    );
}

export default App;