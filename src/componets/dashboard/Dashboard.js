import React, { Component } from 'react';
import Navbar from '../navigation/Navbar';
import { loginUser } from '../../actions/authActions';

class Dashboard extends Component {
    componentDidMount() {
        if (!localStorage.jwtToken) {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <h1>Dash</h1>
            </div>
        )
    }
}

export default Dashboard;