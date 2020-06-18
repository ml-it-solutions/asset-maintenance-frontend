import React from 'react';
import Router from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/Helpers.css';
import './css/Main.css';

import Login from './components/login/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={Login} />
            </BrowserRouter>
        </div>
    );
}

export default App;
