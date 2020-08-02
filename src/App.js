import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Login from './componets/auth/Login';
import Register from './componets/auth/Register';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    <Register />
                </div>
            </Provider>
        )
    }
}

export default App;
