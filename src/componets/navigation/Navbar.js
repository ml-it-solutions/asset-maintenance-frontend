import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        window.location.href = '/login';
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        return(
            <div>
                <a
                    href=""
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link"
                >
                    {' '}
                    Logout
                </a>
            </div>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
    
const mapStateToProps = state => ({
    auth: state.auth
});
    
export default connect(mapStateToProps, { logoutUser })(Navbar);